//unbans a user - needs user id, command without arguments displays all banned users + id's
﻿const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR") )
                return message.reply("Sorry, du hast nicht die erforderlichen Rechte um jemanden zu entbannen!");


        let member = args[0];
        if(!member) {
            message.channel.send("Ok blyat, das sind alle gebannten Nutzer. Ich brauche die ID von dem, den du entbannen willst.")
            for (let i in bot.bans){
                if(bot.bans[i].guild === message.guild.id){
                    let name = bot.bans[i].name;
                    let id = bot.bans[i].user;
                    let time = bot.bans[i].time;
                    let tempBan = false;
                    if(time !== null && time < 3155760000 * 1000) tempBan = true;
                    message.channel.send(`Name: ${name}, ID: ${id}, Temp-Bann: ${tempBan}`);
                }
            }
        }

        if(member){
         message.guild.unban(member);
         delete bot.bans[member];

                fs.writeFile("./bans.json", JSON.stringify(bot.bans), err=> {
                    if (err) throw err;
                });
         message.channel.send("Alles klar Genosse, hab ihn entbannt.")
     }

}

module.exports.help = {
    name: "unban"
}
