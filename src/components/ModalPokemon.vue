<template>
<div class="modal" role="dialog" tabindex="-1"  id="exampleModal"  aria-hidden="true">
    <div  class="modal-dialog modal-xl px-5" role="document">
        <div class="modal-content"  >
            <button type="button" @click="closeModal" class="btn  col-1 ms-auto" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <div v-if="activePokemon" class="modal-body">
                <div   class="row d-flex">
                    <div class="col-5 text-center mx-auto ">
                        <div class="card card-modal my-2 mx-auto">
                            <img :src="`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${activePokemon.idNumber}.png`" class="card-img" alt="..."> 
                        </div>
                    </div>
                    <div class="col-6 mx-auto ">
                        <div class="d-flex row">
                            <div class="col-6 mx-auto">
                            <h2 class="text-center">{{activePokemon.name}}</h2>
                            </div>
                            <div class="col-6 mx-auto">
                            <span class="badge rounded-pill bg-primary">{{activePokemon.idNumber}}</span>
                            </div>
                            
                        </div>
                        <p>Incididunt fugiat proident sit dolor dolor veniam et officia laborum cupidatat. Exercitation qui sit adipisicing excepteur duis consectetur esse consequat. </p>
                        <div class="align-content-center">
                            <table class="table table-sm table-striped mx-auto">
                                
                                <tbody class="text-center">
                                    <tr class="w-100">
                                        <th scope="col">Height</th>
                                        <td scope="col">{{ activePokemon.height }}</td>
                                    </tr>
                                    <tr>
                                        <th  scope="row" >Weight</th>
                                        <td >{{ activePokemon.weight }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Category </th>
                                        <td >{{ activePokemon.category }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Size </th>
                                        <td >{{ activePokemon.tamaño }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Habitat</th>
                                        <td >{{ activePokemon.habitat }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Color</th>
                                        <td >{{ activePokemon.color }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h4>Types</h4>
                        <div class="row"> 
                            <div class="col-2" v-for="(type, index) in activePokemon.typesNames" :key="index">
                                <span  class="badge " :style="{ 'background-color': colorArray[index]}" >{{ type }}</span>   
                            </div>                         
                        </div>
                    </div>
                </div>
                <hr />
                <div v-if="!!activePokemon.evolutions" class="row d-flex">
                    <div v-for="(evolution, index) in activePokemon.evolutions" :key="index" class="col-3 mx-auto">
                        <img :src="`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${evolution.idNumber}.png`" class="img-evol" alt="..."> 
                    </div>            
                </div>


            </div>
            
            
        </div>
    </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import $ from 'jquery'
export default {
    computed: {
        ...mapGetters('pokemon',['activePokemon']),
        name(){
            return this.activePokemon.name
        }
    },
    methods: {
        closeModal(  ){
            $('#exampleModal').hide()
        }
    },
    data() {
        return {
        colorArray : ['#FF6633', '#3366E6', '#80B300', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC']
        }
    },
  
}
</script>
<style lang="scss" scoped>
.card-modal {
    width: 22vw;
}
.img-evol {
    width: 8vw;
}


</style>