<template>
  <div id="app" style="width: 100%">
    <router-view/>
  </div>
</template>

<script>
  import Vue from 'vue';

export const EventBus = new Vue();
export default {
  name: 'app',
  data() {
    return{
      isMobile: false,
      EslintUser: false,
    }
  },
  methods: {
    onResize () {
      this.isMobile = window.innerWidth < 800;

      EventBus.$emit('MobileSize', this.isMobile);
    }
  },
  mounted() {
    let self = this;
    EventBus.$on('PageLoaded', changed => {
      self.EslintUser = changed;
      console.log("Paged loaded emoting now");
      EventBus.$emit('MobileSize', self.isMobile);
    });

    this.onResize();
    window.addEventListener('resize', this.onResize, {passive: true});
  },
  watch:{
    $route (){
      EventBus.$emit('MobileSize', this.isMobile);
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Big+Shoulders+Text:100,400,600|Montserrat&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Bebas+Neue|Montserrat&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500i&display=swap');
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  body, html {
    overflow-x: hidden;
    max-width: 100%;
  }
</style>
