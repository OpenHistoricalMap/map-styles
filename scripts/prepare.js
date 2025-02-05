#! /usr/bin/env node

// SERVER_URL = os.getenv("SERVER_URL", "www.openhistoricalmap.org")
// environment = "staging" if "staging" in SERVER_URL else "production"

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

styles.forEach((style) => {
  try {
    ohmVectorStyles[style] = JSON.parse(fs.readFileSync(path.join(baseDir.path, style, `${style}.json`)));
    fs.writeFileSync(
      path.join(distDir, `ohm.style.${style}.js`),
`/* extends ohmVectorStyles defined in ohm.style.js */

ohmVectorStyles.${camelCase(style, { pascalCase: true })} = ${JSON.stringify(ohmVectorStyles[style], null, 2)}`
    );
  } catch (err) {
    console.error (err)
  }

});
