<template>
    <div>
        <h1> Get Categories from Store </h1>
        <h2> Working with Vuex</h2>

            <ul>
                <li v-for="(category, index) in $store.state.categories" :key="index">
            {{ category }}
            </li>
        </ul>

    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "CategoryItems",
    data(){
        return{
        }
    },
    methods:{
        ...mapActions(['GET_CATEGORY_FROM_API'])
    },
    mounted(){
        this.GET_CATEGORY_FROM_API();
    }

}
</script>>

<style scoped>
</style>