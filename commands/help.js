module.exports.run = async (bot, message, args) => {
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
}

module.exports.help = {
    name: "help"
}