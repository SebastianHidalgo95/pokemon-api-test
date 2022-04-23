<template>

    <div v-if="isLoading" 
        class="col-9 col-xs-12 text-center mt-5">
            Espere por favor ....
            <h2 class="mt-2">
                <i class="fa fa-spin fa-sync"></i>
            </h2>
    </div>
    <div v-else class="col-9 col-xs-12">
        <h1> Choose a pokemon</h1>
        <div class="row">
            <Card  v-for="pokemon in getFilteredPokemons.slice(0, limit)" 
                :key="pokemon.idNumber"
                :pokemon="pokemon"
                @click="openModalPokemon(pokemon)"
            />

        </div>
        <div class="row justify-content-center p-5">
            <div class="col-3">
                <button class="btn btn-success" @click="increaseLimit">Load More</button>
            </div>
        </div>
    </div>
</template>
<script>

import { defineAsyncComponent } from 'vue'
import { mapGetters, mapState, mapActions } from 'vuex'
import $ from 'jquery'
export default {
    components: {
        Card : defineAsyncComponent( () => import('./Card.vue')),
    },
    data() {
        return {
            limit:20
        }
    },
    computed: {
        ...mapGetters('pokemon',['getFilteredPokemons']),
        ...mapState('pokemon', ['isLoading'])
    },
    watch: {
       getFilteredPokemons(){
           if( this.getFilteredPokemons.length < 20 ){
               this.limit = 20
           }
       } 
    },
    methods: {
        ...mapActions('pokemon',['getPokemon']),
        increaseLimit(){
            this.limit = this.limit + 20
        },
        openModalPokemon( pokemon ){
            this.$store.state.pokemon.openModal = true
            const poke = pokemon
            this.getPokemon( poke )
            $('#exampleModal').show()
        }
    },
    created() {

    },
}
</script>
<style lang="scss" scoped>
 .card {
   width: 18rem;
    
 }
 
</style>