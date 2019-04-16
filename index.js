//initialization
const Discord = require('discord.js');
const {prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);

//listening for commands
client.on('message', message => {
    if (message.content.match("uwu")) {
        message.reply("UWU");
    }
    else if (message.content.match("uuwwuu")) {
        message.reply("STOP MAKING FUN OF ME YOU STUPID BAKA!!");
    }
    else if (message.content === "i love you") {
        message.reply("SAY IT BACK !!");
    }
    else if (message.content === "pokemon cards") {
        message.reply(" GIVE ME THE PURPLE POKEMON CARD !!")
    }
})
client.on ('message', message => {
    if (message.author.id !== client.user.id && message.content.match("furry")){ 
        message.reply("god im not a furry stop talking ab it !!");
    }
    if (message.content.match("shut up bruce") || message.content.match("bruce shut up")) {
        message.reply("stop it meanie, your hurting my feewings!");
    }
    if (message.author.id !== client.user.id && message.content.match("im bruce")) {
        message.reply("no ur not, im bruce!");
    }
    if (message.content == "whos bruce?") {
        message.reply("im bruce, tha afro man.");
    }
    if (message.content.startsWith("im")){
        message.channel.send("Hey! " + message.content + " I'm Bruce!");
    }
})