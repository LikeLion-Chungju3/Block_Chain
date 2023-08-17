<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import header from "../src/components/header/header.vue";
import main from "../src/components/main/main.vue";
import footer from "../src/components/footer/footer.vue";
import carousel from "../src/components/main/carousel.vue";

export default {
  name: "app",
  components: {
    "app-header": header,
    "app-main": main,
    "app-footer": footer,
    "app-carousel": carousel
    // 'game-page': gamePage,
  },
  data() {
    return {};
  }
};
</script>

<style>
#app {
  background-color: #f0f6e2;

}
</style>
