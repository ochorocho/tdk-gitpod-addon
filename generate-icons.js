const sharp = require('sharp')
const fs = require('fs')
const path = require('path')
const glob = require('glob')

const iconsFolder = path.join(__dirname, 'icons/')
const iconsTargetFolder = path.join(__dirname, './dist/icons/')
const iconsTargetFolderSafari = path.join(__dirname, './dist-safari/icons/')

// Create target folder if it does not exist
const dir = path.join(iconsTargetFolder)
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, 0o744)
}

// Safari - create target folder if it does not exist
const dirSafari = path.join(iconsTargetFolderSafari)
if (!fs.existsSync(dirSafari)) {
  fs.mkdirSync(dirSafari, 0o744)
}

// Get files to process
glob(path.join(iconsFolder, '**/*.svg'), function (er, files) {
  files.forEach((file) => {
    renderIcon(file, iconsTargetFolder)
    renderIcon(file, iconsTargetFolderSafari, [48, 512])
  })
})

// Generate icon sizes
function renderIcon(file, targetFolder, sizes = [48, 96, 128]) {
  const filename = path.parse(path.basename(file))

  sizes.forEach((size) => {
    sharp(file)
      .rotate()
      .resize(size)
      .png()
      .toFile(path.join(targetFolder, filename.name + '-' + size + '.png'))
      .catch(err => {
        console.log('Could not write file ...', err)
      })
  })
}
