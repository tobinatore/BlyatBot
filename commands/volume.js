const ytdlc = require ("ytdl-core");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var iconurl = bot.user.avatarURL;
            if (!args[0]) {
                var embed = new Discord.RichEmbed()
                    .setAuthor("BlyatBot", iconurl)
                    .setColor([255, 0, 0])
                    .setDescription(`**Verwendung:** blyat volume <Lautstärke>`)
                message.channel.send(embed);
                return;
            }

            if (args[0] < 0 || args[0] > 100) {
                message.channel.send("Ungültige Lautstärke, blyat! Die Lautstärke muss zwischen 0 und 100 liegen.");
                return;
            }

            volume[message.guild.id] = Number(args[0]) / 100;
            var server = servers[message.guild.id];
            if (server.dispatcher) {
                server.dispatcher.setVolume(volume[message.guild.id]);
                message.channel.send(`Lautstärke: ${args[0]}%`);
            }
        }

module.exports.help = {
    name: "volume"
}