export function blueCommand(interaction){
    const text = interaction.options.getString('text');
    if(text){
        interaction.channel.send('```ini\n[ '+text+' ]```').catch(console.error);
    }
}