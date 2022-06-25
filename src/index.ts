import { Client, Intents } from 'discord.js';
import ready from "./listener/ready";
import interactionCreate from './listener/interactionCreate';
import getConfig from './config';
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const config = getConfig();

ready(client);
interactionCreate(client);
client.login(config.token);