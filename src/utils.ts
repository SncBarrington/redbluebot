import { BaseCommandInteraction, GuildMemberRoleManager } from "discord.js"

export function hasRole(roles: GuildMemberRoleManager, role: string){
    return roles.cache.find(r => r.name === role)
}

export function isAdmin(interaction: BaseCommandInteraction){
    return interaction.memberPermissions?.has("ADMINISTRATOR")
}