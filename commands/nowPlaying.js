const ytdlc = require ("ytdl-core");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var iconurl = bot.user.avatarURL;
            if (nowPlaying[message.guild.id]) {
                var video = nowPlaying[message.guild.id];
                var embed = new Discord.RichEmbed()
                    .setAuthor("BlyatBot", iconurl)
                    .setColor([255, 0, 0])
                    .setDescription("**Spielt gerade:**\n" +
                    video.title)
                    .setThumbnail(video.thumbnail)
                message.channel.send(embed);
            }
            else {
                var embed = new Discord.RichEmbed()
                    .setAuthor("BlyatBot", iconurl)
                    .setColor([255, 0, 0])
                    .setDescription("Keine Musik, Genosse.")
                message.channel.send(embed);
            }
}

module.exports.help = {
    name: "song"
}