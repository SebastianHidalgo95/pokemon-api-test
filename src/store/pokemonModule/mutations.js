// export const myMutation = ( state ) => {
//     return state
// }

export const setPokemons = ( state, pokemons ) => {
    state.pokemons = [...state.pokemons, ...pokemons]
    state.isLoading = false 
}

export const setFilteredPokemons = ( state, filteredPokemons ) => {
    state.filteredPokemons = [ ...filteredPokemons] 
    state.isLoading = false
}
export const setColorPokemons = ( state, colorPokemons ) => {
    state.colorPokemons = [ ...colorPokemons]
}
export const setGenderPokemons = ( state, genderPokemons ) => {
    state.genderPokemons = [ ...genderPokemons] 
}
export const setTypePokemons = ( state, typePokemons ) => {
    state.typePokemons = [ ...typePokemons]
}

export const startLoading = ( state ) => {
    state.isLoading = true
}

export const setPokemonActive = ( state, pokemonActive ) => {
    state.pokemonActive = pokemonActive
}