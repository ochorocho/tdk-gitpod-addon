const sharp = require('sharp')
const fs = require('fs')
const path = require('path')
const glob = require('glob')
const png2icons = require('png2icons')

const iconsFolder = path.join(__dirname, 'icons/')
const iconsTargetFolder = path.join(__dirname, './dist/icons/')
const iconsTargetFolderSafari = path.join(__dirname, './dist-safari/icons/')

// Create target folder if it does not exist
const dir = path.join(iconsTargetFolder)
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, {recursive: true})
}

// Safari - create target folder if it does not exist
const dirSafari = path.join(iconsTargetFolderSafari)
if (!fs.existsSync(dirSafari)) {
  fs.mkdirSync(dirSafari, {recursive: true})
}

// Get files to process
glob(path.join(iconsFolder, '**/*.svg'), function (er, files) {
  files.forEach((file) => {
    const filename = path.basename(file)

    if (!['typo3-background.svg'].includes(filename)) {
      renderIcon(file, iconsTargetFolder)
    }

    if (!['typo3-light.svg'].includes(filename)) {
      renderIcon(file, iconsTargetFolderSafari, [48, 512, 420], true)
    }
  })
})

// Generate icon sizes
function renderIcon(file, targetFolder, sizes = [48, 96, 128], icns = false) {
  const filename = path.parse(path.basename(file))

  sizes.forEach((size) => {
    sharp(file)
      .rotate()
      .resize(size)
      .png()
      .toFile(path.join(targetFolder, filename.name + '-' + size + '.png'))
      .catch(err => {
        console.log('Could not write file ...', err)
      }).then(() => {
        if (icns === true) {
          const input = fs.readFileSync(path.join(targetFolder, filename.name + '-' + size + '.png'))
          const output = png2icons.createICNS(input, png2icons.BILINEAR, 0)
          if (output) {
            fs.writeFileSync(path.join(targetFolder, filename.name + '-' + size + '.icns'), output)
          }
        }
      })
  })
}
