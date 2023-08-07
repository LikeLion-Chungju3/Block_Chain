<template>
    <div id="header">
      <div class="header-wrap">
        <div class="logo">Two Some Block</div>
        <div class="login">Login</div>
        <div>
          <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> 
        </div>
      </div>
      
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  

  export default {
    
    data () {
      return {
        
      }
    }
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');

#header {
  background-color: #a4D279;
  height: 70px;
  display: grid;
  align-items: center;
}

.header-wrap {
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  padding-left: 7vw;
  padding-right: 7vw;
  font-family: 'Indie Flower', cursive;
}
  
  </style>

