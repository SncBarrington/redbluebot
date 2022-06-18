import { hasRole } from '../utils.js';

export function redCommand(interaction){
    if(hasRole(interaction.member.roles, 'Red Pass')){
        const text = interaction.options.getString('text');
        if(text){
            interaction.channel.send('```diff\n- '+text+'```').catch(console.error);
        }
    }
}