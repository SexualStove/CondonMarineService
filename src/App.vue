<template>
  <div id="app" style="width: 100%">
    <router-view/>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VueGtag from "vue-gtag";
  Vue.use(VueGtag, {
      config: { id: "AW-618773579" }
  });
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
  beforeMount() {
      let dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'AW-618773579');
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
  @import url('https://fonts.googleapis.com/css2?family=Play:wght@400;700&family=Roboto&display=swap');
  body, html {
    overflow-x: hidden;
    max-width: 100%;
  }
</style>
