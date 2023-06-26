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
    <h2>{{ project.title }}</h2>
    <p>
      <h4>Type: </h4>
      <span>{{ project.type.name }}</span>
    </p>
    <p>
      <h4>Technologies: </h4>
      <span v-for="technology in project.technologies"
        :key="technology.id">
        {{ technology.name + ' ' }}
      </span>
    </p>
    <p>
      <h4>Summary: </h4>
      {{ project.summary }}
    </p>
    <a :href="project.link">{{ project.link }}</a>
  </div>
</template>

<style lang="scss" scoped>
.project {
  width: 25%;
  padding: 1rem;
  margin: 1.5rem;
  border: 1px solid black;
}
</style>