
// - Ubah nomor owner dan wm di sini.
// + Daftar apikey terlebih dahulu sebelum menggunakan svript ini link
  // https://api.botcahx.live
//https://api.lannn.me
// - Jika sudah mendaftar salin key yang ada di profie dan paste di global.btc
// - Contoh global.btc = 'xzRhejka'
// global.lann = 'trial'
// - Jika sudah maka lanjutkan untuk mengubah nomor owner dan wm.

global.owner = ['94704029017']  
global.mods = ['94704029017'] 
global.prems = ['94704029017']
global.nameowner = 'Supuna'
global.numberowner = '94704029017' 
global.mail = 'supuna.ml' 
global.dana = '94704029017'
global.pulsa = '94701234567'
global.gopay = '94701234567'
global.namebot = 'BOTKINGDOM❤️'
global.gc = 'https://chat.whatsapp.com/DNUr9fAAaTq6YW3SFQHX7Q'
global.web = 'https://chat.whatsapp.com/DNUr9fAAaTq6YW3SFQHX7Q'
global.instagram = 'https://chat.whatsapp.com/DNUr9fAAaTq6YW3SFQHX7Q'
global.wm = '© Botkingdom'
global.watermark = wm
global.wm2 = '⫹⫺ Botkingdom'
global.wm3 = '© Botkingdom'
global.wm4 = '© whatsappbot'
global.wait = '_*කරුනාකර රැදී සිටින්න 🐋 ...*_'
global.eror = '_*සර්වර් දෝශයකි*_'
global.benar = 'සාර්ථකයි ✅\n'
global.salah = 'අසාර්ථකයි ❌\n'
global.stiker_wait = '*⫹⫺ ස්ටිකරය සෑදෙමින් පවතී 🐜...*'
global.packname = 'Made with Botkingdom ❤️'
global.author = 'Bot WhatsApp'
global.alpiskey = '8ecfc216' //daftar sendiri jika key habis https://alpis.eu.org

global.btc = 'F3fZ9MKW' //Daftar terlebih dahulu https://api.botcahx.live
global.lann = 'trial' //Note Key Ini Hanya Bertahan Selama 4 Day Sejak Config.js update! lebih baik register di https://api.lannn.me
global.APIs = { 
  tio: 'https://api.botcahx.live',
  alpis: 'https://alpis.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'F3fZ9MKW' //isi apikey mu https://api.botcahx.live
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
