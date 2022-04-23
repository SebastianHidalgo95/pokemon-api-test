<template>
    <nav class="navbar bg-dark">
        <a class="navbar-brand text-white">
            <img src="@/assets/logo.png"
                height="30"
                alt="logo Vue"
                class="d-inline-block aline-text-top mx-2" />
            Pokemon Filter
        </a>
        <div class="d-flex">
            <div class="input-group mx-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Search</span>
                <input type="text" v-model="term" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
            </div>
           
        </div>
    </nav>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
    data() {
        return {
            term:''
        }
    },
    methods: {
        ...mapActions('pokemon', ['filterPokemonsByTerm']),
    },
    watch: {
        term( newTerm, oldTerm){
            if( newTerm != oldTerm){
                this.filterPokemonsByTerm( newTerm)
            }
        }
    }
}
</script>
<style lang="scss">
    
</style>