//Kicks the mentioned user

﻿module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR") )
                return message.reply("Sorry, du hast nicht die erforderlichen Rechte um jemanden zu kicken!");

            //check if there is a member and whether we can kick him
            // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
            let member = message.mentions.members.first();
            if(!member)
            return message.reply("Bitte @erwähne einen User!");
            if(!member.kickable)
            return message.reply("Blyat! Ich kann den User nicht kicken, Genosse. Hat er eine höhere Rolle oder fehlen mir die Rechte?");

            // slice(2) dismisses Command und @mention
            let reason = args.slice(2).join(' ');
            if(!reason)
          return message.reply("Blyat, du brauchst einen Grund um jemanden zu kicken!");

        await member.send(`Du wurdest von ${message.author.tag} gekickt. Grund: ${reason}`);

        //and now we kick...
        member.kick(reason)
          .catch(error => message.reply(`Sorry ${message.author} konnte nicht kicken weil : ${error}`));
        message.reply(`${member.user.tag} wurde von ${message.author.tag} gekickt. Grund: ${reason}`);

}

module.exports.help = {
    name: "kick"
}
