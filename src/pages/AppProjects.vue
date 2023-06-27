<script>
import axios from "axios";
import Project from "../components/partials/Project.vue";
import { store } from "../store";
export default {
  name: "AppProjects",
  components: {
    Project
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    apiCall(baseUrl, postfix) {
      axios
        .get((baseUrl + postfix))
        .then((results) => {
          switch (postfix) {
            case '/':
              store.projectsApiResult = results.data;
              break;
            case '/types':
              store.typesApiResult = results.data;
              break;
            case '/technologies':
              store.technologiesApiResult = results.data;
              break;
            case '/image':
              store.imgPath = results.data;
              break;
          }
        });
    }
  },
  mounted() {    
    this.apiCall(store.apiEndPoint, store.projectsApi);
    this.apiCall(store.apiEndPoint, store.typesApi);
    this.apiCall(store.apiEndPoint, store.technologiesApi);
    this.apiCall(store.apiEndPoint, store.imageApi);
  }
};
</script>

<template>
  <main>
    <div class="container">
      <h1>Progetti</h1>
      <div class="project-filter float-start p-3">
        <h4>Types:</h4>
        <div class="input-group mb-3">
          <div class="input-group-text">
            <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">
          </div>
          <input type="text" class="form-control" aria-label="Text input with checkbox">
        </div>
        <div class="input-group mb-3">
          <div class="input-group-text">
            <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">
          </div>
          <input type="text" class="form-control" aria-label="Text input with checkbox">
        </div>
      </div>

      <div class="project-container">
        <Project v-for="project in store.projectsApiResult"
          :key="project.id"
          :project="project" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  .project-filter {
    width: 15%;
  }
  .project-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>