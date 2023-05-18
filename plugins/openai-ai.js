var fetch = require('node-fetch');
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
 const perintah = "Botkingdom is Best"
if (!text) throw `උදාහරන!\n\n*Contoh:* Frist come egg or chicken? `
await m.reply(wait)
  var apii = await fetch(`https://botcahx.cyclic.app/openai?logic=${perintah}&prompt=${text}`)
  var js = await apii.json()
  await m.reply(js.hasil)
}      
handler.command = handler.help = ['ai','openai','chatgpt'];
handler.tags = ['internet'];
handler.premium = false
module.exports = handler;
