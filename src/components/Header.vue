<script>
import { router } from '../router';
export default {
  name: 'Header',
  data() {
    return {
      routes: router.getRoutes()
    }
  }
}
</script>

<template>
  <header>
    <div class="container-fluid">
      <ul class="nav d-flex align-items-center">
        <li v-for="(route, i) in routes"
          :key="i">
          <router-link :to="{name: route.name}">{{ route.name }}</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  header {
    background: darkslategray;
    ul {
      height: 4rem;

      li {
        margin: 0 1.5rem;
        a {
          color:white;
          text-decoration: none;
          text-transform: uppercase;
        }
      }
    }
  }
</style>