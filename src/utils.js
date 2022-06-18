export function hasRole(roles, role){
    return roles.cache.find(r => r.name === role)
}