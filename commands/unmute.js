// Removes the mute of the mentioned user

﻿module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Genosse, deine Rechte reichen nicht aus!");


    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.reply("Blyat du musst schon jemanden zum entmuten auswählen!");

    let role = message.guild.roles.find(r => r.name === "BB Muted")
    let roleT = message.guild.roles.find(r => r.name === "BB TimedMuted")

    //console.log(role.id);

    if(!role || !toMute.roles.has(role.id) && !toMute.roles.has(roleT.id)) return message.reply("Der Nutzer ist nicht gemuted");

    if( toMute.roles.has(role.id)) await toMute.removeRole(role);
    if( toMute.roles.has(roleT.id)) await toMute.removeRole(roleT);
    message.reply("Ich habe den Nutzer entmuted, Genosse!");

    delete bot.mutes[toMute.id];

    fs.writeFile("./mutes.json", JSON.stringify(bot.mutes), err=> {
        if (err) throw err;
        console.log(`${toMute.user.tag} has been unmuted!`);
    });
    return;

}

module.exports.help = {
    name: "unmute"
}
