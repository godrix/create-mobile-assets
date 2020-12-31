const prompts = require('prompts');


async function initialChoice(){
  const {mode} = await prompts({
    type: 'select',
    name: 'mode',
    message: 'Pick a color',
    choices: [
      { title: 'Android e IOS', description: 'Create assets for android and ios', value: 0 },
      { title: 'Android', description: 'Create assets only android', value:1},
      { title: 'IOS', description: 'Create assets only ios', value: 2 }
    ],

    initial: 0
  });

  return mode;
}

module.exports.initialChoice = initialChoice;