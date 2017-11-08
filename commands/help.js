module.exports.run = async (bot, message, args) => {
    message.channel.send({
        "embed": {
            "color": 16125699,
            "title": "<:communism:375693414689144842>I moderate our beautiful Discord, comrade.<:communism:375693414689144842>",  
            "footer": {
                "icon_url": "https://cdn.discordapp.com/avatars/376302185245442048/de65328d2a7109552fca4b6fc14bbcf1.webp?size=128%22",
                "text": "BlyatBot von Tobinatore"
            },
            "author": {
                "name": "Tobinatore",
                "icon_url": "https://cdn.discordapp.com/avatars/357861848650874890/d2185c7c548875343c7a85423d711385.webp?size=128"
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
                  "name": "🆔",
                  "value": "blyat whois @user - lässt den KGB nach Infos über den Nutzer suchen"
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
                  "value": "blyat stop - stoppt die Musik"
              },
              {
                  "name": "🔇",
                  "value": "blyat mute @user - verbietet dem User sämtliche Kommunikation (Text und Voice)",
                  "inline": true
              },
              {
                  "name": "🔉",
                  "value": "blyat timedMute @user ZeitInSekunden  - muted den User für eine bestimmte Zeit",
                  "inline": true
              },
            {
                "name": "🔊",
                "value": "blyat unmute @user - hebt beide Arten von Mutes auf"
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
    message.delete();
}

module.exports.help = {
    name: "help"
}