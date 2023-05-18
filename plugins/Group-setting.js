let { groupsSettingUpdate } = require('@adiwajshing/baileys')
let handler = async (m, { isAdmin, isOwner, isBotAdmin, conn, args, usedPrefix, command }) => {
	if (!(isAdmin || isOwner)) {
		global.dfail('admin', m, conn)
		throw false
	}
	if (!isBotAdmin) {
		global.dfail('botAdmin', m, conn)
		throw false
	}
let prefix = usedPrefix
let bu = `සමූහය විසින් විවෘත කර ඇත @${m.sender.split`@`[0]} සහ දැන් සියලුම සාමාජිකයින්ට පණිවිඩ යැවිය හැක
වර්ගය*${usedPrefix}group open*
කණ්ඩායමක් විවෘත කිරීමට!`.trim()            
    
	let isClose = {
		'open': 'not_announcement',
		'buka': 'not_announcement',
		'on': 'not_announcement',
		'1': 'not_announcement',
		'close': 'announcement',
		'tutup': 'announcement',
		'off': 'announcement',
		'0': 'announcement',
	}[(args[0] || '')]
	if (isClose === undefined) {
var text5 = `උදාහරණයක්:
${usedPrefix + command} Close
${usedPrefix + command} Open
	`
m.reply(text5)

		throw false
	} else if (isClose === 'announcement') {
	await conn.groupSettingUpdate(m.chat, isClose)
	let teks = ` විසින් සමූහය වසා ඇත @${m.sender.split`@`[0]} දැන් පණිවිඩ යැවිය හැක්කේ පරිපාලකයින්ට පමණි
ketik *${usedPrefix}group open*
කණ්ඩායමක් විවෘත කිරීමට!`.trim()
	await m.reply(teks)
	} else if (isClose === 'not_announcement') {
	await conn.groupSettingUpdate(m.chat, isClose)
	await m.reply(bu)
	} else if (isClose === undefined) {

var te = `
උදාහරන
${usedPrefix + command} Close
${usedPrefix + command} Open`

m.reply(te)

	}
}

handler.help = ['grup <open/close>']
handler.tags = ['group']
handler.command = /^(g(ro?up|c?)?)$/i
handler.group = true
handler.botAdmin = false

module.exports = handler