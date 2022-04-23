<template>
    <Navbar />
    <div class="container-fluid overflow-auto">
        <div class="row">
            <Sidebar />
                <ModalPokemon />
            <CardBlock />
            
        </div> 
    </div>
    
</template>
<script>
import { defineAsyncComponent } from 'vue'
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
    name: 'PokemonsPage',
    components: {
        Navbar : defineAsyncComponent( () => import('../components/Navbar.vue')),
        Sidebar : defineAsyncComponent( () => import('../components/Sidebar.vue')),
        CardBlock : defineAsyncComponent( () => import('../components/CardBlock.vue')),
        ModalPokemon : defineAsyncComponent( () => import('../components/ModalPokemon.vue')),
    },
    data() {
        return {
            modal: null
        }
    },
    computed:{
        ...mapGetters('pokemon',['modalOpen']),
    },
    created() {
        this.loadPokemons()
    },
    mounted() {

    },
    
    methods: {
        ...mapActions('pokemon', ['loadPokemons', 'filterPokemonsByType']),
        showModal() {
            
        /* let element = this.$refs.modal.exampleModal
            $(element).modal('show') */
        }
    },
}
</script>
<style lang='scss' scoped>
.showModalVue {
    display: show !important;
}
</style>