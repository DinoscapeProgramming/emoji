const fs = require('fs') // does not needs to install anything (fs is included in node.js)
const fetch = require('node-fetch'); // needs version 2.6.7 (npm install node-fetch@2.6.7)

const data = fetch('https://raw.githubusercontent.com/DinoscapeProgramming/emoji/main/emojis.json')
  .then((response) => response.text())
  .then((result) => {
    return result;
  });

const install = async () => {
    const promiseResult = await data;
    fs.appendFileSync('./emojis.json', promiseResult, 'utf8')
  }

install()
