#!/usr/bin/env node
const { initialChoice, choicePosition, choiceColor } = require('./utils/prompt')
const { generateMobile_android_default } = require('./templates/android');
const { generateMobile_ios_5_5, generateMobile_ios_6_5, generateTablet_ios_12_9_2nd, generateTablet_ios_12_9_3rd } = require('./templates/ios');



async function main() {
  const choices = {color:'', posotion:0, text:['Olar']};
  switch (await initialChoice()) {
    case 0:
      choices.color = await choiceColor();
      choices.position = await choicePosition();
      await generateMobile_android_default(choices)
      await generateMobile_ios_5_5(choices);
      await generateMobile_ios_6_5(choices);
      await generateTablet_ios_12_9_2nd(choices);
      await generateTablet_ios_12_9_3rd(choices);
      break;
    case 1:
      choices.color = await choiceColor();
      choices.position = await choicePosition();
      await generateMobile_android_default(choices);
      break;
    case 2:
      choices.color = await choiceColor();
      choices.position = await choicePosition();
      await generateMobile_ios_5_5(choices);
      await generateMobile_ios_6_5(choices);
      await generateTablet_ios_12_9_2nd(choices);
      await generateTablet_ios_12_9_3rd(choices);
      break;
    default:
      console.info('nothing')
  }


}


main();