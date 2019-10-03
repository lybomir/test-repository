<template>
    <form @submit.prevent="submit">
        <input type="text" placeholder="title" v-model="title">
        <input type="text" placeholder="body" v-model="body">
        <button type='submit'>Create Post</button>
        <hr>
    </form>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    data(){
        return{
            title: '',
            body: ''
        };
    },
    methods: {
        // mapMutations([]),
        submit(){

        }
    }
}
</script>


<style scoped>
   input {
    display:block;
    width: 100%;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
         }
</style>