let fetch = require('node-fetch')
let handler = async (m, { text }) => {
if (!text) throw `පරිශීලක නාමය ඇතුළත් කරන්න!`
  try {
    let f = await fetch (`https://api.botcahx.live/delprem-json?username=${text}&token=BOTCAHX`)
    let fatt = await f.json()
    m.reply('Done')
  } catch (err) {
    console.log(err)
    m.reply('අසාර්ථකයි')
  }
}          
handler.command = handler.help = ['deleteprem'];
handler.tags = ['main'];
handler.premium = false
handler.group = false
handler.owner = true
module.exports = handler