import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../../Command";

export const Red: Command = {
    name: 'red',
    description: 'Create red text',
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
        await interaction.channel?.send(redText(interaction)).catch(console.error);
        await interaction.deleteReply();
    }
}

function redText(interaction: any){
    const text = interaction.options.getString('text', true);
    return text ? '```diff\n- '+text+'```' : 'Red command error';
}

