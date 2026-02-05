import * as fs from 'fs';
import * as path from 'path';
import { LOGOS_DATA } from '../src/api/logos-data';

/**
 * Script to delete logo files not referenced in logos-data.ts
 */

const LIBRARY_PATH = path.join(__dirname, '..', 'public', 'library');

// Function to get all files in a directory recursively
function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

// Function to extract all logo URLs referenced in LOGOS_DATA
function getReferencedLogoUrls(): Set<string> {
  const referencedUrls = new Set<string>();

  LOGOS_DATA.forEach((logoItem) => {
    const { logo } = logoItem;

    // Process light icons
    if (logo.icon?.light) {
      logo.icon.light.forEach((item) => {
        if (item.url) {
          referencedUrls.add(item.url);
        }
      });
    }

    // Process dark icons
    if (logo.icon?.dark) {
      logo.icon.dark.forEach((item) => {
        if (item.url) {
          referencedUrls.add(item.url);
        }
      });
    }

    // Process light text
    if (logo.text?.light) {
      logo.text.light.forEach((item) => {
        if (item.url) {
          referencedUrls.add(item.url);
        }
      });
    }

    // Process dark text
    if (logo.text?.dark) {
      logo.text.dark.forEach((item) => {
        if (item.url) {
          referencedUrls.add(item.url);
        }
      });
    }
  });

  return referencedUrls;
}

// Main function
function cleanUnusedLogos() {
  console.log('🔍 Searching for files in library folder...\n');

  // Get all files
  const allFiles = getAllFiles(LIBRARY_PATH);
  console.log(`📁 Total files found: ${allFiles.length}\n`);

  // Get referenced URLs
  const referencedUrls = getReferencedLogoUrls();
  console.log(`📋 Total references in logos-data.ts: ${referencedUrls.size}\n`);

  // Find unreferenced files
  const unreferencedFiles: string[] = [];

  allFiles.forEach((filePath) => {
    // Convert file path to relative URL used in logos-data
    const relativePath = filePath
      .replace(path.join(__dirname, '..', 'public'), '')
      .replace(/\\/g, '/'); // Normalize slashes for Windows

    if (!referencedUrls.has(relativePath)) {
      unreferencedFiles.push(filePath);
    }
  });

  console.log(`🗑️  Unreferenced files found: ${unreferencedFiles.length}\n`);

  if (unreferencedFiles.length === 0) {
    console.log('✅ No files to delete. Everything is clean!\n');
    return;
  }

  // Show files that will be deleted
  console.log('📝 List of files to be deleted:\n');
  unreferencedFiles.forEach((file, index) => {
    const fileName = path.basename(file);
    console.log(`  ${index + 1}. ${fileName}`);
  });

  // Ask for confirmation (in interactive environment)
  console.log('\n⚠️  To delete these files, run the script with the --delete flag\n');

  // If --delete flag is passed, delete the files
  if (process.argv.includes('--delete')) {
    console.log('🗑️  Deleting files...\n');
    
    let deletedCount = 0;
    unreferencedFiles.forEach((file) => {
      try {
        fs.unlinkSync(file);
        deletedCount++;
        console.log(`  ✓ Deleted: ${path.basename(file)}`);
      } catch (error) {
        console.error(`  ✗ Error deleting ${path.basename(file)}:`, error);
      }
    });

    console.log(`\n✅ Process completed. ${deletedCount} files deleted.\n`);

    // Clean empty directories
    cleanEmptyDirectories(LIBRARY_PATH);
  } else {
    console.log('ℹ️  Run: npm run clean-logos -- --delete (to delete)\n');
  }
}

// Function to clean empty directories
function cleanEmptyDirectories(dirPath: string) {
  if (!fs.existsSync(dirPath)) return;

  const files = fs.readdirSync(dirPath);

  if (files.length === 0) {
    // Directory is empty, delete it
    fs.rmdirSync(dirPath);
    console.log(`  ✓ Empty directory deleted: ${path.basename(dirPath)}`);
    return;
  }

  // Check subdirectories
  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      cleanEmptyDirectories(filePath);
    }
  });

  // Check again if directory became empty
  const filesAfter = fs.readdirSync(dirPath);
  if (filesAfter.length === 0 && dirPath !== LIBRARY_PATH) {
    fs.rmdirSync(dirPath);
    console.log(`  ✓ Empty directory deleted: ${path.basename(dirPath)}`);
  }
}

// Execute the script
try {
  cleanUnusedLogos();
} catch (error) {
  console.error('❌ Error executing script:', error);
  process.exit(1);
}
