// Gets the avatar of the mentioned user.

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generiere Avatar...");

      let user = message.mentions.users.first() || message.guild.members.get(args[0]).user || message.author;
      if(!user)
          return message.reply("Bitte @erwähne einen User oder gib seine ID an!");
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
