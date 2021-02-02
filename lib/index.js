const jimp = require('jimp');
const path = require('path')
const { log } = require('../utils/log.js');
const { getFilesPath } = require('../utils');
const { choicePosition } = require('../utils/prompt')
const { FOLDER_SCREEENSHOT, PATH_RESULT } = require('../constants');

async function generateAssets(pathBackgroud, pathDevice, screenSize = [1090, 1940], folder, fileName, behind = false, backgroundColor, positionHeight, textArray=false) {

try {

  const backgroud = await jimp.read(`${pathBackgroud}/bg.png`);
  const font = await jimp.loadFont(path.join(__dirname, '..', 'assets', 'fonts', 'main.fnt'));

  backgroud.color([
    { apply: 'mix', params: [backgroundColor, 100] }
  ])

  const device = await jimp.read(`${pathDevice}/device.png`);

  const filesMobile = [];

  const pathPrintMobile = await getFilesPath(FOLDER_SCREEENSHOT);

  if(pathPrintMobile.length === 0){
    throw "images not found ";
  }

  const backgroudSize = [backgroud.bitmap.width, backgroud.bitmap.height];

  const deviceSize = [device.bitmap.width, device.bitmap.height];


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

      const backgroundClone = backgroud.clone();
      
      if(!!textArray.length){

        const isExistInArray = textArray[index] || '';
        const textWidth = jimp.measureText(font, isExistInArray);
      
        backgroundClone.print(font, backgroudSize[0]/2 - textWidth/2, 0, isExistInArray)
      }

      if (behind) {
        backgroundClone.composite(screenshots[index], deviceFrame[0], deviceFrame[1]);

        backgroundClone.composite(device, imageCenter[0], imageCenter[1]);
      } else {

        backgroundClone.composite(device, imageCenter[0], imageCenter[1]);

        backgroundClone.composite(screenshots[index], deviceFrame[0], deviceFrame[1]);
      }

      backgroundClone.write(`${PATH_RESULT}/${folder}/${fileName}-${index}.jpg`);

      log(`[${index + 1}/${screenshots.length}] Asset ${fileName}-${index}.jpg created`);
    }


  log(`Assets devices ${fileName} completed`, 'success');

  })
} catch (error) {
  log(error, 'error')
}

}

module.exports.generateAssets = generateAssets;