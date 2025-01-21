const fs = require('fs');
const path = require('path');

const styleFolders = [
  { folder: 'woodblock', outputFile: 'woodblock/woodblock.json' },
  { folder: 'rail', outputFile: 'rail/rail.json' },
  { folder: 'japanese_scroll', outputFile: 'japanese_scroll/ohm-japanese-scroll-map.json' },
  { folder: 'main', outputFile: 'main/main.json' }
];

styleFolders.forEach(({ folder, outputFile }) => {
  const basePath = path.join(__dirname, folder);
  const sourceFile = path.join(basePath, 'source.json');
  const layersDir = path.join(basePath, 'layers');
  let combinedData = {};

  try {
    console.log(`Loading source file: ${sourceFile}`);
    if (!fs.existsSync(sourceFile)) {
      throw new Error('source.json file not found!');
    }

    const sourceContent = fs.readFileSync(sourceFile, 'utf8');
    combinedData = JSON.parse(sourceContent);
  } catch (error) {
    console.error(`Error loading source.json in ${folder}: ${error.message}`);
    return;
  }

  try {
    if (!fs.existsSync(layersDir)) {
      throw new Error('Layers directory not found!');
    }

    const layerFiles = fs.readdirSync(layersDir)
      .filter(file => file.endsWith('.json'))
      .sort((a, b) => {
        const numA = parseInt(a.split('_')[0], 10);
        const numB = parseInt(b.split('_')[0], 10);
        return numA - numB;
      });

    console.log(`Merging ${layerFiles.length} layer files from ${layersDir}`);

    combinedData.layers = [];

    for (const file of layerFiles) {
      const filePath = path.join(layersDir, file);
      console.log(`Adding layers from: ${file}`);
      const layerContent = fs.readFileSync(filePath, 'utf8');

      try {
        const layers = JSON.parse(layerContent);
        combinedData.layers.push(...layers);
      } catch (parseError) {
        console.error(`Error parsing ${file}: ${parseError.message}`);
      }
    }

    const outputDir = path.dirname(outputFile);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Save the merged JSON to the specified output file
    fs.writeFileSync(outputFile, JSON.stringify(combinedData, null, 2));
    console.log(`Merged style saved to ${outputFile}`);
  } catch (error) {
    console.error(`Error processing layers in ${folder}: ${error.message}`);
  }

  console.log(`Style compilation for ${folder} completed successfully!`);
});
