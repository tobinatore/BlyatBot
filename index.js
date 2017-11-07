const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");

var bot = new Discord.Client();
bot.commands = new Discord.Collection();
bot.mutes = require("./mutes.json");

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

    bot.setInterval(() => {
        for (let i in bot.mutes) {
            let time = bot.mutes[i].time;
            let guildID = bot.mutes[i].guild;
            console.log(guildID);
            console.log(" ");

            let guild = bot.guilds.get(guildID);
            let member = guild.members.get(i);
            console.log(member.id);
            console.log(" ");
            let mutedRole = guild.roles.find(r => r.name === "BB TimedMuted");
           // console.log(Date.now());
            //  console.log(time);
            console.log(mutedRole.id);
            console.log("----------------------------------");
            if (!mutedRole) continue;

            if (Date.now() > bot.mutes[i].time) {
                console.log(`${member.user.tag}`)
                member.removeRole(mutedRole);
                delete bot.mutes[i];

                fs.writeFile("./mutes.json", JSON.stringify(bot.mutes), err=> {
                    if (err) throw err;
                    console.log(`${member.user.tag} has been unmuted!`);
                    member.send(`Genosse, du bist nicht mehr gemuted!`);
                });
            }
        }
    }, 3000);
});

bot.on("message", function(message){

	if (message.author.equals(bot.user)) return;
	
	const swearWords = ["nigger", "faggot","idiot", "bitch", "🇳ℹ🇬🇬🇪🇷", "🇳🇮🇬🇬🇪🇷"];   //you might expand this one
	if (swearWords.some(word => message.content.toLowerCase().includes(word))) {
	    message.reply("Zensiert blyat!");   //censored blyat!
	    message.delete();
	}

	if(!message.content.startsWith(config.prefix)) return;

	let msgArr = message.content.split(" "); // ["blyat","timedMute","255345474934931456", "10"]
	let command = msgArr[1]; // "help"
	let args = msgArr.slice(2, msgArr.length); //["255345474934931456", "10"]
    
	console.log(command);

	let cmd = bot.commands.get(command);

	if (cmd) {
	    cmd.run(bot, message, args);
	}

});

bot.login(config.token);