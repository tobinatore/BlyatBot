module.exports.run = async (bot, message, args) => {
    if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
    message.reply("Idi nahui cyka blyat.");
}

module.exports.help = {
    name: "stop"
}