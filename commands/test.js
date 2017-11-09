module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR") )
                return message.reply("Sorry, du hast nicht die erforderlichen Rechte um jemanden zu kicken!");
    
            //check if there is a member and whether we can kick him
            // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
        let member = message.mentions.members.first();
        if(!member)
            return message.reply("Bitte @erwähne einen User!");
        if(!member.kickable) 
            return message.reply("Blyat! Ich kann den User nicht bannen, Genosse. Hat er eine höhere Rolle oder fehlen mir die Rechte?");
    
            // slice(2) dismisses Command und @mention
        let reason = args.slice(2).join(' ');
        if(!reason)
            return message.reply("Blyat, du brauchst einen Grund um jemanden zu bannen!");
        
        member.user.send(`Du wurdest von ${message.author.tag} gebannt. Grund: ${reason}`);
        member.user.send("https://i.imgur.com/O3DHIA5.gif");
     
        message.reply(`${member.user.tag} wurde von ${message.author.tag} gebannt. Grund: ${reason}`);
        message.channel.send("https://i.imgur.com/O3DHIA5.gif");

}

module.exports.help = {
    name: "test"
}