const prompts = require('prompts');


async function initialChoice() {
  const { mode } = await prompts({
    type: 'select',
    name: 'mode',
    message: 'Pick a color',
    choices: [
      { title: 'Android e IOS', description: 'Create assets for android and ios', value: 0 },
      { title: 'Android', description: 'Create assets only android', value: 1 },
      { title: 'IOS', description: 'Create assets only ios', value: 2 }
    ],

    initial: 0
  });

  return mode;
}

async function choiceColor() {
  const { color } = await prompts({
    type: 'text',
    name: 'color',
    message: 'what is the background color?',
    initial: '#FFFFFF',
    validate: value => !value.match(/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/) ? `Only hexadecimal colors are accepted` : true
  });

  return color;
}

// val 1 === header show;
// val 1.5 === more header show;
// val 1.8 === default ;
// val 2 === image center;

async function choicePosition() {
  const { position } = await prompts({
    type: 'select',
    name: 'position',
    message: 'Device position',
    choices: [
      { title: 'Large margin', description: 'Large margin top', value: 1 },
      { title: 'Medium margin', description: 'Midium margin at the top', value: 1.5 },
      { title: 'Small margin', description: 'Small margin at the top', value: 1.8 },
      { title: 'Center', description: 'Centralized device', value: 2 },
    ],
    initial: 2
  });

  return position;
}

async function enterText() {
  const { value } = await prompts({
    type: 'list',
    name: 'value',
    message: 'separate the texts of each image with a semicolon',
    initial: '',
    separator: ';'
  });

  return value;

}

module.exports.initialChoice = initialChoice;
module.exports.choiceColor = choiceColor;
module.exports.choicePosition = choicePosition;
module.exports.enterText = enterText;