//Mutes a user for a specified amount of time (seconds)

﻿const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Genosse, deine Rechte reichen nicht aus!");


    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.reply("Blyat du musst schon jemanden zum Muten auswählen!");

    let role = message.guild.roles.find(r => r.name === "BB TimedMuted")
    let roleU = message.guild.roles.find(r => r.name === "BB Muted")

    if(!role){
        try{

            role = await message.guild.createRole({
                name: "BB TimedMuted",
                color: "#000000",
                permissions: []
            });

            message.guild.channels.forEach(async (channel, id)=>{
                await channel.overwritePermissions(role, {
                    SEND_MESSAGES: false,
                    SPEAK: false,
                    SEND_TTS_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch(e){
            console.log(e.stack);
        }
    }

    if(toMute.roles.has(role.id) || toMute.roles.has(roleU.id) ) return message.reply("Der Nutzer ist schon gemuted");

    bot.mutes[toMute.id] = {
        guild: message.guild.id,
        time: Date.now() + parseInt(args[1]) * 1000
    }

    fs.writeFile("./mutes.json", JSON.stringify(bot.mutes, null, 4), err => {
        if(err) throw err;
        message.reply(`Ich habe den Nutzer für ${args[1]} Sekunden gemuted, Genosse!`);

    });

    await toMute.addRole(role);

    return;

}

module.exports.help = {
    name: "timedMute"
}
