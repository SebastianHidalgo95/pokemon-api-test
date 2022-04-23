<template>
    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6">
        <div class="card my-2">
            <img :src="`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.idNumber}.png`" class="card-img" alt="...">
            <div class="card-body">
                <h4 class="card-text text-center align-top">{{ pokemon.name }}</h4>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        pokemon: {
            type: Object,
            required: true,
        }
    },
}
</script>
<style lang="scss" scoped>
.card {
    cursor:pointer;
}
</style>