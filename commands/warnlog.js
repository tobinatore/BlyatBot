// shows which user was warned how many times

const fs = require("fs");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR") )
                return message.reply("Sorry, du hast nicht die erforderlichen Rechte um jemanden zu verwarnen!");

         for (let i in bot.warns){
                if(bot.warns[i].guild === message.guild.id){
                    let name = bot.warns[i].name;
                    let id = bot.warns[i].user;
                    let warns = bot.warns[i].warns;

                    message.channel.send(`Name: ${name}, ID: ${id}, Anzahl der Verwarnungen: ${warns}`);
                }
            }
}

module.exports.help = {
    name: "warnlog"
}
