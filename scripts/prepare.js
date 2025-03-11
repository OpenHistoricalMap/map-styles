#! /usr/bin/env node

import fs from 'fs';
import path from 'path';
import camelCase from 'camelcase';

const
  baseDir = fs.opendirSync('.'),
  distDir = path.join(baseDir.path, 'dist'),
  styles = ["historical", "japanese_scroll", "railway", "woodblock"]
;

let ohmVectorStyles = {};

// Check that ./dist/ exists. If not, create it.
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

try {
  const assets = ['glyphs', 'sprite'];
  styles.forEach((style) => {
    // Load each development style from disk, replace the scheme/domain/port, & make it the value of an ohm-website key,
    // e.g., japanese_scroll => ohmVectorStyles.JapaneseScroll
    const ohmWebsiteKey = camelCase(style, { pascalCase: true });
    ohmVectorStyles[ohmWebsiteKey] = JSON.parse(fs.readFileSync(path.join(baseDir.path, style, `${style}.json`)));
    assets.forEach((asset) => {
      ohmVectorStyles[ohmWebsiteKey][asset] = ohmVectorStyles[ohmWebsiteKey][asset].replace('http://localhost:8888', 'https://www.openhistoricalmap.org/map-styles')
    })
  })
  fs.writeFileSync(
    path.join(distDir, `ohm.styles.js`),
`/* extends ohmVectorStyles defined in ohm.style.js */

ohmVectorStyles = ${JSON.stringify(ohmVectorStyles, null, 2)}`
    );
  } catch (err) {
    console.error (err)
  }

