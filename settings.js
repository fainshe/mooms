const chalk = require("chalk")
const fs = require("fs")

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['6285793887010'] //ur owner number
global.ownernomer = "6285793887010" //ur owner number2
global.ownername = "Feesu" //ur owner name
global.ytname = "@fainshe" //ur yt chanel name
global.socialm = "@faizputra_m" //ur github or insta name
global.location = "In My Simp Heart" //ur location

//new
global.botname = "Forlife BotWa - MD"
global.ownernumber = '6285793887010'
global.ownername = '6285793887010'
global.ownerNumber = ["6285813708397@s.whatsapp.net"]
global.ownerweb = "https://fainshe.000webhostapp.com/"
global.websitex = "https://fainshe.000webhostapp.com/"
global.wagc = "https://chat.whatsapp.com/IHOXYWgD560CI1INaTqPBG"
global.themeemoji = '🥀'
global.wm = "Forlife WhatsAppBot"
global.botscript = 'Silahkan Datang Ke Channel FallXD425' //script link
global.packname = ""
global.author = "Forlife WABot\n2023."
global.creator = "6285793887010@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Here you go!',
    admin: 'This feature could be used by admins only!',
    botAdmin: 'Bot harus menjadi admin dahulu!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'Fitur ini hanya untuk Owner.',
    group: 'Fitur ini hanya bisa digunakan di grup!',
    private: 'Fitur ini hanya bisa digunakan di private chat/japri!',
    bot: 'This feature could be used by bot only',
    wait: 'Memproses...',
    linkm: 'Dimana linknya?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: '[ALERT] The nsfw feature has not been activated, please contact the admin to activate',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})