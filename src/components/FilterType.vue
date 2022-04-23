<template >
    <div class='border-top'>
        <div class='row'>
            <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" :value="types[7]" id="bug"
                        @click="()=>{ selectType(types[7])}" 
                    />
                    <label class="form-check-label" htmlFor="bug">
                        Bug 
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" :value="types[13]" id="Electric" 
                        @click="()=>{ selectType(types[13])}" />
                    <label class="form-check-label" htmlFor="Electric">
                        Electric
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" :value="types[11]" id="Water" 
                    @click="()=>{ selectType(types[11])}"
                    />
                    <label class="form-check-label" htmlFor="Water">
                    Water
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" :value="types[5]" id="Ground" 
                        @click="()=>{ selectType(types[5])}"
                    />
                    <label class="form-check-label" htmlFor="Ground">
                        Ground
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" :value="types[10]" id="Fire"
                    @click="()=>{ selectType(types[10])}"
                    />
                    <label class="form-check-label" htmlFor="Fire">
                        Fire
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" :value="types[15]" id="Ice" 
                    @click="()=>{ selectType(types[15])}"
                    />
                    <label class="form-check-label" htmlFor="Ice">
                        Ice
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" :value="types[3]" id="Flying" 
                        @click="()=>{ selectType(types[3])}"
                    />
                    <label class="form-check-label" htmlFor="Flying">
                        Flying
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" :value="types[6]" id="Rock" 
                        @click="()=>{ selectType(types[6])}"
                    />
                    <label class="form-check-label" htmlFor="Rock">
                        Rock
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" :value="types[1]" id="Normal" 
                        @click="()=>{ selectType(types[1])}"
                    />
                    <label class="form-check-label" htmlFor="Normal">
                        Normal
                    </label>
                </div>
                
            </div>
            <div class='col-6'>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" :value="types[14]" id="Psychic" 
                    @click="()=>{ selectType(types[14])}"
                    />
                    <label class="form-check-label" htmlFor="Psychic">
                        Psychic
                    </label>
                </div>
                <div class="form-check">
                            <input class="form-check-input" type="checkbox" :value="types[2]" id="Fighting" 
                                @click="()=>{ selectType(types[2])}"
                            />
                            <label class="form-check-label" htmlFor="Fighting">
                                Fighting
                            </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" :value="types[18]" id="Fairy" 
                    @click="()=>{ selectType(types[18])}"
                    />
                    <label class="form-check-label" htmlFor="Fairy">
                        Fairy
                    </label>
                </div>
                
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" :value="types[16]" id="Dragon" 
                    @click="()=>{ selectType(types[16])}"
                    />
                    <label class="form-check-label" htmlFor="Dragon">
                        Dragon
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" :value="types[9]" id="Steel" 
                    @click="()=>{ selectType(types[9])}"
                    />
                    <label class="form-check-label" htmlFor="Steel">
                        Steel
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" :value="types[12]" id="Grass" 
                    @click="()=>{ selectType(types[12])}"
                    />
                    <label class="form-check-label" htmlFor="Grass">
                        Grass
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" :value="types[4]" id="Poison" 
                    @click="()=>{ selectType(types[4])}"
                    />
                    <label class="form-check-label" htmlFor="Poison">
                        Poison
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" :value="types[8]" id="Ghost" 
                        @click="()=>{ selectType(types[8])}"
                    />
                    <label class="form-check-label" htmlFor="Ghost">
                        Ghost
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" :value="types[17]" id="Unknown" 
                        @click="()=>{ selectType(types[17])}"
                    />
                    <label class="form-check-label" htmlFor="Unknown">
                        Dark
                    </label>
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
            types: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            selected: [],
        }
    },
    watch:{
        selectedLength( val, oldval){
            this.filterPokemonsByType(  JSON.parse(JSON.stringify(this.selected )))
        }
    },
    computed: {
        selectedLength() {
            return this.selected.length
        }
    },
    methods: {
        ...mapActions('pokemon', ['filterPokemonsByType']),
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
}
</script>
<style lang="scss" scoped>
    
</style>