<template>
  <div v-if="NavBar" id="Nav">
    <h2 class="NavItem">Home</h2>
    <h2 class="NavItem">About</h2>
    <h2 class="NavItem">Gallery</h2>
    <h2 class="NavItem">Contact Us</h2>
  </div>
</template>

<script>
    import {EventBus} from "../../App";
    export default {
        name: "HomePage",
        data() {
            return {
                NavBar: false,
            }
        },
        methods: {
        },
        mounted() {
            EventBus.$on('Page', changed => {
                this.NavBar = !this.NavBar;
                console.log(`Oh, that's nice. It's gotten ${changed} clicks! :)`);
            });
        },
    }
</script>

<style scoped>
#Nav {
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  transition: 1s;
  z-index: 2;
}
  .NavItem {
    padding-left: 5vw;
    color: black;
    width: 100%;
  }
  .NavItem:hover {
    cursor: pointer;
  }
</style>