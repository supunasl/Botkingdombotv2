var fetch = require("node-fetch");
var handler = async (m, {
	conn,
	args,
	usedPrefix,
	command
}) => {
if (!args[0]) throw `URL එක ඇතුලත් කරන්න!\n\nඋදාහරන:\n${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSr/`
if (!args[0].match(/tiktok/gi)) throw `හමු වුණේ නැහැ!`
m.reply(wait)
 var apis = await fetch(`https://api.botcahx.live/api/dowloader/tiktok?url=${args[0]}&apikey=${btc}`)
if (!apis.ok) throw await apis.text()
var jsons = await apis.json()
if (!jsons.status) throw jsons
var { 
video, 
video2, 
username,
description,
audio
} = jsons.result
await conn.sendFile(m.chat, video, 'tiktok.mp4', `
*තොරතුරු*: ${description}
\n*Username*: ${username}`, m)
conn.sendFile(m.chat, audio, 'tikmp3.opus', null, m)
};
handler.help = ['tiktok']
handler.command = /^(tiktok|tt|tiktokdl|tiktoknowm|dltt)$/i
handler.tags = ['downloader'];
handler.limit = true;
handler.group = false;
handler.premium = false;
handler.owner = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.private = false;
module.exports = handler;
