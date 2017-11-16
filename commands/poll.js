
module.exports.run = async (bot, message, args) => {

        let poll = args.join(' ');
        if(!poll)
            return message.reply("Blyat, du brauchst einen schon eine Frage, wenn jemand abstimmen soll.");

        message.channel.send(`**Umfrage von ${message.author}:** \n` + poll).then(function (message) {
              message.react("👍")
              message.react("👎")
            });
    
   
}

module.exports.help = {
    name: "poll"
}