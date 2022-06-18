import { isAdmin } from "../../utils.js";

export function setChannelCommand(interaction, textChannel){
   if(isAdmin(interaction)){
      const channel = interaction.options.getChannel('channel');
      const color = interaction.options.getString('color');
      if(textChannel){
         textChannel[color] = channel;
         return color+' channel set';
      }
      return 'Server error'
   }
   return 'Insufficient permisions';
}