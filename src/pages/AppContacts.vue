<script>
// import axios from "axios";
// import Project from "./partials/Project.vue";
// import { store } from "../store";
export default {
  name: "AppContacts",
  // components: {
  //   Project
  // },
  // data() {
  //   return {
  //     store,
  //   };
  // },
  // methods: {
  //   apiCall() {
  //     axios
  //       .get(store.apiEndPoint)
  //       .then((results) => {
  //         store.apiResult = results.data;
  //       });
  //   },
  //   getImgPath() {
  //     axios.get(store.apiEndPoint + '/image')
  //       .then((results) => {
  //         store.imgPath = results.data;
  //       });
  //   }
  // },
  // mounted() {
  //   this.apiCall();
  //   this.getImgPath();
  // },
};
</script>

<template>
  <main>
    <div class="container">
      <h1>Contacts</h1>
    </div>
    <!-- <div class="project-container">
      <Project v-for="project in store.apiResult"
        :key="project.id"
        :project="project" />
    </div> -->
  </main>
</template>

<style lang="scss" scoped>
  // .project-container {
  //   display: flex;
  //   flex-wrap: wrap;
  // }
</style>