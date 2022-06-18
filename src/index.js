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

client.on('message', message => {
    var cmnd = message.content.split(' ')[0];
    var content = message.content.substring(message.content.indexOf(' ') + 1)
    if(message.content.split(' ').length > 1){
        switch(cmnd){
            case '>red':
                if(hasRole(message.member.roles, 'Red Pass')){
                    message.delete()
                    .then(msg => msg.channel.send('```diff\n- '+content+'```'))
                    .catch(console.error);
                }
                break;
            case '>blue':
                message.delete()
                .then(msg => msg.channel.send('```ini\n[ '+content+' ]```'))
                .catch(console.error);
                break;
            default:
                break;
        }
    }
});

client.login(config.discord.token);