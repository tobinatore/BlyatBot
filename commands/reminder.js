//Creates a reminder

﻿const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    if (!args[0]) {
        var embed = new Discord.RichEmbed()
            .setAuthor("BlyatBot", iconurl)
            .setColor([255, 0, 0])
            .setDescription(`**Verwendung**: blyat remindMe <Nachricht> <ZeitInSekunden>`)
                message.channel.send(embed);
                return;
            }

    bot.remind[message.author.id] = {
        time: Date.now() + parseInt(args.pop()) * 1000,
        guild: message.guild.id,
        notification: args.join(" ")

    }

    fs.writeFile("./reminders.json", JSON.stringify(bot.remind, null, 4), err => {
        if(err) throw err;
        message.reply(`Ich werde dich erinnern, Genosse!`);

    });

    return;

}

module.exports.help = {
    name: "remindMe"
}
