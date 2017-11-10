module.exports.run = async (bot, message, args) => {
	var server = servers[message.guild.id];
    if (message.guild.voiceConnection){
     message.guild.voiceConnection.disconnect();
     server.queue.splice(0, server.queue.length); //deleting the queue
 }
    message.reply("Idi nahui cyka blyat.");
}

module.exports.help = {
    name: "stop"
}
            