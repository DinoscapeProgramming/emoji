const fs = require('fs');

const emoji = function (data) {
  var e;
  const emojis = JSON.parse(fs.readFileSync('./emojis.json')).emojis
  if (typeof data === "object") {
    
  emojis.forEach(emj => {
      if (emj[Object.keys(data)[0]] === Object.values(data)[0]) {
        e = emj.emoji;
      }
    })
  } else {
    emojis.forEach(emj => {
      if (emj.name === data) {
        e = emj.emoji;
      }
    })
  }
  return e;
}

modules.exports = { emoji }
