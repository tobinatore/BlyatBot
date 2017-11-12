const fs = require("fs");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR") )
                return message.reply("Sorry, du hast nicht die erforderlichen Rechte um jemanden zu verwarnen!");
    
            //check if there is a member and whether we can kick him
            // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!member)
            return message.reply("Bitte @erwähne einen User oder gib seine ID an!");
    
            // slice(2) dismisses Command und @mention
        let reason = args.slice(2).join(' ');
        if(!reason)
            return message.reply("Blyat, du brauchst einen Grund um jemanden zu bannen!");
        
        await member.user.send(`Du wurdest von ${message.author.tag} verwarnt. Grund: ${reason}`);

        var embed = new Discord.RichEmbed()
                    .setAuthor("BlyatBot", bot.user.avatarURL)
                    .setColor([255, 0, 0])
                    .setDescription("**WARNUNG**\n" +
                    member+ ` wurde von ${message.author.username} verwarnt\n` +
                    `**Grund:** \n` +
                    reason)
                   
                message.channel.send(embed);

}

module.exports.help = {
    name: "warn"
}