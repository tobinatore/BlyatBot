module.exports.run = async (bot, message, args) => {
    var server = servers[message.guild.id];
            if (server.queue. length > 0 && args[0]) {
                server.queue = server.queue.splice(args[0],1);
                message.reply("Gelöscht, Genosse.")
            }
}

module.exports.help = {
    name: "delete"
}