const jimp = require('jimp');

const { getFilesPath } = require('../utils')

const { PATH_ASSETS_ANDROID_DEFAULT, FOLDER_SCREEENSHOT, PATH_RESULT } = require('../constants');

async function generateMobile_android_default() {
  console.log('🏗  Creating assets devices android 📱');
  const bg = await jimp.read(`${PATH_ASSETS_ANDROID_DEFAULT}/bg.png`);
  // bg.color([
  //   { apply: 'mix', params: ['#8e44ad', 100] }
  // ])

  const device = await jimp.read(`${PATH_ASSETS_ANDROID_DEFAULT}/device.png`);
  const filesMobile = []
  const pathPrintMobile = await getFilesPath(FOLDER_SCREEENSHOT)


  for (const path of pathPrintMobile) {
    filesMobile.push(jimp.read(`${FOLDER_SCREEENSHOT}/${path}`));
  }

  Promise.all(filesMobile).then((data) => {
    return Promise.all(filesMobile)
  }).then((data) => {
    for (let index = 0; index < data.length; index++) {
      data[index].resize(1100, 1950);
      bg.composite(data[index], 80, 500);
      bg.composite(device, 0, 400)

      bg.write(`${PATH_RESULT}/android/mobile-default/android-${index}.jpg`);
      console.log(`[${index + 1}/${data.length}] Asset android-${index}.jpg created`);
    }
    console.log('✅  Assets devices android completed');

  })
}


module.exports.generateMobile_android_default = generateMobile_android_default;