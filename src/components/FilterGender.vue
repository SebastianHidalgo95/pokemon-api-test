<template>
    <div className='border-top'>
        <p>Genero:</p>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" 
                id="flexRadioDefault1" value="0" v-model="gender" />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
                All
            </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" value="1" type="radio" name="flexRadioDefault" id="flexRadioDefault1" v-model="gender" />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
                Male
            </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" value="2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" v-model="gender"/>
            <label className="form-check-label" htmlFor="flexRadioDefault1">
                Female
            </label>
        </div>
        <div className="form-check mb-5">
            <input className="form-check-input" value="3" type="radio" name="flexRadioDefault" id="flexRadioDefault1" v-model="gender"/>
            <label className="form-check-label" htmlFor="flexRadioDefault1">
                Undefined
            </label>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            gender:'0'
        }
    },
    methods: {
        ...mapActions('pokemon', ['filterPokemonsByGender']),
    
    },
    watch:{
        gender( val, oldval){
            if(val != oldval)
            this.filterPokemonsByGender(  JSON.parse(JSON.stringify(this.gender )))
        }
    },
}
</script>
<style lang="scss">
    
</style>