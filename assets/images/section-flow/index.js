const sharp = require('sharp');
const fs = require('fs');

const inputBuffer = fs.readFileSync('./1.jpeg')

sharp(inputBuffer)
  .resize(1290, 1310)
  .toFile('./hotel.webp', (err, info) => {});
