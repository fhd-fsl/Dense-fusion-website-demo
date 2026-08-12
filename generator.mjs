import fs from 'fs';
import path from 'path';

const SRC_INDUSTRY = 'defense';
const SRC_COMPONENTS_DIR = path.join(process.cwd(), 'src', 'components', 'industries', SRC_INDUSTRY);
const SRC_APP_DIR = path.join(process.cwd(), 'src', 'app', 'industries', SRC_INDUSTRY);
const SRC_ASSETS_DIR = path.join(process.cwd(), 'public', 'assets', 'industries', SRC_INDUSTRY);

const TARGET_INDUSTRY = process.argv[2];
if (!TARGET_INDUSTRY) {
  console.error("Usage: node generator.mjs <target_industry>");
  process.exit(1);
}

// Convert "defense" -> "Defense"
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const srcCap = capitalize(SRC_INDUSTRY);
const targetCap = capitalize(TARGET_INDUSTRY);

const TARGET_COMPONENTS_DIR = path.join(process.cwd(), 'src', 'components', 'industries', TARGET_INDUSTRY);
const TARGET_APP_DIR = path.join(process.cwd(), 'src', 'app', 'industries', TARGET_INDUSTRY);
const TARGET_ASSETS_DIR = path.join(process.cwd(), 'public', 'assets', 'industries', TARGET_INDUSTRY);

// Create directories
[TARGET_COMPONENTS_DIR, TARGET_APP_DIR, TARGET_ASSETS_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// Copy files and replace strings
const processFiles = (srcDir, targetDir, isAsset = false) => {
  if (!fs.existsSync(srcDir)) return;
  const files = fs.readdirSync(srcDir);
  for (const file of files) {
    const srcPath = path.join(srcDir, file);
    if (fs.statSync(srcPath).isDirectory()) continue;

    const targetFile = file.replace(srcCap, targetCap);
    const targetPath = path.join(targetDir, targetFile);

    if (isAsset) {
      fs.copyFileSync(srcPath, targetPath);
    } else {
      let content = fs.readFileSync(srcPath, 'utf8');
      
      // Global Replacements
      content = content.replace(new RegExp(srcCap, 'g'), targetCap); // Defense -> Government
      content = content.replace(new RegExp(SRC_INDUSTRY, 'g'), TARGET_INDUSTRY); // defense -> government

      fs.writeFileSync(targetPath, content, 'utf8');
    }
  }
};

processFiles(SRC_COMPONENTS_DIR, TARGET_COMPONENTS_DIR);
processFiles(SRC_APP_DIR, TARGET_APP_DIR);
processFiles(SRC_ASSETS_DIR, TARGET_ASSETS_DIR, true);

console.log(`Successfully generated scaffolding for ${TARGET_INDUSTRY}`);
