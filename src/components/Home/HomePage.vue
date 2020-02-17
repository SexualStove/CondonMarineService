<template>
  <div >
    <MainNavBar></MainNavBar>
    <home-page-splash-screen ></home-page-splash-screen>
    <div id="NavBackground">
      <div id="NavCricle"></div>
      <div id="NavBar"></div>
      <div id="NavBarBacking"></div>
    </div>
    <HomeContent></HomeContent>
  </div>
</template>

<script>
    import HomePageSplashScreen from "./HomePageSplashScreen";
    import MainNavBar from "../Global/MainNavBar";
    import {EventBus} from "../../App";
    import {  TimelineMax, Back } from "gsap"

    import JQuery from 'jquery';
    let $ = JQuery;
    import HomeContent from "./HomeContent";

    //style="background: linear-gradient(to left,#A4B0F5, #FFFCF2); width: 100vw"
    export default {
        name: "HomePage",
        components: {HomeContent, HomePageSplashScreen, MainNavBar},
        data() {
            return {
                NavBar: false,
            }
        },
        methods: {
            ServiceClick() {
                $('html, body').animate({
                    scrollTop: $('#Content').offset().top
                }, 2000);
            }
        },
        mounted() {
            EventBus.$on('Page', changed => {
                this.NavBar = !this.NavBar;
                console.log(`Oh, that's nice. It's gotten ${changed} clicks! :)`);
                if(this.NavBar) {
                    var NavComeTimeLine = new TimelineMax({});
                    NavComeTimeLine.to(
                        "#NavCricle", 0.3, { scale: 1, transformOrigin: "left center", ease: Back.easeInOut.config(0.5) }).to(
                        "#NavBar", 0.3, { scale: 1, transformOrigin: "left center", ease: Back.easeInOut.config(0.5)}, '-=0.3').to(
                        "#NavBarBacking", 0.3, { scale: 1, transformOrigin: "left center", ease: Back.easeInOut.config(0.5)}, '-=0.3')
                } else {
                    var NavBackTimeLine = new TimelineMax({});
                    NavBackTimeLine.to(
                        "#NavCricle", 0.3, { scale: 0, scaleX: 0, scaleY: 0, transformOrigin: "left center", ease: Back.easeInOut.config(0.5) }).to(
                        "#NavBar", 0.3, { scale: 0, transformOrigin: "left center", ease: Back.easeInOut.config(0.5)}, '-=0.3').to(
                        "#NavBarBacking", 0.3, { scale: 0, transformOrigin: "left center", ease: Back.easeInOut.config(0.5)}, '-=0.3')
                }
            });
        }
    }
    //"
</script>

<style scoped>
#Divider {
  position: absolute;
  width: 100vw;
  transform: translate(-49.65vw, -11.8vh);
  overflow-x: hidden;
  max-width: 100%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
  #NavBackground {
    position: fixed;
    top: 0;
    left: 0;
  }
  #NavCricle {
    position: absolute;
    background-color: white;
    border-radius: 50%;
    height: 12vw;
    width: 12vw;
    transform: translate(-4.5vw, -6vw) scale(0);
  }
  #NavBar {
    position: absolute;
    background-color: white;
    border-radius: 50%;
    width: 50vw;
    height: 4vw;
    transform: scale(0);
  }
  #NavBarBacking {
    position: absolute;
    background-color: white;
    width: 50vw;
    height: 2vw;
    transform: scale(0);
  }
</style>