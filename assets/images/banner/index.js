const sharp = require('sharp');
const fs = require('fs');

const inputBuffer = fs.readFileSync('./home-2618511_1280.jpg')

sharp(inputBuffer)
  .resize(1280, 720)
  .toFile('./home.webp', (err, info) => {});
