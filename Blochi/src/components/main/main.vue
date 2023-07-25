<template>
    <div class="main">
      <div class="carosel-wrap">
        <carousel v-bind="options" @initialized="init" @changed="changed">
          <img src="../../assets/banner1.png" />
          <img src="../../assets/banner2.png" />
          <img src="../../assets/banner3.png" />
        </carousel>
      </div>
    </div>
  </template>
  
  <script>
  import carousel from "vue-owl-carousel2"

  export default {
    name: "main-carousel",
    components: {
      carousel,
    },
    data () {
      return {
        plugin: null,
        options: {
          autoplay: false,
          items: 1,
          startPosition: 0,
          autoplayTimeout: 2000,
        }
      };
    },
    methods: {
      handleScroll() {
        window.addEventListener("scroll", () => {
          let scrollT = window.scrollY

          if(scrollT > 0 && this.options.autoplay === false){
            this.options.autoplay = true;
            setTimeout(() => {
              this.plugin.refresh();
            }, 300);
          } else if(scrollT === 0) {
            this.options.autoplay = false;
            setTimeout(() => {
              this.plugin.refresh();
            }, 300);
          }
        })
      },
      init() {
        this.plugin = this.$children[0];
      },
      changed(e) {
        this.options.startPosition = e.item.index;
      }
    },
    mounted() {
      this.handleScroll();
    },
    destroyed() {
      window.removeEventListener("scroll", this.handelScroll);
    },
  }
  </script>
  
  <style scoped>
  main-carousel {
    border: 1px solid #000;
    height: 3000px;
  }
  .carousel-wrap {
    width: 300px;
    margin: 0 auto;
  }
  
  </style>

