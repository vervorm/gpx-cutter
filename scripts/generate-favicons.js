#!/usr/bin/env node

/**
 * Favicon Generator Script
 *
 * Genereert alle benodigde favicon formaten van een source logo:
 * - favicon.ico (multi-size: 16x16, 32x32, 48x48)
 * - apple-touch-icon.png (180x180)
 * - android-chrome-192x192.png (192x192)
 * - android-chrome-512x512.png (512x512)
 * - favicon-16x16.png
 * - favicon-32x32.png
 * - site.webmanifest (PWA manifest)
 */

import favicons from 'favicons';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_LOGO = path.join(__dirname, '../public/logo-gpx-cutter.png');
const OUTPUT_DIR = path.join(__dirname, '../public');

const configuration = {
  path: '/',
  appName: 'GPX Cutter',
  appShortName: 'GPX Cutter',
  appDescription: 'Knip GPX routes in meerdere segmenten - Komoot Route Knipper',
  developerName: 'VERVORM',
  developerURL: 'https://vervorm.github.io/gpx-cutter/',
  background: '#ffffff',
  theme_color: '#F59E0B',
  display: 'standalone',
  orientation: 'portrait',
  start_url: '/',
  version: '1.2.1',
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: false,
    favicons: true,
    windows: false,
    yandex: false,
  },
};

async function generateFavicons() {
  console.log('🎨 Generating favicons...\n');

  try {
    // Check if source logo exists
    await fs.access(SOURCE_LOGO);
    console.log(`✅ Source logo found: ${SOURCE_LOGO}\n`);
  } catch (error) {
    console.error(`❌ ERROR: Source logo not found at ${SOURCE_LOGO}`);
    console.error('\nPlease upload your logo to:');
    console.error(`   ${SOURCE_LOGO}\n`);
    console.error('The logo should be a PNG file, preferably 512x512px or larger.\n');
    process.exit(1);
  }

  try {
    const response = await favicons(SOURCE_LOGO, configuration);

    // Save images
    console.log('📦 Saving favicon images...');
    for (const image of response.images) {
      const outputPath = path.join(OUTPUT_DIR, image.name);
      await fs.writeFile(outputPath, image.contents);
      console.log(`   ✓ ${image.name} (${image.contents.length} bytes)`);
    }

    // Save files (manifest, browserconfig, etc.)
    console.log('\n📦 Saving manifest files...');
    for (const file of response.files) {
      const outputPath = path.join(OUTPUT_DIR, file.name);
      await fs.writeFile(outputPath, file.contents);
      console.log(`   ✓ ${file.name}`);
    }

    // Generate HTML tags
    console.log('\n📝 HTML tags to add to <head>:');
    console.log('─'.repeat(60));
    response.html.forEach(tag => console.log(`   ${tag}`));
    console.log('─'.repeat(60));

    console.log('\n✅ Favicons generated successfully!\n');
    console.log('Next steps:');
    console.log('1. Copy the HTML tags above to your index.html <head>');
    console.log('2. Run `npm run build` to rebuild with new favicons');
    console.log('3. Deploy! 🚀\n');

  } catch (error) {
    console.error('❌ Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
