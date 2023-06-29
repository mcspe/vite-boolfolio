<script>
  import axios from "axios";
  import Loader from "../components/partials/Loader.vue";
  import { store } from "../store";

  export default {
    name: 'AppProjectDetail',
    components: {
      Loader
    },
    data() {
      return {
        store,
        loaded: false
      }
    },
    methods: {
      apiCall(baseUrl, postfix) {
      this.loaded = false;
      axios
        .get((baseUrl + postfix))
        .then((results) => {
          switch (postfix) {
            case '/image':
              store.imgPath = results.data;
              break;
            default: 
              store.detailsApiResult = results.data;
              console.log(store.detailsApiResult);
              break;
          }
          this.loaded = true;
        });
    }
    },
    mounted() {
      this.apiCall(store.apiEndPoint, store.imageApi);
      this.apiCall(store.apiEndPoint, (store.projectsApi + this.$route.params.slug));
      // console.log(this.$route.params.slug);
    }
  }
</script>

<template>
  <div class="container">
    <Loader v-if="!loaded" />
    <div v-else>
      <h1>Projects</h1>
      
    </div>
  </div>
</template>

<style>

</style>