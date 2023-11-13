const path = require("path");
const allowedTypes = ['svg', 'jpg', 'webp', 'jpeg']

function ImagePreserveDir(filePath, fileName, bundle) {
  if (bundle.type && allowedTypes.includes(bundle.type)) {
    const projectRoot = path.join(__dirname, '../src')
    const assetsDir = path.dirname(filePath)
    const relativePath = path.relative(projectRoot, assetsDir)

    return path.join(relativePath, fileName);
  } else {
    return fileName
  }
}

module.exports = {
  ImagePreserveDir
}
