import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

const envPath = (env) => `./config/${env}.js`;
const appConfig = await import(envPath(process.env.NODE_ENV.trim() || 'default'));

const commands = [
	new SlashCommandBuilder()
    .setName('red')
    .setDescription('Creates red text')
    .addStringOption(option => option.setName('text').setDescription('Enter a text')),
	new SlashCommandBuilder()
    .setName('blue')
    .setDescription('Creates blue text')
    .addStringOption(option => option.setName('text').setDescription('Enter a text')),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(appConfig.config.token);

await rest.put(Routes.applicationCommands(appConfig.config.clientId), { body: commands })
	.then(() => console.log(`Registered redbluebot (clientId '${appConfig.config.clientId}') commands.`))
	.catch(console.error);