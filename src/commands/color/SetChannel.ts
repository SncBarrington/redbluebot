import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../../Command";

export const SetChannel: Command = {
    name: 'set_channel',
    description: 'Set red/blue text output to specific channel.',
    type: "CHAT_INPUT",
    options: [
        {
            name:'color',
            description: 'Enter a color',
            type: 3,
            required: true,
            choices: [
                {
                    name: "red",
                    value: "Red"
                },
                {
                    name: "blue",
                    value: "Blue"
                }
            ]
        },
        {
            name:'channel',
            description: 'Select output channel (leave empty to reset)',
            type: 7,
            required: false
        }

    ],
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        await interaction.editReply(setChannel(interaction)).catch(console.error);
    }
}

function setChannel(interaction: any){
    const channel = interaction.options.getChannel('channel');
    const color = interaction.options.getString('color');
    return  color + (channel ? ' channel set' : ' channel reset');
}

