export function hasRole(roles, role){
    return roles.cache.find(r => r.name === role)
}

export function isAdmin(interaction){
    return interaction.memberPermissions.has("ADMINISTRATOR")
}