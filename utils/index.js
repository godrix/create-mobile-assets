const fs = require("fs/promises");

async function getFilesPath(path){
  const filesInDir =  await fs.readdir(path);
  const filterFiles = filesInDir.filter((fileName)=>fileName.match(/(\.jpg|\.png|\.jpeg)$/i))

  return filterFiles;
}

module.exports.getFilesPath = getFilesPath;