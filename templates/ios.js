const jimp = require('jimp');

const { getFilesPath } = require('../utils')
const {log} = require('../utils/log.js')
const { FOLDER_SCREEENSHOT, PATH_ASSETS_IOS_MOBILE_6_5, PATH_ASSETS_IOS_MOBILE_5_5, PATH_ASSETS_IOS_TABLET_12_2ND, PATH_ASSETS_IOS_TABLET_12_3RD, PATH_RESULT } = require('../constants');

async function generateMobile_ios_6_5() {
  console.log('🏗  Creating assets devices 6.5 📱');
  const bg = await jimp.read(`${PATH_ASSETS_IOS_MOBILE_6_5}/bg.png`);
  const device = await jimp.read(`${PATH_ASSETS_IOS_MOBILE_6_5}/device.png`);
  const filesMobile = []
  const pathPrintMobile = await getFilesPath(FOLDER_SCREEENSHOT)

  for (const path of pathPrintMobile) {
    filesMobile.push(jimp.read(`${FOLDER_SCREEENSHOT}/${path}`))
  }

  Promise.all(filesMobile).then(() => {
    return Promise.all(filesMobile)
  }).then((data) => {
    for (let index = 0; index < data.length; index++) {
      data[index].resize(950, jimp.AUTO);
      bg.composite(data[index], 150, 120)
      bg.composite(device, 0, 100)
      bg.normalize()
      bg.write(`${PATH_RESULT}/ios/mobile-6.5/mobile6_5-${index}.jpg`);
      console.log(`[${index + 1}/${data.length}] Asset mobile6_5-${index}.jpg created`);
    }
    console.log('✅  Assets devices 6.5 completed');
  })
}

async function generateMobile_ios_5_5() {
  log('Creating assets devices 5.5 📱');

  const backgroud = await jimp.read(`${PATH_ASSETS_IOS_MOBILE_5_5}/bg.png`);

  const device = await jimp.read(`${PATH_ASSETS_IOS_MOBILE_5_5}/device.png`);

  const filesMobile = [];

  const pathPrintMobile = await getFilesPath(FOLDER_SCREEENSHOT);

  const backgroudSize = [backgroud.bitmap.width, backgroud.bitmap.height];

  const deviceSize = [device.bitmap.width, device.bitmap.height];

  const screenSize = [800, 1400];

  const imageCenter = [
    backgroudSize[0] / 2 - deviceSize[0] / 2, 
    backgroudSize[1] / 2 - deviceSize[1] / 2
  ];

  const deviceFrame = [
    backgroudSize[0] / 2 - (deviceSize[0] - (deviceSize[0] - screenSize[0])) / 2, 
    backgroudSize[1] / 2 - (deviceSize[1] - (deviceSize[1] - screenSize[1])) / 2
  ];

  for (const path of pathPrintMobile) {
    filesMobile.push(jimp.read(`${FOLDER_SCREEENSHOT}/${path}`))
  }

  Promise.all(filesMobile).then((data) => {
    return Promise.all(filesMobile)
  }).then((screenshots) => {
    for (let index = 0; index < screenshots.length; index++) {

      screenshots[index].resize(screenSize[0], screenSize[1]);

      backgroud.composite(device, imageCenter[0], imageCenter[1]);

      backgroud.composite(screenshots[index], deviceFrame[0], deviceFrame[1]);

      backgroud.write(`${PATH_RESULT}/ios/mobile-5.5/mobile5_5-${index}.jpg`);

      log(`[${index + 1}/${screenshots.length}] Asset mobile5_5-${index}.jpg created`);
    }
    log('Assets devices 5.5 completed', 'success');

  })
}

async function generateTablet_ios_12_9_2nd() {
  console.log('🏗  Creating assets tablet 12.9 2nd 🖼');
  const bg = await jimp.read(`${PATH_ASSETS_IOS_TABLET_12_2ND}/bg.png`);
  const device = await jimp.read(`${PATH_ASSETS_IOS_TABLET_12_2ND}/device.png`);
  const filesMobile = []
  const pathPrintMobile = await getFilesPath(FOLDER_SCREEENSHOT)

  for (const path of pathPrintMobile) {
    filesMobile.push(jimp.read(`${FOLDER_SCREEENSHOT}/${path}`))
  }

  Promise.all(filesMobile).then((data) => {
    return Promise.all(filesMobile)
  }).then((data) => {
    for (let index = 0; index < data.length; index++) {
      data[index].resize(1487, 1992);
      bg.composite(device, 100, 300)
      bg.composite(data[index], 240, 450)

      bg.write(`${PATH_RESULT}/ios/tablet-12.9-2nd/tablet-2nd-${index}.jpg`)
      console.log(`[${index + 1}/${data.length}] Asset tablet-3nd-${index}.jpg created`);
    }
    console.log('✅  Assets tablet 12.9 2nd completed');

  })
}

async function generateTablet_ios_12_9_3rd() {
  console.log('🏗  Creating assets tablet 12.9 2rd 🖼');
  const bg = await jimp.read(`${PATH_ASSETS_IOS_TABLET_12_3RD}/bg.png`);
  const device = await jimp.read(`${PATH_ASSETS_IOS_TABLET_12_3RD}/device.png`);
  const filesMobile = []
  const pathPrintMobile = await getFilesPath(FOLDER_SCREEENSHOT)

  for (const path of pathPrintMobile) {
    filesMobile.push(jimp.read(`${FOLDER_SCREEENSHOT}/${path}`))
  }

  Promise.all(filesMobile).then((data) => {
    return Promise.all(filesMobile)
  }).then((data) => {
    for (let index = 0; index < data.length; index++) {
      data[index].resize(1575, 2114);
      bg.composite(device, 150, 300)
      bg.composite(data[index], 215, 370)

      bg.write(`${PATH_RESULT}/ios/tablet-12.9-3rd/tablet-3rd-${index}.jpg`)
      console.log(`[${index + 1}/${data.length}] Asset tablet-3rd-${index}.jpg created`);
    }
    console.log('✅  Assets tablet 12.9 3rd completed');
  })
}

module.exports.generateMobile_ios_6_5 = generateMobile_ios_6_5;
module.exports.generateMobile_ios_5_5 = generateMobile_ios_5_5;
module.exports.generateTablet_ios_12_9_2nd = generateTablet_ios_12_9_2nd;
module.exports.generateTablet_ios_12_9_3rd = generateTablet_ios_12_9_3rd;