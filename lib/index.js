const jimp = require('jimp');
const { log } = require('../utils/log.js');
const { getFilesPath } = require('../utils')

const { FOLDER_SCREEENSHOT, PATH_RESULT } = require('../constants');

async function generateAssets(pathBackgroud, pathDevice, screenSize = [1090, 1940], folder, fileName, behind = false, positionHeight = 1.8) {


  const backgroud = await jimp.read(`${pathBackgroud}/bg.png`);
  // backgroud.color([
  //   { apply: 'mix', params: ['#8e44ad', 100] }
  // ])

  const device = await jimp.read(`${pathDevice}/device.png`);

  const filesMobile = [];

  const pathPrintMobile = await getFilesPath(FOLDER_SCREEENSHOT);

  const backgroudSize = [backgroud.bitmap.width, backgroud.bitmap.height];

  const deviceSize = [device.bitmap.width, device.bitmap.height];

  // val 1 === header show;
  // val 1.5 === more header show;
  // val 1.8 === default ;
  // val 2 === image center;

  const imageCenter = [
    backgroudSize[0] / 2 - deviceSize[0] / 2,
    backgroudSize[1] / positionHeight - deviceSize[1] / 2
  ];

  const deviceFrame = [
    backgroudSize[0] / 2 - (deviceSize[0] - (deviceSize[0] - screenSize[0])) / 2,
    backgroudSize[1] / positionHeight - (deviceSize[1] - (deviceSize[1] - screenSize[1])) / 2
  ];



  for (const path of pathPrintMobile) {
    filesMobile.push(jimp.read(`${FOLDER_SCREEENSHOT}/${path}`));
  }

  Promise.all(filesMobile).then((data) => {
    return Promise.all(filesMobile)
  }).then((screenshots) => {
    for (let index = 0; index < screenshots.length; index++) {

      screenshots[index].resize(screenSize[0], screenSize[1]);

      if (behind) {
        backgroud.composite(screenshots[index], deviceFrame[0], deviceFrame[1]);

        backgroud.composite(device, imageCenter[0], imageCenter[1]);
      } else {

        backgroud.composite(device, imageCenter[0], imageCenter[1]);

        backgroud.composite(screenshots[index], deviceFrame[0], deviceFrame[1]);
      }

      backgroud.write(`${PATH_RESULT}/${folder}/${fileName}-${index}.jpg`);

      log(`[${index + 1}/${screenshots.length}] Asset ${fileName}-${index}.jpg created`);
    }


  log(`Assets devices ${fileName} completed`, 'success');

  })
}

module.exports.generateAssets = generateAssets;