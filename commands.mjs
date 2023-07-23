import { ping } from './commands/ping.mjs';
import { gif } from './commands/gif.mjs';

// commands is an object that maps command names to functions that take a message object and an array of tokens as argument.
const commands = { ping, gif };

// commandHandler is a function that takes a message object and decides what to do with it based on its content and channel.
async function commandHandler (msg) { 
    if (msg.channel.id == '692185505118421092') {
        let tokens = msg.content.split(" ");
        let command = tokens.shift();

        if (command.charAt(0) === '!') {
            command = command.substring(1);
            commands[command](msg, tokens);
        }
    }
 };

export { commandHandler };