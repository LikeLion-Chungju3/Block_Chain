<template>
  <div id="app">
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
    <router-view></router-view>
  </div>
</template>

<script>
import header from '../src/components/header/header.vue'
import main from '../src/components/main/main.vue'
import footer from '../src/components/footer/footer.vue'
import gamePlay from '../src/components/game/gamePlay.vue'


export default {
  name: 'app',
  components:{
    'app-header': header,
    'app-main': main,
    'app-footer': footer,
    'game-play': gamePlay,
  },
  data () {
    return {
      
    };
  }
}
</script>

<style>

</style>
