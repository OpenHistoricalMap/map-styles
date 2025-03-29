#! /usr/bin/env node

import fs from 'fs';
import path from 'path';
import * as fsExtra from 'fs-extra';
import camelCase from 'camelcase';

const
  baseDir = fs.opendirSync('.'),
  distDir = path.join(baseDir.path, 'dist'),
  styles = ['historical', 'japanese_scroll', 'railway', 'woodblock'],
  extensions = [
    '_spritesheet.json',
    '_spritesheet.png',
    '_spritesheet@2x.json',
    '_spritesheet@2x.png'
  ]
;

let ohmVectorStyles = {};

// Check that ./dist/ exists. If not, create it. If it does, empty it.
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
} else {
  fsExtra.emptyDirSync(distDir);
}

try {
  const assets = ['glyphs', 'sprite'];
  let ohmVectorStyle, neededFonts = [];
  styles.forEach((style) => {
    // Load each development style from disk, replace the scheme/domain/port, & make it the value of an ohm-website key,
    // e.g., japanese_scroll => ohmVectorStyles.JapaneseScroll
    const ohmWebsiteKey = camelCase(style, { pascalCase: true });
    ohmVectorStyles[ohmWebsiteKey] = JSON.parse(fs.readFileSync(path.join(baseDir.path, style, `${style}.json`)));
    ohmVectorStyle = ohmVectorStyles[ohmWebsiteKey];

    // Gather needed fonts
    ohmVectorStyle.layers.forEach((layer) => {
      if (layer.type === 'symbol' && layer.layout['text-font'] !== undefined) {
        layer.layout['text-font'].forEach((font) => {
          if (!neededFonts.includes(font)) {
            neededFonts.push(font)
          }
        })
      }
    })

    // Gather individual styles
    for (const source in ohmVectorStyle.sources) {
      ohmVectorStyle.sources[source].tiles[0] = ohmVectorStyle.sources[source].tiles[0].replace('vtiles.staging.openhistoricalmap.org', 'vtiles.openhistoricalmap.org')
    }
    assets.forEach((asset) => {
      ohmVectorStyle[asset] = ohmVectorStyle[asset]
        .replace('https://localhost:8888', 'https://www.openhistoricalmap.org/map-styles')
        .replace('https://openhistoricalmap.github.io', 'https://www.openhistoricalmap.org')
    })

    // Create complete subdirectories for each style
    fs.mkdirSync(path.join(distDir, style));
    extensions.forEach((ext) => {
      fs.writeFileSync(path.join(distDir, style, `${style}.json`), JSON.stringify(ohmVectorStyle, null, 2))
      fs.cpSync(path.join(style, `${style}${ext}`), path.join(distDir, style, `${style}${ext}`))
    })

  })

  // Populate dist
  neededFonts.forEach((f) => {
    fs.cpSync(path.join(baseDir.path, 'fonts', f), path.join(distDir, 'fonts', f), { recursive: true });
  })

  // Create single styles object for Rails app
  fs.writeFileSync(
    path.join(distDir, `ohm.styles.js`),
`/* extends ohmVectorStyles defined in ohm.style.js */

ohmVectorStyles = ${JSON.stringify(ohmVectorStyles, null, 2)}`
    );
  } catch (err) {
    console.error (err)
  }

