export function redCommand(interaction, redChannel){
    const text = interaction.options.getString('text');
    if(text){
        const redText = '```diff\n- '+text+'```';
        if(redChannel){
            redChannel.send(redText).catch(console.error);
            return;
        } 
        interaction.channel.send(redText).catch(console.error);
    };
    return;
}