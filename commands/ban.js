//Bans the mentioned user

﻿const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR") )
                return message.reply("Sorry, du hast nicht die erforderlichen Rechte um jemanden zu bannen!");

            //check if there is a member and whether we can kick him
            // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!member)
            return message.reply("Bitte @erwähne einen User oder gib seine ID an!");
        if(!member.kickable)
            return message.reply("Blyat! Ich kann den User nicht bannen, Genosse. Hat er eine höhere Rolle oder fehlen mir die Rechte?");

            // slice(2) dismisses Command und @mention
        let reason = args.slice(2).join(' ');
        let time = 3155760000 * 1000
        if(!reason)
            return message.reply("Blyat, du brauchst einen Grund um jemanden zu bannen!");

        await member.user.send(`Du wurdest von ${message.author.tag} gebannt. Grund: ${reason}`);
        await member.user.send("https://i.imgur.com/O3DHIA5.gif");
        bot.bans[member.id] = {
            guild: message.guild.id,
            user: member.id,
            name: member.user.username,
            time: time
         }

        fs.writeFile("./bans.json", JSON.stringify(bot.bans, null, 4), err => {
            if(err) throw err;

          });

        //and now we ban...
        member.ban(reason)
          .catch(error => message.reply(`Sorry ${message.author} konnte nicht bannen weil : ${error}`));



        message.reply(`${member.user.tag} wurde von ${message.author.tag} gebannt. Grund: ${reason}`);
        message.channel.send("https://i.imgur.com/O3DHIA5.gif");

}

module.exports.help = {
    name: "ban"
}
