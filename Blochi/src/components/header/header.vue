<template>
    <div id="header">
      <div class="header-wrap">
        <div class="logo">Two Some Block</div>
        <div class="login">Login</div>
        <div>
        </div>
      </div>
      
    </div>
  </template>
  
  <script>


  export default {
    
    data () {
      return {
        
      }
    }, 
    methods: {
      
    },
    created() {
        this.$http.get('https://vuejs-practice-7bdb9-default-rtdb.firebaseio.com/posts.json').then(function(data){
            this.blogs = data.body.slice(0, 10);
        });
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

