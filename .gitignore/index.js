const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./config.json")

let prefix = "!"

client.login(config.token)

client.on("ready", () => {
    console.log("Connecté !")
    client.user.setStatus("online")
    client.user.setActivity("ToulonRP", {type: 1})
})

client.on("message", message => {
    if(message.content === prefix + "ip") {
        message.reply("Voici l'ip du serveur : 37.187.190.153:27380 ☺☺☺")
    }

    if(message.content === prefix + "forum") {
        message.reply("Voici notre forum : https://toulonrp.mtxserv.com/index.php ☺☺☺")
    }
})
