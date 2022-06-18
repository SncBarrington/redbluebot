import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

const envPath = (env) => `./config/${env}.js`;
const appConfig = await import(envPath(process.env.NODE_ENV.trim() || 'default'));

const commands = [
	new SlashCommandBuilder()
    .setName('red')
    .setDescription('Create red text')
    .addStringOption(option => 
        option.setName('text')
        .setDescription('Enter a text')
        .setRequired(true)
        ),
	new SlashCommandBuilder()
    .setName('blue')
    .setDescription('Create blue text')
    .addStringOption(option => 
        option.setName('text')
        .setDescription('Enter a text')
        .setRequired(true)
        ),
    new SlashCommandBuilder()
    .setName('set_channel')
    .setDescription('(Admin) Set red/blue text output to specific channel.')
    .addStringOption(option => 
        option.setName('color')
        .setDescription('Enter a color')
        .setRequired(true)
        .addChoices(
            { name: 'red', value: 'Red' },
            { name: 'blue', value: 'Blue' }
        ))
    .addChannelOption(option => 
        option.setName('channel')
        .setDescription('Select output channel')
        .setRequired(true)
        ),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(appConfig.config.token);

await rest.put(Routes.applicationCommands(appConfig.config.clientId), { body: commands })
	.then(() => console.log(`Registered redbluebot (clientId '${appConfig.config.clientId}') commands.`))
	.catch(console.error);