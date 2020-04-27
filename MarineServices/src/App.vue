<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';

export const EventBus = new Vue();
export default {
  name: 'app',
}
//Remove this top one once done converting from american car club project [FONT]
</script>

<style>

  @import url('https://fonts.googleapis.com/css?family=Cinzel|Roboto&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Inconsolata|Montserrat&display=swap');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 100%;
  width: 100%;

  overflow: hidden;
}
  body {
    margin: 0;
    overflow-x: hidden;
  }
</style>
