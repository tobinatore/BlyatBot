module.exports.run = async (bot, message, args) => {
    var server = servers[message.guild.id];
            if (server.dispatcher) {
                server.dispatcher.end();
                message.reply("Davai, Genosse.")
            }
}

module.exports.help = {
    name: "skip"
}