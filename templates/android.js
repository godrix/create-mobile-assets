const { log } = require('../utils/log.js');

const { PATH_ASSETS_ANDROID_DEFAULT } = require('../constants');

const { generateAssets } = require('../lib');

async function generateMobile_android_default(choices) {
  const {color, position, text} = choices;

  log('Creating assets devices android 📱');

  await generateAssets(PATH_ASSETS_ANDROID_DEFAULT, PATH_ASSETS_ANDROID_DEFAULT, [1090, 1940], 'android/mobile-default', 'android', true, color, position, text);
}


module.exports.generateMobile_android_default = generateMobile_android_default;