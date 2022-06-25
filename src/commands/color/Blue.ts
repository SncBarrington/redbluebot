import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../../Command";

export const Blue: Command = {
    name: 'blue',
    description: 'Create blue text',
    type: "CHAT_INPUT",
    options: [
        {
            name:'text',
            description: 'Enter a text',
            type: 3,
            required: true
        }
    ],
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        await interaction.channel?.send(blueText(interaction)).catch(console.error);
        await interaction.deleteReply();
    }
}

function blueText(interaction: any){
    const text = interaction.options.getString('text', true);
    return text ? '```ini\n[ '+text+' ]```' : 'Blue command error';
}