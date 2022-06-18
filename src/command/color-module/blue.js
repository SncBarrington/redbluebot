export function blueCommand(interaction, blueChannel){
    const text = interaction.options.getString('text');
    if(text){
        const blueText = '```ini\n[ '+text+' ]```';
        if(blueChannel){
            blueChannel.send(blueText).catch(console.error);
            return;
        }
        interaction.channel.send(blueText).catch(console.error);
    }
}