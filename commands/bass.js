module.exports.run = async (bot, message, args) => {
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
}

module.exports.help = {
    name: "bass"
}