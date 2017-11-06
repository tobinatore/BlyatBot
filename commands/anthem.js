module.exports.run = async (bot, message, args) => {
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
}

module.exports.help = {
    name: "anthem"
}