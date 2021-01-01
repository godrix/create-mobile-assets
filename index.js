#!/usr/bin/env node
const { initialChoice } = require('./utils/prompt')
const { generateMobile_android_default } = require('./templates/android');
const { generateMobile_ios_5_5, generateMobile_ios_6_5, generateTablet_ios_12_9_2nd, generateTablet_ios_12_9_3rd } = require('./templates/ios');



async function main() {
  switch (await initialChoice()) {
    case 0:
      await generateMobile_android_default()
      await generateMobile_ios_5_5();
      await generateMobile_ios_6_5();
      await generateTablet_ios_12_9_2nd();
      await generateTablet_ios_12_9_3rd();
      break;
    case 1:
      await generateMobile_android_default();
      break;
    case 2:
      await generateMobile_ios_5_5();
      await generateMobile_ios_6_5();
      // await generateTablet_ios_12_9_2nd();
      // await generateTablet_ios_12_9_3rd();
      break;
    default:
      console.info('nothing')
  }


}


main();