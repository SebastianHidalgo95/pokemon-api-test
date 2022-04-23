import { createStore } from 'vuex'
import pokemonModule from './pokemonModule'

const store = createStore({
    modules: {
        pokemon: pokemonModule,
    }
})

export default store