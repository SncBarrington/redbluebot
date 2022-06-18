import { hasRole } from '../../utils.js';

export function redCommand(interaction, redChannel){
    if(hasRole(interaction.member.roles, 'Red Pass')){
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
    return 'Insufficient role';
}