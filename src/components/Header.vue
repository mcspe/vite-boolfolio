<script>
import { router } from '../router';
export default {
  name: 'Header'
}
</script>

<template>
  <header>
    <div class="container-fluid">
      <ul class="nav d-flex align-items-center">
        <li>
          <router-link :to="{name: 'home'}">home</router-link>
        </li>
        <li>
          <router-link :to="{name: 'projects'}">projects</router-link>
        </li>
        <li>
          <router-link :to="{name: 'about'}">about</router-link>
        </li>
        <li>
          <router-link :to="{name: 'contacts'}">contacts</router-link>
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