<template>
  <div id="main">
    <main-carousel></main-carousel>
    <div class="button-wrap">
      <div class="button1">
        <button class="game-button" @click="$router.push('/beginner')">
          Info
        </button>
        <div class="discription">사용 설명서</div>
      </div>
      <div class="button2">
        <button class="game-button" @click="$router.push('/intermediate')">
          Elementary school Lion
        </button>
        <div class="discription">블록체인이 처음인 아기 사자는 여기로!</div>
      </div>
      <div
        class="button3"
        v-bind:style="changeColor"
        @mouseover="changedColor"
        @mouseout="originalColor"
      >
        <button class="game-button" @click="$router.push('/advanced')">
          Middle shcool Lion
        </button>
        <div class="discription">똑똑이 사자는 이쪽으로!</div>
      </div>
      <div class="button4">
        <button class="game-button" @click="$router.push('/point')">
          Events
        </button>
        <div class="discription">이벤트 참여</div>
      </div>
    </div>
  </div>
</template>
<script>
import { RouterView } from "vue-router";
import carousel from "./carousel.vue";

export default {
  components: {
    "main-carousel": carousel,
    RouterView
  },
  data() {
    return {
      changeColor: {
        backgroundColor: "#e5e3c8"
      }
    };
  },
  methods: {
    changedColor: function() {
      this.changeColor.backgroundColor = "#d9d6af";
    },
    originalColor: function() {
      this.changeColor.backgroundColor = "#e5e3c8";
    }
  }
};
</script>

<style scoped>
/* @import url("https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@700&display=swap"); */
@import url("https://fonts.googleapis.com/css2?family=Caprasimo&family=Gaegu&family=Yanone+Kaffeesatz:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Caprasimo&family=Gaegu&family=Jua&family=Yanone+Kaffeesatz:wght@700&display=swap");

#main {
  background-color: #f0f6e2;
  margin-bottom: 2vh;
}
.button-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  margin-left: 17vw;
  margin-right: 17vw;
  list-style-type: none;
  /* margin-left: 10vw;
  margin-right: 10vw; */
  background-color: #e5e3c8;
  text-align: center;
}
.game-button {
  height: 12vh;
  max-width: 800vw;
  font-size: 2rem;
  color: #392504;
  border-color: rgba(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
  /* font-family: 'Indie Flower', cursive;  */
  font-family: "Caprasimo", cursive;
  word-wrap: break-word;
  margin-right: 1vw;
  border-radius: 5px;
}

.button1 {
  border-right: 2px solid #302e16;
  word-wrap: break-word;
}

.button2 {
  border-right: 2px solid #302e16;
  word-wrap: break-word;
}
.button3 {
  border-right: 2px solid #271b07;
  word-wrap: break-word;
}

.button4 {
  /* border-right: 2px solid #271b07; */
  word-wrap: break-word;
}
.discription {
  /* margin-left: 25px; */
  word-break: keep-all;
  align-items: center;
  font-family: "Jua", sans-serif;
  font-size: 20px;
  color: #392504;
  margin-left: 2px;
  margin-right: 2px;
}
</style>
