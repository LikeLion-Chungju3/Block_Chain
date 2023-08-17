<template>
  <div id="ca">
    <div class="carousel">
      <div class="carosel-wrap">
        <carousel v-bind="options" @initialized="init" @changed="changed">
          <img src="../../assets/RBANNER.png" width="50vw" height="400vh" />
          <img src="../../assets/RBANNER2.png" width="50vw" height="400vh" />
          <!-- <img src="../../assets/test5.png" height="400px" width="50px" />
          <img src="../../assets/test6.png" height="400px" width="50px" /> -->
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel2";

export default {
  name: "main-carousel",
  components: {
    carousel: carousel
  },
  data() {
    return {
      plugin: null,
      options: {
        autoplay: true,
        items: 1,
        startPosition: 0,
        autoplayTimeout: 3000,
        nav: false
      }
    };
  },
  methods: {
    handleScroll() {
      window.addEventListener("scroll", () => {
        let scrollT = window.scrollY;

        if (scrollT > 0 && this.options.autoplay === false) {
          this.options.autoplay = true;
          setTimeout(() => {
            this.plugin.refresh();
          }, 300);
        } else if (scrollT === 0) {
          this.options.autoplay = false;
          setTimeout(() => {
            this.plugin.refresh();
          }, 300);
        }
      });
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
  }
};
</script>

<style scoped>
.carousel-wrap {
  /* width: auto; */
  /* height: 100%; */
  margin: 50vw;
  width: 20px;
  min-height: 20px;
  z-index: 1;
}

.owl-carousel .owl-item img {
  display: block;
  width: 70%;
  margin-left: 15vw;
  margin-right: 20vw;
  margin-top: 3vh;
}
</style>
