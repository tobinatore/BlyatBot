//Gathers information about the mentioned user

﻿const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    let joinDate = user.joinedAt;
    let createDate = user.user.createdAt;
    let username = user.displayName;
    let highestRole = user.highestRole.name;
    let id = user.id;
    let tag = user.user.tag;
    let isBot = user.user.bot;
    let avatarURL = user.user.displayAvatarURL

    const embed = new Discord.RichEmbed()
    .setTitle("Streng vertraulich!")
    .setAuthor("Tobinatore", "https://cdn.discordapp.com/avatars/357861848650874890/d2185c7c548875343c7a85423d711385.webp?size=128")
    .setColor("#FF0000")
    .setDescription(`Hier ist die Info, die der KGB über den Genossen ${username} finden konnte.`)
    .setFooter("BlyatBot von Tobinatore", "https://cdn.discordapp.com/avatars/376302185245442048/de65328d2a7109552fca4b6fc14bbcf1.webp?size=128%22")
    .setImage(`${avatarURL}`)
    .setThumbnail(`${avatarURL}`)
    .setTimestamp()
    .addBlankField()
    .addField("Name",`${username}`, true)
    .addField("ID", `${id}`, true)
    .addField("Discord-Tag",`${tag}`, true)
    .addField("Ist Bot?", `${isBot}`, true)
    .addField("Server-Beitrittsdatum", `${joinDate}`)
    .addField("Höchste Rolle", `${highestRole}`)
    .addField("Discord-Beitrittsdatum", `${createDate}`);

    message.channel.send({embed});
}
module.exports.help = {
    name: "whois"
}
