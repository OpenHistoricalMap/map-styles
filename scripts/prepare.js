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
  styles.forEach((style) => {
    ohmVectorStyles[camelCase(style, { pascalCase: true })] = JSON.parse(fs.readFileSync(path.join(baseDir.path, style, `${style}.json`)));
  })
  fs.writeFileSync(
    path.join(distDir, `ohm.styles.js`),
`/* extends ohmVectorStyles defined in ohm.style.js */

ohmVectorStyles = ${JSON.stringify(ohmVectorStyles, null, 2)}`
    );
  } catch (err) {
    console.error (err)
  }

