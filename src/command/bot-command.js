import { ColorModule } from './color-module/color-module.js';

export class BotCommand {

    constructor(client){
        this.client = client;
        this.colorModule = new ColorModule(); 
        this.moduleMap = {
            'red': this.colorModule,
            'blue': this.colorModule,
            'set_channel': this.colorModule
        }
    }

    process(interaction){
        const { commandName } = interaction;
        if(this.moduleMap[commandName]){
            return this.moduleMap[commandName].process(interaction, this.client);
        }
        return 'Bot Command module error';
    }

}