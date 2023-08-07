<template>
  <div id="main">
    <main-carousel></main-carousel>
    <div class="button-wrap">
      <div class="button1" v-bind:style="changeColor" @mouseover="changedColor" @mouseout="originalColor">
        <button class="game-button" @click="$router.push('/game')">Beginner</button>
        <div class="discription">초급</div>
      </div>
      <div class="button2">
        <button class="game-button" @click="$router.push('/introduction')">Intermediate</button>
        <div class="discription">중급</div>
      </div>
      <div class="button3" >
        <button class="game-button" @click="$router.push('/point')">Advanced</button>
        <div class="discription">상급</div>
      </div>
      <div class="button4">
        <button class="game-button" @click="$router.push('/point')">Events</button>
        <div class="discription">이벤트 참여</div></div>
      </div>
    
    </div>
    
</template>

<script>

import { RouterView } from 'vue-router';
import carousel from './carousel.vue';

export default {
  components:{
    "main-carousel": carousel,
    RouterView
},
  data () {
    return{
      changeColor: {
        backgroundColor: "#e5e3c8"
      }
    }
  },
  methods: {
    changedColor: function() {
      this.changeColor.backgroundColor = "#d9d6af";
    },
    originalColor: function() {
      this.changeColor.backgroundColor = "#e5e3c8";
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@700&display=swap');

#main {
  background-color: #f0f6e2;
  margin-bottom: 5vh;
}
.button-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  list-style-type: none;
  /* margin-left: 10vw;
  margin-right: 10vw; */
  background-color: #e5e3c8;
  text-align: center;
}
.game-button {
  height: 7rem;
  max-width: 800rem;
  font-size: 3rem;
  color: #302e16;
  border-color: rgba(0,0,0,0);
  background-color: rgba(0,0,0,0);
  /* font-family: 'Indie Flower', cursive;  */
  font-family: 'Yanone Kaffeesatz', sans-serif; 
}

.button1{
  border-right: 2px solid #302e16;
}

.button2{
  border-right: 2px solid #302e16;
}
.button3{
  border-right: 2px solid #302e16;
}
.discription {
  /* margin-left: 25px; */
  word-wrap: break-word;
  text-align: center;
  align-items: center;
  font-family: 'Gaegu', cursive;
  font-size: 20px;
}
</style>
