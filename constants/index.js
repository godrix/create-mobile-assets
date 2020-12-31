const path = require('path');
const process = require('process');


const PATH_ASSETS_IOS_MOBILE_6_5 = `${path.join(__dirname, '..', 'assets', 'ios', 'mobile', '6.5')}`;
const PATH_ASSETS_IOS_MOBILE_5_5 = `${path.join(__dirname, '..', 'assets', 'ios', 'mobile', '5.5')}`;
const PATH_ASSETS_IOS_TABLET_12_2ND = `${path.join(__dirname, '..', 'assets', 'ios', 'tablet', '12.9_2nd')}`;
const PATH_ASSETS_IOS_TABLET_12_3RD = `${path.join(__dirname, '..', 'assets', 'ios', 'tablet', '12.9_3rd')}`;
const PATH_ASSETS_ANDROID_DEFAULT = `${path.join(__dirname, '..', 'assets', 'android', 'mobile', 'default')}`;

//const FOLDER_SCREEENSHOT = `${path.join(__dirname, '..', 'screenshot')}`;
const FOLDER_SCREEENSHOT = `${process.cwd()}`;
//const PATH_RESULT = `${path.join(__dirname, '..', 'result')}`;
const PATH_RESULT = `${path.join(process.cwd(), 'result')}`;


module.exports.PATH_ASSETS_IOS_MOBILE_6_5 = PATH_ASSETS_IOS_MOBILE_6_5;
module.exports.PATH_ASSETS_IOS_MOBILE_5_5 = PATH_ASSETS_IOS_MOBILE_5_5;
module.exports.PATH_ASSETS_IOS_TABLET_12_2ND = PATH_ASSETS_IOS_TABLET_12_2ND;
module.exports.PATH_ASSETS_IOS_TABLET_12_3RD = PATH_ASSETS_IOS_TABLET_12_3RD;
module.exports.PATH_ASSETS_ANDROID_DEFAULT = PATH_ASSETS_ANDROID_DEFAULT;
module.exports.FOLDER_SCREEENSHOT = FOLDER_SCREEENSHOT;
module.exports.PATH_RESULT = PATH_RESULT;