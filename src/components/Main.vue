<script>
  import axios from 'axios';
  import {store} from '../store'
  export default {
    name: 'Main',
    data() {
      return {
        store
      }
    },
    methods: {
      apiCall() {
        axios.get(store.apiEndPoint).then(results => (
          console.log(results)
        ));
      }
    },
    mounted() {
      this.apiCall();    }
  }
</script>

<template>
  <main>
    <h1>HOME</h1>
  </main>
</template>

<style lang="scss" scoped>
   
</style>