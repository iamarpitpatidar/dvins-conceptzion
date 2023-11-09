const sharp = require('sharp');
const fs = require('fs');

const inputBuffer = fs.readFileSync('./living-room.jpg')

sharp(inputBuffer)
  .resize(1280, 840)
  .toFile('./living-room.webp', (err, info) => {});
