<script>
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  
  export default {
    name: 'App',
    components: {
      Header,
      Main
    }
  }
</script>

<template>
  <Header />
  <router-view></router-view>
  <!-- <Main /> -->
</template>

<style>

</style>
