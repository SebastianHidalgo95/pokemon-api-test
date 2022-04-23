import pokemonApi from '@/api/pokemonApi'
import axios from 'axios'

///////////////TODO: CREAR UNA FUNCION QUE HAGA LAS VECES DEL FOR QUE LLENA LOS POKEMONS
//////////////deseados 
export const loadPokemons = async ( { commit } ) => {
    const { data } = await pokemonApi.get('/pokedex/national')
    const { pokemon_entries } = data
    const poke = []
    let idNumber
    if( !data ){
        commit('setPokemons', [])
        return
    }
    for ( let id of Object.keys( pokemon_entries )){
        const { name, url } = pokemon_entries[id].pokemon_species
        const { entry_number } = pokemon_entries[id]

        if(entry_number<10){  idNumber ='00'+entry_number } 
        else if( entry_number<100){ idNumber = '0'+entry_number } 
        else { idNumber = entry_number.toString() }

        poke.push({
            name,url,entry_number,idNumber
        })
    }
    commit('setPokemons', poke)
    commit('setColorPokemons', poke)
    commit('setGenderPokemons', poke)
    commit('setTypePokemons', poke)
    commit('setFilteredPokemons', poke)
}

export const filterPokemonsByTerm = ( { commit, state }, term ) => {
    if ( term.length === 0 ){
        commit('setFilteredPokemons', JSON.parse(JSON.stringify(state.pokemons)) )
    } else {
        const pokemons =  JSON.parse(JSON.stringify(state.pokemons))
        const filteredPokemons = pokemons.filter( 
            pokemon => 
                pokemon.name.toLowerCase().includes( term.toLocaleLowerCase() ) || 
                pokemon.entry_number.toString().includes( term.toLocaleLowerCase() ) 
        )
        commit('setFilteredPokemons', filteredPokemons)
    }
     
}

export const filterPokemonsByType = async ( { commit, state, dispatch  }, type=[] ) => {  
    commit('startLoading')
    const originalPokemons = state.pokemons
    if( type.length > 0){
        const poke = []
        for (let i = 0; i < type.length; i++) {
            const { data } = await pokemonApi.get(`/type/${type[i]}`)
            const  { pokemon }  = data
            for ( let id of Object.keys( pokemon )){
                const  names = pokemon[id].pokemon.name
                const find = state.pokemons.find( poke => poke.name === names)
                if(find) {
                    const { name, url, idNumber, entry_number } = find
                    poke.push({
                        name, url, idNumber, entry_number
                    })   
                }
            }
        }
        commit('setTypePokemons', poke)
        
    } else {
        commit('setTypePokemons', originalPokemons)
    }   
    dispatch('filterPokemons')
}
export const filterPokemonsByColor = async ( { commit, state, dispatch  }, color=[] ) => {
    commit('startLoading')
    const originalPokemons = state.pokemons
    if( color.length > 0){
        const poke = []
        for (let i = 0; i < color.length; i++) {
            const { data } = await pokemonApi.get(`/pokemon-color/${color[i]}`)
            const  { pokemon_species }  = data
            for ( let id of Object.keys( pokemon_species )){
                const  names = pokemon_species[id].name
                const find = state.pokemons.find( poke => poke.name === names)
                if(find) {
                    const { name, url, idNumber, entry_number } = find
                    poke.push({
                        name, url, idNumber, entry_number
                    })   
                }
            }
        }
        commit('setColorPokemons', poke )
    } else {
        commit('setColorPokemons', originalPokemons ) 
    } 
    dispatch('filterPokemons')
}
export const filterPokemonsByGender = async ( { commit, state, dispatch  }, gender ) => {
    commit('startLoading')
    const originalPokemons = state.pokemons
    if( gender != 0) {
        const poke = []
        const { data } = await pokemonApi.get(`/gender/${gender}`)
        const  { pokemon_species_details }  = data
            for ( let id of Object.keys( pokemon_species_details )){
                const  names = pokemon_species_details[id].pokemon_species.name
                const find = state.pokemons.find( poke => poke.name === names)
                if(find) {
                    const { name, url, idNumber, entry_number } = find
                    poke.push({
                        name, url, idNumber, entry_number
                    })   
                }
            }
        commit('setFilteredPokemons', poke)
        commit('setGenderPokemons', poke )
    }  else {
        commit('setGenderPokemons', originalPokemons )
    } 
    dispatch('filterPokemons') 
}

export const filterPokemons = ( { commit, state  } ) => {
    const first = []
    const final = []
    for ( let id of Object.keys( state.colorPokemons )){
        const names = state.colorPokemons[id].name
        const find = state.typePokemons.find( poke => poke.name === names)
        if(find) {
            const { name, url, idNumber, entry_number } = find
            first.push({
                name, url, idNumber, entry_number
            })   
        }
    }
    for ( let id of Object.keys( state.genderPokemons )){
        const names = state.genderPokemons[id].name
        const find = first.find( poke => poke.name === names)
        if(find) {
            const { name, url, idNumber, entry_number } = find
            final.push({
                name, url, idNumber, entry_number
            })   
        }
    }
    commit('setFilteredPokemons', final)
}

export const getPokemon = async ( { commit, state, dispatch  }, pokemon ) => {
    //commit('startLoading')
    const resp1 = await pokemonApi.get(`/pokemon/${pokemon.entry_number}`)
    const resp2 = await pokemonApi.get(`/pokemon-species/${pokemon.entry_number}`)
    const { types, weight, height } = resp1.data
    const typesNames = Object.keys(types).map( (item, key) => types[key].type.name);
    const { color, evolution_chain, growth_rate, habitat, gender_rate } = resp2.data
    const evolutions = []

    const resp3 = await axios.get(evolution_chain.url)

    const evolves = resp3.data.chain
    if (!!evolves){
        const { name, url } = evolves.species
        evolutions.push({
            name
        })
    }
    if(!!evolves.evolves_to[0]){
        const { name, url } = evolves.evolves_to[0].species
        evolutions.push({
            name
        })
    }
    if(!!evolves.evolves_to[0].evolves_to[0]){
        const { name, url } = evolves.evolves_to[0].evolves_to[0].species
        evolutions.push({
            name
        })
    }
    const first = [] 
    for ( let id of Object.keys( evolutions )){
        const names = evolutions[id].name
        const find = state.pokemons.find( poke => poke.name === names)
        if(find) {
            const { name, url, idNumber, entry_number } = find
            first.push({
                name, url, idNumber, entry_number
            })   
        }
    }   

    const pokemonActive = {
        name: pokemon.name, 
        idNumber: pokemon.idNumber,
        height,
        weight,
        category: typesNames[0],
        typesNames,
        tamaño: growth_rate.name,
        habitat: habitat.name,
        color: color.name,
        evolutions: first
    }
    commit('setPokemonActive', pokemonActive)
    
}
