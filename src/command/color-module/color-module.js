import { redCommand } from './red.js';
import { blueCommand } from './blue.js';
import { setChannelCommand } from './set-channel.js';

export class ColorModule {

    constructor(){
        this.textChannel = {
            'Red':null,
            'Blue':null
        };

    }

    process(interaction){
        const { commandName } = interaction;
        let reply;
        switch(commandName){
            case 'red':
                reply = redCommand(interaction, this.textChannel['Red']);
                break;
            case 'blue':
                reply = blueCommand(interaction, this.textChannel['Blue']);
                break;
            case 'set_channel':
                reply = setChannelCommand(interaction, this.textChannel);
                break;
            default:
                reply = 'Color Command module error'
        }
        return reply;
    }
}