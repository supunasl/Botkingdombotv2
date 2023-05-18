let fs = require('fs')
let handler = async (m, { conn, text }) => {
    m.reply('මොහොතක් රැඳී සිටින්න, ගොනු ක්‍රියාවලිය ලබා ගැනීම creds.json')
    let sesi = await fs.readFileSync('./sessions/creds.json')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'creds.json' }, { quoted: m })
}
handler.help = ['getsesi']
handler.tags = ['internet']
handler.command = /^(getsesi)$/i

handler.rowner = true

module.exports = handler