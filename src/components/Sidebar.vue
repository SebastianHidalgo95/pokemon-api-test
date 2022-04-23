<template>
    <div class="col-3 bg-white " id="sticky-sidebar">
        <div class="nav flex-column flex-nowrap vh-100 p-3 ">
            <h5>Filtros</h5>
            <FilterType />
            <FilterColor />
            <FilterGender />
        </div>
    </div>  
</template>
<script>

import { defineAsyncComponent } from 'vue'
export default {
    components: {
        FilterType : defineAsyncComponent( () => import('./FilterType.vue')),
        FilterColor : defineAsyncComponent( () => import('./FilterColor.vue')),
        FilterGender : defineAsyncComponent( () => import('./FilterGender.vue')),
    }
}
</script>
<style lang="scss" scoped>


</style>