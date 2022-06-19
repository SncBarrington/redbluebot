export function setChannelCommand(interaction, textChannel){
   const channel = interaction.options.getChannel('channel');
   const color = interaction.options.getString('color');
   if(textChannel){
      textChannel[color] = channel;
      return  color + (channel ? ' channel set' : ' channel reset');
   }
   return 'Server error'
}