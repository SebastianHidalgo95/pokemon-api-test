<template lang="">
    <div class='border-top py-1' >
        <p>Color:</p>
        <div class='row mx-auto mb-2'>
            <div class="col-lg-2 col-md-3 col-xs-6 mx-1">
                <div class="checkbox checkbox-inline checkbox-blue checkbox-sm">
                    <input type="checkbox"  id="blue" :value="types[1]" 
                        @click="()=>{ selectType(types[1])}"
                    />
                    <label for="blue"></label>
                </div>  
            </div>
            <div class="col-lg-2 col-md-3 col-xs-6 mx-1">
                <div class="checkbox checkbox-inline checkbox-yellow checkbox-sm">
                    <input type="checkbox"  id="yellow" :value="types[8]" 
                        @click="()=>{ selectType(types[8])}"
                    />
                    <label for="yellow"></label>
                </div>  
            </div>
            <div class="col-lg-2 col-md-3 col-xs-6 mx-1">
                <div class="checkbox checkbox-inline checkbox-red checkbox-sm">
                    <input type="checkbox"  id="red" :value="types[10]" 
                        @click="()=>{ selectType(types[10])}"
                    />
                    <label for="red"></label>
                </div>  
            </div>
            <div class="col-lg-2 col-md-3 col-xs-6 mx-1">
                <div class="checkbox checkbox-inline checkbox-brown checkbox-sm">
                    <input type="checkbox"  id="brown" :value="types[3]" 
                        @click="()=>{ selectType(types[3])}"
                    />
                    <label for="brown"></label>
                </div>  
            </div>
            <div class="col-lg-2 col-md-3 col-xs-6 mx-1">
                <div class="checkbox checkbox-inline checkbox-gray checkbox-sm">
                    <input type="checkbox"  id="gray" :value="types[4]" 
                        @click="()=>{ selectType(types[4])}"
                    />
                    <label for="gray"></label>
                </div>  
            </div>
            
            <div class="col-lg-2 col-md-3 col-xs-6 mx-1">
                <div class="checkbox checkbox-inline checkbox-green checkbox-sm">
                    <input type="checkbox"  id="green" :value="types[5]" 
                        @click="()=>{ selectType(types[5])}"
                    />
                    <label for="green"></label>
                </div>  
            </div>
            
            <div class="col-lg-2 col-md-3 col-xs-6 mx-1">
                <div class="checkbox checkbox-inline checkbox-purple checkbox-sm">
                    <input type="checkbox"  id="purple" :value="types[7]" 
                        @click="()=>{ selectType(types[7])}"
                    />
                    <label for="purple"></label>
                </div>  
            </div>


            <div class="col-lg-2 col-md-3 col-xs-6 mx-1">
                <div class="checkbox checkbox-inline checkbox-white checkbox-sm">
                    <input type="checkbox"  id="white" :value="types[9]" 
                        @click="()=>{ selectType(types[9])}"
                    />
                    <label for="white"></label>
                </div>  
            </div>
            <div class="col-lg-2 col-md-3 col-xs-6 mx-1">
                <div class="checkbox checkbox-inline checkbox-pink checkbox-sm">
                    <input type="checkbox"  id="pink" :value="types[6]" 
                        @click="()=>{ selectType(types[6])}"
                    />
                    <label for="pink"></label>
                </div>  
            </div>
            <div class="col-lg-2 col-md-3 col-xs-6 mx-1">
                <div class="checkbox checkbox-inline checkbox-black checkbox-sm">
                    <input type="checkbox"  id="black" :value="types[1]" 
                        @click="()=>{ selectType(types[1])}"
                    />
                    <label for="black"></label>
                </div>  
            </div>
            
        </div>
        
        
    </div>
</template>
<script>

import { mapActions } from 'vuex'
export default {
    data() {
        return {
            types: [0,1,2,3,4,5,6,7,8,9,10],
            selected: [],
        }
    },
    methods: {
        ...mapActions('pokemon', ['filterPokemonsByColor']),
        selectType( id ){
            if(this.selected.includes( id ) ){
              this.remove( id )
            }else{
              this.selected.push(id)
            }
        },
        remove( value ){
            this.selected = this.selected.filter( val => val != value )
        }
    },
    watch:{
        selectedLength( val, oldval){
            this.filterPokemonsByColor(  JSON.parse(JSON.stringify(this.selected )))
        }
    },
    computed: {
        selectedLength() {
            return this.selected.length
        }
    },
}
</script>
<style lang="scss" scoped>
.box {
  background: rgb(177, 25, 25);
  border-radius: 1px;
  border-color: 1px black;
  padding-bottom: 100%;
  height: 50%;
}
.col {
    padding: 8%;
}
.checkbox-blue input[type="checkbox"]:checked + label::after {
    color: rgb(255, 255, 255);
  }


</style>