let handler = async (m, { conn, participants, groupMetadata, text }) => {

    const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
            i.isAdmin ? admins.push(i.jid) : ''
        }
        return admins
    }

    let pp = './src/avatar_contact.png'
    try {
        pp = await conn.getProfilePicture(m.chat)
    } catch (e) {
    } finally {
        let { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, expired, descUpdate, stiker } = global.db.data.chats[m.chat]
        const groupAdmins = getGroupAdmins(participants)
        let listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.split`@`[0]}`).join('\n')

        if (text) return m.reply(msToDate(expired - new Date() * 1))

        let caption = `*කණ්ඩායම් තොරතුරු*\n
*ID:* 
${groupMetadata.id}
*නම:* 
${groupMetadata.subject}
*තොරතුරු:* 
${groupMetadata.desc}
*සමාජික ගනන:*
${participants.length} සාමාජික
*කණ්ඩායම් නිර්මාතෘ:* 
@${m.chat.split`-`[0]}
*පරිපාලකයන්:*
${listAdmin}
*බොට් සැකසුම්:*
${antiLink ? '✅' : '❌'} Anti Link
${global.db.data.chats[m.chat].delete ? '❌' : '✅'} Anti Delete
${isBanned ? '✅' : '❌'} Banned
${descUpdate ? '✅' : '❌'} විස්තර
${detect ? '✅' : '❌'} Detect
${stiker ? '✅' : '❌'} Stiker
${welcome ? '✅' : '❌'} Welcome
*බොට් පණිවිඩ සැකසුම්:*
Welcome: ${sWelcome}
Bye: ${sBye}
Promote: ${sPromote}
Demote: ${sDemote}
*ඉතිරි:*
${msToDate(expired - new Date() * 1)}
`.trim()
        let mentionedJid = groupAdmins.concat([`${m.chat.split`-`[0]}@s.whatsapp.net`])
        conn.sendFile(m.key.remoteJid, pp, 'pp.jpg', caption, m, 0, { contextInfo: { mentionedJid } })
    }
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(gro?upinfo|info(gro?up|gc))$/i

handler.group = true

module.exports = handler

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + " hari " + hours + " jam " + minutes + " menit";
    // +minutes+":"+sec;
}
