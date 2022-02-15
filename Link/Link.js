const fs = require('fs');
const path = require("path");

const files = fs.readdirSync('./Link').filter((f) => !f.endsWith('.js'));

let Link = [];

for (const file of files) {
  const fileContent = fs.readFileSync(path.resolve(`./Link/${file}`));
  
  Link.push({
    fileName: file,
    fileContent: fileContent.toString().split('\n'),
  });
}

module.exports = Link;