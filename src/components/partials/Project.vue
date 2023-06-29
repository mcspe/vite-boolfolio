<script>
import { store } from "../../store";
export default {
  name: 'Project',
  props: {
    project: Object
  },
  data() {
    return {
      store
    }
  },
  computed: {
    setImageUrl() {
      return store.imgPath + this.project.image_path;
    }
  }
}
</script>

<template>
  <div class="project">
    <img :src="setImageUrl"
      :alt="project.title">
    <h2>
      <a :href="'/project/' + project.slug">{{ project.title }}</a>
      <!-- <router-link :to="{name: 'project-detail'}">
        {{ project.title }}
      </router-link> -->
    </h2>
    <p>
      <span class="badge rounded-pill text-bg-primary"
        title="Type">{{ project.type.name }}</span>
    </p>
    <p>
      <span class="badge rounded-pill text-bg-info me-2"
        title="Technologies"
        v-for="technology in project.technologies"
        :key="technology.id">
        {{ technology.name }}
      </span>
    </p>
    <h4>Summary: </h4>
    <p>
      {{ project.summary }}
    </p>
    <a :href="project.link">{{ project.link }}</a>
  </div>
</template>

<style lang="scss" scoped>
.project {
  width: 30%;
  padding: 1rem;
  margin: 1.5rem 0;
  border: 1px solid black;

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: blue;
    }
  }
}</style>