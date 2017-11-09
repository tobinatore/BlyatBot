module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generiere Avatar...");
    
      let user = message.mentions.users.first() || message.guild.members.get(args[0]).user || message.author;
   await message.channel.send({files:[
    {
        attachment: user.avatarURL.slice(0,-9),
        name: "avatar.png"
    }
   ]});

   msg.delete();
}

module.exports.help = {
    name: "avatar"
}