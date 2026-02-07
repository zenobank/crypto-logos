import * as fs from 'fs';
import * as path from 'path';
import { optimize, type Config } from 'svgo';

/**
 * Script to optimize all SVG files in public/library using SVGO v4.
 * The viewBox attribute is preserved by default in SVGO v4.
 *
 * Usage:
 *   npx tsx scripts/optimize-svgs.ts          # Dry run (preview savings)
 *   npx tsx scripts/optimize-svgs.ts --apply   # Apply optimizations
 */

const LIBRARY_PATH = path.join(__dirname, '..', 'public', 'library');

// SVGO v4: removeViewBox is no longer a default plugin,
// so viewBox is preserved by default.
const SVGO_CONFIG: Config = {
  plugins: ['preset-default'],
};

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

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const units = ['B', 'KB', 'MB'];
  const i = Math.floor(Math.log(Math.abs(bytes)) / Math.log(1024));
  const value = bytes / Math.pow(1024, i);
  return `${value.toFixed(1)} ${units[i]}`;
}

function formatPercent(before: number, after: number): string {
  if (before === 0) return '0%';
  const reduction = ((before - after) / before) * 100;
  return `${reduction.toFixed(1)}%`;
}

interface OptimizeResult {
  file: string;
  fileName: string;
  originalSize: number;
  optimizedSize: number;
  optimizedData: string;
  error?: string;
}

function optimizeFile(filePath: string): OptimizeResult {
  const fileName = path.basename(filePath);
  const originalData = fs.readFileSync(filePath, 'utf-8');
  const originalSize = Buffer.byteLength(originalData, 'utf-8');

  try {
    const result = optimize(originalData, { ...SVGO_CONFIG, path: filePath });
    const optimizedSize = Buffer.byteLength(result.data, 'utf-8');

    return {
      file: filePath,
      fileName,
      originalSize,
      optimizedSize,
      optimizedData: result.data,
    };
  } catch (error) {
    return {
      file: filePath,
      fileName,
      originalSize,
      optimizedSize: originalSize,
      optimizedData: originalData,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

function main() {
  const applyMode = process.argv.includes('--apply');

  console.log('🔍 Scanning library for SVG files...\n');

  const svgFiles = getAllSvgFiles(LIBRARY_PATH);

  if (svgFiles.length === 0) {
    console.log('✅ No SVG files found. Nothing to do.\n');
    return;
  }

  console.log(`📁 Found ${svgFiles.length} SVG file(s). Optimizing...\n`);

  const results: OptimizeResult[] = svgFiles.map(optimizeFile);

  // Sort by savings (most savings first)
  results.sort((a, b) => (b.originalSize - b.optimizedSize) - (a.originalSize - a.optimizedSize));

  let totalOriginal = 0;
  let totalOptimized = 0;
  let unchangedCount = 0;
  let errorCount = 0;

  for (const result of results) {
    totalOriginal += result.originalSize;
    totalOptimized += result.optimizedSize;

    if (result.error) {
      console.log(`  ❌ ${result.fileName}: ${result.error}`);
      errorCount++;
    } else if (result.originalSize === result.optimizedSize) {
      unchangedCount++;
    } else {
      const saved = result.originalSize - result.optimizedSize;
      const percent = formatPercent(result.originalSize, result.optimizedSize);
      console.log(
        `  ${saved > 0 ? '✅' : '⚠️ '} ${result.fileName}: ${formatBytes(result.originalSize)} → ${formatBytes(result.optimizedSize)} (${saved > 0 ? '-' : '+'}${formatPercent(result.originalSize, result.optimizedSize)})`
      );
    }
  }

  if (unchangedCount > 0) {
    console.log(`\n  ℹ️  ${unchangedCount} file(s) already optimal (no changes needed)`);
  }

  const totalSaved = totalOriginal - totalOptimized;
  console.log(`\n📊 Summary:`);
  console.log(`   Total files:    ${svgFiles.length}`);
  console.log(`   Original size:  ${formatBytes(totalOriginal)}`);
  console.log(`   Optimized size: ${formatBytes(totalOptimized)}`);
  console.log(`   Saved:          ${formatBytes(totalSaved)} (${formatPercent(totalOriginal, totalOptimized)})`);
  if (errorCount > 0) console.log(`   Errors:         ${errorCount}`);

  if (!applyMode) {
    console.log('\n🔎 Dry run complete. No files were changed.');
    console.log('   Run with --apply to write optimized files:\n');
    console.log('   npx tsx scripts/optimize-svgs.ts --apply\n');
    return;
  }

  // Apply optimizations
  console.log('\n🚀 Writing optimized files...\n');

  let writtenCount = 0;

  for (const result of results) {
    if (result.error || result.originalSize === result.optimizedSize) continue;

    try {
      fs.writeFileSync(result.file, result.optimizedData, 'utf-8');
      writtenCount++;
    } catch (error) {
      console.error(`  ❌ Error writing ${result.fileName}:`, error);
    }
  }

  console.log(`✅ Done! ${writtenCount} file(s) optimized and saved.\n`);
}

try {
  main();
} catch (error) {
  console.error('❌ Unexpected error:', error);
  process.exit(1);
}
