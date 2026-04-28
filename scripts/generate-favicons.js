#!/usr/bin/env node

/**
 * Favicon Generator Script
 * Genereert alle benodigde favicon formaten van logo-gpx-cutter.png
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
  path: '/gpx-cutter/',
  appName: 'GPX Cutter',
  appShortName: 'GPX Cutter',
  appDescription: 'Knip GPX routes in meerdere segmenten - Komoot Route Knipper',
  developerName: 'VERVORM',
  developerURL: 'https://vervorm.github.io/gpx-cutter/',
  background: '#ffffff',
  theme_color: '#1e3a5f',
  display: 'standalone',
  orientation: 'portrait',
  start_url: '/gpx-cutter/',
  version: '1.2.0',
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
  console.log('Generating favicons from:', SOURCE_LOGO);

  try {
    await fs.access(SOURCE_LOGO);
  } catch {
    console.error('ERROR: Logo not found at', SOURCE_LOGO);
    process.exit(1);
  }

  const response = await favicons(SOURCE_LOGO, configuration);

  for (const image of response.images) {
    await fs.writeFile(path.join(OUTPUT_DIR, image.name), image.contents);
    console.log('  Saved:', image.name);
  }

  for (const file of response.files) {
    await fs.writeFile(path.join(OUTPUT_DIR, file.name), file.contents);
    console.log('  Saved:', file.name);
  }

  console.log('\nHTML tags to add to index.html:');
  console.log('---');
  response.html.forEach(tag => console.log(tag));
  console.log('---');
}

generateFavicons().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
