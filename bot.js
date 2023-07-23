import dotenv from 'dotenv';
import { commandHandler } from './commands.mjs';
import { Client, GatewayIntentBits, Partials } from 'discord.js';

console.log('The bot is starting');

// Load environment variables from the .env file
dotenv.config();

const client = new Client({ intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,], 
    partials: [Partials.Channel] });

client.login(process.env.BOT_TOKEN);

client.on('ready', () => { console.log('I am online!') } );

client.on('messageCreate',  commandHandler);