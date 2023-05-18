let handler = async (m, { conn, isROwner, text }) => {
  let { spawn } = require('child_process');
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
  if (global.conn.user.jid == conn.user.jid) {
    await m.reply('බොට් රීස්ටාට් වෙමින් පවතී...\nවිනාඩියක් සිටින්න')
    process.send('reset')
  } else throw '_හැපි හැපි හැපී..._'
}

handler.help = ['restart']
handler.tags = ['owner']
handler.command = /^(srvrestart|restart)$/i

handler.rowner = true

module.exports = handler