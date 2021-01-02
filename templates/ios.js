const {log} = require('../utils/log.js');
const { PATH_ASSETS_IOS_MOBILE_6_5, PATH_ASSETS_IOS_MOBILE_5_5, PATH_ASSETS_IOS_TABLET_12_2ND, PATH_ASSETS_IOS_TABLET_12_3RD } = require('../constants');
const {generateAssets} = require('../lib');

async function generateMobile_ios_6_5() {
  log('Creating asset iPhone 6.5 📱');
  await generateAssets(PATH_ASSETS_IOS_MOBILE_6_5, PATH_ASSETS_IOS_MOBILE_6_5, [942, 2016], 'ios/iphone-6.5', 'iphone 6.5', true)

}

async function generateMobile_ios_5_5() {
  log('Creating asset iPhone 5.5 📱');

  await generateAssets(PATH_ASSETS_IOS_MOBILE_5_5, PATH_ASSETS_IOS_MOBILE_5_5, [800, 1400], 'ios/iphone-5.5', 'iphone 5.5');

}

async function generateTablet_ios_12_9_2nd() {
  log('🏗  Creating asset iPad 12.9 2nd 🖼');

  await generateAssets(PATH_ASSETS_IOS_TABLET_12_2ND, PATH_ASSETS_IOS_TABLET_12_2ND, [1475, 1980], 'ios/ipad-12.9-2nd', 'iPad');
}

async function generateTablet_ios_12_9_3rd() {
  console.log('Creating asset iPad 12.9 2rd 🖼');

  await generateAssets(PATH_ASSETS_IOS_TABLET_12_3RD, PATH_ASSETS_IOS_TABLET_12_3RD, [1584, 2116], 'ios/ipad-12.9-3rd', 'iPad');

}

module.exports.generateMobile_ios_6_5 = generateMobile_ios_6_5;
module.exports.generateMobile_ios_5_5 = generateMobile_ios_5_5;
module.exports.generateTablet_ios_12_9_2nd = generateTablet_ios_12_9_2nd;
module.exports.generateTablet_ios_12_9_3rd = generateTablet_ios_12_9_3rd;