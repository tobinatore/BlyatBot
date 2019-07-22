//Displays information about the server

﻿const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let guild = message.guild;
    let name = guild.name;
    let owner = guild.owner;
    let memberCount = guild.memberCount;
    let region = guild.region;
    let id = guild.id;
    let createDate = guild.createdAt;
    let verificationLevel = guild.verificationLevel;
    let avatarURL = guild.iconURL;
    console.log(avatarURL);

    if(avatarURL != null){
    const embed = new Discord.RichEmbed()
    .setTitle("Streng vertraulich!")
    .setAuthor("Tobinatore", "https://cdn.discordapp.com/avatars/357861848650874890/d2185c7c548875343c7a85423d711385.webp?size=128")
    .setColor("#FF0000")
    .setDescription(`Hier ist die Info, die der KGB über den Server ${name} finden konnte.`)
    .setFooter("BlyatBot von Tobinatore", "https://cdn.discordapp.com/avatars/376302185245442048/de65328d2a7109552fca4b6fc14bbcf1.webp?size=128%22")
    .setImage(`${avatarURL}`)
    .setThumbnail(`${avatarURL}`)
    .setTimestamp()
    .addBlankField()
    .addField("Name",`${name}`, true)
    .addField("ID", `${id}`, true)
    .addField("Besitzer",`${owner}`, true)
    .addField("Mitgliederzahl", `${memberCount}`, true)
    .addField("Erstelldatum", `${createDate}`)
    .addField("Region", `${region}`)
    .addField("Verifikationslevel", `${verificationLevel}`);
    message.channel.send({embed});
 }
 else{
    const embed = new Discord.RichEmbed()
    .setTitle("Streng vertraulich!")
    .setAuthor("Tobinatore", "https://cdn.discordapp.com/avatars/357861848650874890/d2185c7c548875343c7a85423d711385.webp?size=128")
    .setColor("#FF0000")
    .setDescription(`Hier ist die Info, die der KGB über den Server ${name} finden konnte.`)
    .setFooter("BlyatBot von Tobinatore", "https://cdn.discordapp.com/avatars/376302185245442048/de65328d2a7109552fca4b6fc14bbcf1.webp?size=128%22")
    .setTimestamp()
    .addBlankField()
    .addField("Name",`${name}`, true)
    .addField("ID", `${id}`, true)
    .addField("Besitzer",`${owner}`, true)
    .addField("Mitgliederzahl", `${memberCount}`, true)
    .addField("Erstelldatum", `${createDate}`)
    .addField("Region", `${region}`)
    .addField("Verifikationslevel", `${verificationLevel}`);
 message.channel.send({embed});
 }

}
module.exports.help = {
    name: "server"
}
