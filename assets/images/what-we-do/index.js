const sharp = require('sharp');
const fs = require('fs');

const inputBuffer = fs.readFileSync('./design-process.webp')

sharp(inputBuffer)
  .resize(222, 284)
  .toFile('./design-process-2.webp', (err, info) => {});
