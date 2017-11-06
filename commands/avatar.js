module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generiere Avatar...");
    
   await message.channel.send({files:[
    {
        attachment: message.author.avatarURL.slice(0,-9),
        name: "avatar.png"
    }
   ]});

   msg.delete();
}

module.exports.help = {
    name: "avatar"
}