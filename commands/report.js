//Reports user to admins

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {



        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!member)
            return message.reply("Bitte @erwähne einen User oder gib seine ID an!");

        let reason = args.slice(2).join(' ');
        if(!reason)
            return message.reply("Blyat, du brauchst einen Grund um jemanden zu melden!");
        let admins = message.guild.roles.find("name","Administrator").members.array();
        console.log(admins.length);
        for (let i = 0; i < admins.length; i++) {

            admins[i].user.send(`${member.user.username} wurde von ${message.author.username} gemeldet.\n`+
                `Grund: ${reason}`);
        }

        message.delete();

}

module.exports.help = {
    name: "report"
}
