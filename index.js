const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");

var bot = new Discord.Client();
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if (err) console.error(err);
    
    let cmdfiles = files.filter(f => f.split(".").pop() === "js");
    if (cmdfiles.length <= 0) {
        console.log("No commands to load!");
        return;
    }

    console.log(`Loading ${cmdfiles.length} commands!`);

    cmdfiles.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
    });


bot.on("ready",function(){
	bot.user.setGame("blyat help");
});

bot.on("message", function(message){

	if (message.author.equals(bot.user)) return;
	
	const swearWords = ["nigger", "faggot","idiot", "bitch", "🇳ℹ🇬🇬🇪🇷", "🇳🇮🇬🇬🇪🇷"];   //you might expand this one
	if (swearWords.some(word => message.content.toLowerCase().includes(word))) {
	    message.reply("Zensiert blyat!");   //censored blyat!
	    message.delete();
	}

	if(!message.content.startsWith(config.prefix)) return;

	let msgArr = message.content.split(" "); // ["blyat","help"]
	let command = msgArr[1]; // "help"
	let args = msgArr.slice(2); //""
    
	console.log(command);

	let cmd = bot.commands.get(command);

	if (cmd) {
	    cmd.run(bot, message, args);
	}

});

bot.login(config.token);