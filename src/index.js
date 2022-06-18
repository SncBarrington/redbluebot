import { Client, Intents } from 'discord.js';
import { BotCommand } from './command/bot-command.js';
const envPath = (env) => `./config/${env}.js`;
const appConfig = await import(envPath(process.env.NODE_ENV.trim() || 'default'));
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const botCommand = new BotCommand(client);

client.once('ready', () => {
	console.log('redbluebot is running');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

    await interaction.reply('Processing...');
    const replyMessage = await botCommand.process(interaction);
    if(replyMessage){
        await interaction.editReply(replyMessage);
    } else {
        await interaction.deleteReply();
    }

});

client.login(appConfig.config.token);