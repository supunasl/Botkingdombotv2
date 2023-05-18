let fetch = require('node-fetch')
let handler = async (m, { text, command, conn }) => {

  if (!text) throw 'රූපයක් බවට පත් කිරීමට පෙළ ඇතුළත් කරන්න'

  let response = await fetch(`https://botcahx.cyclic.app/dalle?text=${encodeURIComponent(text)}`)
  let image = await response.buffer()
  conn.sendFile(m.chat, image, 'Genarated by ai.jpg',  wm, m)

}
handler.command = handler.help = ['aiimg','aiimage','ai-image']
handler.tags = ['internet']

module.exports = handler