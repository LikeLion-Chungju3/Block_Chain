<template>
    <div id ="gameBoard">
      <div class="event">
      </div>
    </div>
  </template>

  <script>
  import index2 from './Point.js'
  
  export default {
    components: {
      'index2': index2
    },
    data () {
      return {
        html, 
        foo: null
      }
    }
    // mounted() {
    //   this.event = require('../main/index2.html')
    // }
  }
  </script>
  
  <style>
  #gameBoard {
    background-color: aqua;
    min-width: 400px;
    min-height: 400px;
  }
  </style>
