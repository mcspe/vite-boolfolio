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
        <h4 class="mt-3">Types:</h4>
        <div class="form-check form-switch">
          <input class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault">
          <label class="form-check-label"
            for="flexSwitchCheckDefault">All</label>
        </div>
        <div class="form-check form-switch"
          v-for="(type) in store.typesApiResult"
          :key="type.id">
          <input class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault">
          <label class="form-check-label"
            for="flexSwitchCheckDefault">{{ type.name }}</label>
        </div>
        <h4 class="mt-3">Technologies:</h4>
        <div class="form-check form-switch">
          <input class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault">
          <label class="form-check-label"
            for="flexSwitchCheckDefault">All</label>
        </div>
        <div class="form-check form-switch"
          v-for="(technology) in store.technologiesApiResult"
          :key="technology.id">
          <input class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault">
          <label class="form-check-label"
            for="flexSwitchCheckDefault">{{ technology.name }}</label>
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
}</style>