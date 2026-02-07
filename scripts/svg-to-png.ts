import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';

/**
 * Script to generate PNG versions of all SVG files in public/library
 * that don't already have a corresponding .png file.
 *
 * Usage:
 *   npx tsx scripts/svg-to-png.ts          # Dry run (preview what would be generated)
 *   npx tsx scripts/svg-to-png.ts --apply   # Generate PNG files
 *
 * Options:
 *   --apply       Actually write the PNG files (default is dry run)
 *   --size=N      Set the output size in pixels (default: 512)
 *   --density=N   Set the SVG rendering density/DPI (default: 300)
 */

const LIBRARY_PATH = path.join(__dirname, '..', 'public', 'library');

const DEFAULT_SIZE = 512;
const DEFAULT_DENSITY = 300;

function parseArgs() {
  const applyMode = process.argv.includes('--apply');

  const sizeArg = process.argv.find((arg) => arg.startsWith('--size='));
  const size = sizeArg ? parseInt(sizeArg.split('=')[1], 10) : DEFAULT_SIZE;

  const densityArg = process.argv.find((arg) => arg.startsWith('--density='));
  const density = densityArg
    ? parseInt(densityArg.split('=')[1], 10)
    : DEFAULT_DENSITY;

  return { applyMode, size, density };
}

function getAllSvgFiles(dirPath: string): string[] {
  const files: string[] = [];

  for (const entry of fs.readdirSync(dirPath)) {
    const fullPath = path.join(dirPath, entry);
    if (fs.statSync(fullPath).isDirectory()) {
      files.push(...getAllSvgFiles(fullPath));
    } else if (entry.toLowerCase().endsWith('.svg')) {
      files.push(fullPath);
    }
  }

  return files;
}

function getPngPath(svgPath: string): string {
  return svgPath.replace(/\.svg$/i, '.png');
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const units = ['B', 'KB', 'MB'];
  const i = Math.floor(Math.log(Math.abs(bytes)) / Math.log(1024));
  const value = bytes / Math.pow(1024, i);
  return `${value.toFixed(1)} ${units[i]}`;
}

interface ConvertResult {
  svgFile: string;
  pngFile: string;
  svgSize: number;
  pngSize: number;
  skipped: boolean;
  error?: string;
}

async function convertSvgToPng(
  svgPath: string,
  pngPath: string,
  size: number,
  density: number,
  apply: boolean,
): Promise<ConvertResult> {
  const svgFileName = path.basename(svgPath);
  const pngFileName = path.basename(pngPath);
  const svgSize = fs.statSync(svgPath).size;

  // Check if PNG already exists
  if (fs.existsSync(pngPath)) {
    return {
      svgFile: svgFileName,
      pngFile: pngFileName,
      svgSize,
      pngSize: fs.statSync(pngPath).size,
      skipped: true,
    };
  }

  if (!apply) {
    return {
      svgFile: svgFileName,
      pngFile: pngFileName,
      svgSize,
      pngSize: 0,
      skipped: false,
    };
  }

  try {
    const pngBuffer = await sharp(svgPath, { density })
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();

    fs.writeFileSync(pngPath, pngBuffer);

    return {
      svgFile: svgFileName,
      pngFile: pngFileName,
      svgSize,
      pngSize: pngBuffer.length,
      skipped: false,
    };
  } catch (error) {
    return {
      svgFile: svgFileName,
      pngFile: pngFileName,
      svgSize,
      pngSize: 0,
      skipped: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

async function main() {
  const { applyMode, size, density } = parseArgs();

  console.log('🔍 Scanning library for SVG files...\n');

  const svgFiles = getAllSvgFiles(LIBRARY_PATH);

  if (svgFiles.length === 0) {
    console.log('✅ No SVG files found. Nothing to do.\n');
    return;
  }

  console.log(`📁 Found ${svgFiles.length} SVG file(s).`);
  console.log(`⚙️  Output size: ${size}x${size}px | Density: ${density} DPI\n`);

  const results: ConvertResult[] = [];

  for (const svgPath of svgFiles) {
    const pngPath = getPngPath(svgPath);
    const result = await convertSvgToPng(svgPath, pngPath, size, density, applyMode);
    results.push(result);
  }

  let skippedCount = 0;
  let generatedCount = 0;
  let errorCount = 0;
  let totalPngSize = 0;

  for (const result of results) {
    if (result.error) {
      console.log(`  ❌ ${result.svgFile} → Error: ${result.error}`);
      errorCount++;
    } else if (result.skipped) {
      skippedCount++;
    } else {
      generatedCount++;
      totalPngSize += result.pngSize;
      if (applyMode) {
        console.log(
          `  ✅ ${result.svgFile} → ${result.pngFile} (${formatBytes(result.pngSize)})`,
        );
      } else {
        console.log(`  📋 ${result.svgFile} → ${result.pngFile} (will be generated)`);
      }
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`   Total SVGs:     ${svgFiles.length}`);
  console.log(`   To generate:    ${generatedCount}`);
  console.log(`   Already exist:  ${skippedCount}`);
  if (errorCount > 0) console.log(`   Errors:         ${errorCount}`);
  if (applyMode && totalPngSize > 0)
    console.log(`   Total PNG size: ${formatBytes(totalPngSize)}`);

  if (!applyMode) {
    console.log('\n🔎 Dry run complete. No files were written.');
    console.log('   Run with --apply to generate PNG files:\n');
    console.log('   npx tsx scripts/svg-to-png.ts --apply\n');
    console.log('   Options:');
    console.log('     --size=N     Output size in px (default: 512)');
    console.log('     --density=N  SVG render density (default: 300)\n');
    return;
  }

  console.log(`\n✅ Done! ${generatedCount} PNG file(s) generated.\n`);
}

main().catch((error) => {
  console.error('❌ Unexpected error:', error);
  process.exit(1);
});
