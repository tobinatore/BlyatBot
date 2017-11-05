const Discord = require("discord.js");
const TOKEN = "YOUR_TOKEN_HERE"
const PREFIX = "blyat ";
const PRE2 = "cyka ";

var bot = new Discord.Client();

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

	if(message.content.startsWith(PRE2))
	{
		var args = message.content.substring(PRE2.length).split(" ");
		switch(args[0].toLowerCase()){
		case "blyat":
	    message.reply("Ты с ума сошёл? иди на хуй Сука  блядь!")
	}
	}
	
	if(!message.content.startsWith(PREFIX)) return;
	
	var args = message.content.substring(PREFIX.length).split(" ");
	
	switch(args[0].toLowerCase()){
		case "help":                    //overview of the bots commands
		    message.channel.send({
		        "embed": {
		            "color": 16125699,
		            "title": "<:communism:375693414689144842>I moderate our beautiful Discord, comrade.<:communism:375693414689144842>",    //custom emojis from the discord this bot was made for
		            "footer": {
		                "icon_url": "https://cdn.discordapp.com/avatars/376302185245442048/de65328d2a7109552fca4b6fc14bbcf1.webp?size=128%22",
		                "text": "BlyatBot von Tobinatore"
		            },
		            "author": {
		                "name": "Tobinatore",
		                "icon_url": "https://cdn.discordapp.com/avatars/357861848650874890/d19ee8bee9ad40b5eb0a5607c587dc1f.webp?size=128"
		            },
		            "fields": [
                      {
                          "name": "............................................................................................................................................................... ",
                          "value": "....................................................................................................................................................................."
                      },
                      {
                          "name": "🗑",
                          "value": "blyat purge (2-100) - löscht die angegebene Menge an Nachrichten"
                      },
                      {
                          "name": "🤜",
                          "value": "blyat kick @user Grund - Kickt den betroffenen User"
                      },
                      {
                          "name": "🤔",
                          "value": "blyat help - Zeigt dieses Fenster"

                      },
                      {
                          "name": "<:communism:375693414689144842>",
                          "value": "blyat anthem - musikalische Unterhaltung",
                          "inline": true
                      },
                       {
                           "name": "🅱ass",
                           "value": "blyat bass - musikalische Unterhaltung",
                           "inline": true
                       },
                      {
                          "name": "☠",
                          "value": "blyat stop - stoppt die Musik",
                          "inline": true
                      },
                      {
                          "name": "...............................................................................................................................................................",
                          "value": "....................................................................................................................................................................."
                      },
                      {
                          "name": "🙄",
                          "value": "Mehr Funktionen kommen wenn ich Zeit hab"
                      }

    ]
		}});
		break;
		case "purge":   //mass deleting messages (2-100)
		if (message.member.hasPermission("ADMINISTRATOR")) {    //requires admin-privilige
		let messagecount = parseInt(args[1]);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
		}
		 break;
		 case "kick":
		 if(!message.member.hasPermission("ADMINISTRATOR") )
			return message.reply("Sorry, du hast nicht die erforderlichen Rechte um jemanden zu kicken!");
    
		//check if there is a member and whether we can kick him
		// message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
		let member = message.mentions.members.first();
		if(!member)
		return message.reply("Bitte @erwähne einen User!");
		if(!member.kickable) 
		return message.reply("Blyat! Ich kann den User nicht kicken, Genosse. Hat er eine höhere Rolle oder fehlen mir die Rechte?");
    
		// slice(2) dismisses Command und @mention
		let reason = args.slice(2).join(' ');
		if(!reason)
      return message.reply("Blyat, du brauchst einen Grund um jemanden zu kicken!");
		
    //and now we kick...
    member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} konnte nicht kicken weil : ${error}`));
    message.reply(`${member.user.tag} wurde von ${message.author.tag} gekickt. Grund: ${reason}`);
    member.sendMessage("Du wurdest gekickt.");
		 break;
		  
	case "anthem":      //makes the bot join your voicechannel and play anthem mp3
	if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
         message.reply("Gute Wahl, Genosse");
		 const dispatcher = connection.playFile('./anthem.mp3');
		 
		 
		 dispatcher.on('end', () => {
			connection.disconnect();    //when the song ends the bot disconnects
		});
		 
        })
        .catch(console.log);
    } else {
      message.reply('Blyat du musst in einen VoiceChannel!');
    }
	break;
	
	case "stop":
	 message.member.voiceChannel.join()     //makes the bot join your channel and then stops him, so you don't have to switch voicechannels if he's in another channel
        .then(connection => { 
         message.reply("Idi nahui cyka blyat.");
		 connection.disconnect();
        });
	 break;
	    
	    case "bass":    //plays hard bass
	        if (message.member.voiceChannel) {
	            message.member.voiceChannel.join()
                    .then(connection => { 
                        message.reply("Narkotik kal, blyat");
                        const dispatcher = connection.playFile('./narkotik.mp3');

                        dispatcher.on('end', () => {
                            connection.disconnect();
                        });
                    })
                    .catch(console.log);
	        }
	        else {
	            message.reply('Blyat du musst in einen VoiceChannel!');
	        }

	        break;
	}
});

bot.login(TOKEN);