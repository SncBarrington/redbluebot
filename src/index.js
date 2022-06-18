import { Client, Intents } from 'discord.js';
import { blueCommand, redCommand } from './bot-commands.js';
const envPath = (env) => `./config/${env}.js`;
const appConfig = await import(envPath(process.env.NODE_ENV.trim() || 'default'));
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('redbluebot is running');
});

const commands = {
    'red': redCommand,
    'blue': blueCommand,
}

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

    await interaction.reply('Processing...');
	const { commandName } = interaction;
    if(commands[commandName]){
        await commands[commandName](interaction,client);
    }
    await interaction.deleteReply();
});

client.login(appConfig.config.token);