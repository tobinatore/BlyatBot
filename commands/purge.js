module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission("ADMINISTRATOR")) {    //requires admin-privilige
        let messagecount = parseInt(args[0]);
        message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    }
}

module.exports.help = {
    name: "purge"
}