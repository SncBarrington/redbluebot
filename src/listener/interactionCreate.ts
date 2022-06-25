import { BaseCommandInteraction, Client } from "discord.js";
import { Commands } from "../Commands";

export default (client: Client): void => {
    client.on('interactionCreate', async interaction => {
        if (interaction.isCommand() || interaction.isContextMenu()) {
            await handleSlashCommand(client, interaction);
        }
    });
};

const handleSlashCommand = async (client: Client, interaction: BaseCommandInteraction): Promise<void> => {
    const slashCommand = Commands.find(c => c.name === interaction.commandName);
    if (!slashCommand) {
        interaction.reply({ content: 'interactionCreate error', ephemeral: true });
        return;
    }

    await interaction.deferReply();
    slashCommand.run(client, interaction);

};