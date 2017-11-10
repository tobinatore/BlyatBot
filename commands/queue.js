const ytdlc = require ("ytdl-core");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   var iconurl = bot.user.avatarURL;
            if (nowPlaying[message.guild.id]) {
                var video = await ytdlc.getInfo(nowPlaying[message.guild.id]);
                var server = servers[message.guild.id];
                var desc = `**Spielt gerade:**\n${video.title}\n\n`;
                var info;
               
                for (var i = 0; i < server.queue.length; i++) {
                    if (i == 0) {
                        info = await ytdlc.getInfo(server.queue[i]);
                        desc = desc + "**Queue:**\n";
                        desc = desc + `**${i + 1}.** ${info.title}\n`;
                    }
                    else {
                        info = await ytdlc.getInfo(server.queue[i]);
                        desc = desc + `**${i + 1}.** ${info.title}\n`;
                    }
                }
                var embed = new Discord.RichEmbed()
                    .setAuthor("BlyatBot", iconurl)
                    .setColor([255, 0, 0])
                    .setDescription(desc)
                message.channel.send(embed);
            }
            else {
                var embed = new Discord.RichEmbed()
                    .setAuthor("BlyatBot", iconurl)
                    .setColor([255, 0, 0])
                    .setDescription("Blyat, ich spiele keine Musik!")
                message.channel.send(embed);
            }
        }

module.exports.help = {
    name: "queue"
}