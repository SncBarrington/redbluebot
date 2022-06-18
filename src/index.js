const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const env = process.env.NODE_ENV.trim() || 'default';
const config  = require('./config/' + env + '.js');

client.once('ready', () => {
    console.log('using env \''+env+'\'')
	console.log('redbluebot is running');
});

function hasRole(roles, role){
    return roles.cache.find(r => r.name === role)
}

function getMessageContent(message){
    return message.content.substring(message.content.indexOf(' ') + 1);
}

function redCommand(message){
    if(hasRole(message.member.roles, 'Red Pass')){
        message.delete()
        .then(msg => msg.channel.send('```diff\n- '+getMessageContent(message)+'```'))
        .catch(console.error);
    }
}

function blueCommand(message){
    message.delete()
        .then(msg => msg.channel.send('```ini\n[ '+getMessageContent(message)+' ]```'))
        .catch(console.error);
}

const commands = {
    '>red': redCommand,
    '>blue': blueCommand
}

client.on('message', message => {
    const cmnd = message.content.split(' ')[0];
    if(message.content.split(' ').length > 1 && commands[cmnd]){
        commands[cmnd](message);
    }
});

client.login(config.discord.token);