const sharp = require('sharp');
const fs = require('fs');

const inputBuffer = fs.readFileSync('./sphere-2.png')

sharp(inputBuffer)
  .resize(62, 62)
  .toFile('./sphere-3.png', (err, info) => {});
