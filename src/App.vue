<template>
  <div class="container" id="container">
    <header>
      <Navigation></Navigation>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      Vue version:
      <span v-text="version"></span>
    </footer>
  </div>
</template>
<script>
import Navigation from "./components/Navigation.vue";
import { version } from "vue";

export default {
  setup() {
    return { version };
  },
  components: {
    Navigation,
  },
  name: "App",
};
</script>
