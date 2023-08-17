<template>
  <div id="header">
    <div class="header-wrap">
      <div class="logo" @click="$router.push('/')">Two Some Block</div>
      <!-- <div class="login" @click="$router.push('/login')">Login</div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");

#header {
  background-color: #a4d279;
  height: 70px;
  display: grid;
  align-items: center;
}

.header-wrap {
  font-size: 35px;
  display: flex;
  justify-content: space-between;
  padding-left: 15vw;
  padding-right: 15vw;
  font-family: "Indie Flower", cursive;
  color: #302e16;
}
</style>
