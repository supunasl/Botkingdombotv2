let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
  let res = await fetch('https://api.botcahx.live/api/randomgambar/couplepp?apikey=QaepQXxR')
  if (res.status != 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
conn.sendFile(m.chat, json.result.female,  'pp.jpg', 'PP කෙල්ල', m)
conn.sendFile(m.chat, json.result.male,'pria.jpg',  'PP කොම්ලා', m)

}
handler.help = ['ppcp']
handler.tags = ['internet']
handler.command = /^ppcp$/i


module.exports = handler