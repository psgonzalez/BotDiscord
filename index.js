const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
const prefix = '!'


client.on('message', function(message) {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    var isReady = true;

    if(command === 'paula') {
        message.reply('a paula te ama eh nois');
    } else if(command === 'casal') {
        message.reply('paula e carolina');
    } else if(command === 'filha') {
        message.channel.send('mamai ama', {
            files: [
                './content/arya.jpg'
            ]
        });
    } else if(command === 'comandos') {
        message.reply('!paula, !casal, !filha (sem criatividade no momento fodase)')
    } else if(command === 'carolina') {
        message.reply('a carolina te ama um pouquinho')
    } else if(isReady && command === 'calorina') {
        isReady = false;

        var voiceChannel = message.member.voice.channel;

        voiceChannel.join().then(connection => {
            const dispatcher = connection.play('./content/calorina.ogg');

            dispatcher.on("end", end => {
                voiceChannel.leave();
            })
        }).catch(err => console.log(err))
    } else if(isReady && command === 'guarulhos') {
        isReady = false;

        var voiceChannel = message.member.voice.channel;

        voiceChannel.join().then(connection => {
            const dispatcher = connection.play('./content/guarulhos.mp3');

            dispatcher.on("end", end => {
                voiceChannel.leave();
            })
        }).catch(err => console.log(err))
    }
});

client.login(config.BOT_TOKEN);
