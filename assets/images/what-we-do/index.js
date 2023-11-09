const sharp = require('sharp');
const fs = require('fs');

const inputBuffer = fs.readFileSync('./startup-3267505_640.jpg')

sharp(inputBuffer)
  .resize(347, 446)
  .toFile('./design.webp', (err, info) => {});
