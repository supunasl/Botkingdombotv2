let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('සම්බන්ධ වීමට ආරාධනා') || m.text.startsWith('Invitation to join') || m.text.startsWith('මෙම සබැඳිය විවෘත කරන්න')) && !m.isBaileys && !m.isGroup) {
    let teks = `Invite Group @${global.owner[0]} order:)
`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

module.exports = handler