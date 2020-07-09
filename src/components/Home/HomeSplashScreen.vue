<template>
  <div id="Wrapper" >
    <div id="TitleArea" style="z-index: 0">
      <div id="HighlightedArea" style="z-index: -1">
      </div>
    </div>

    <div id="vimeo-wrapper">

      <div id="FadeZone">
      </div>
      <div id="LogoWrapper">
      </div>
        <img id="LogoImage" style="" src="../../assets/images/BePaidOrginal/LogoFull.png" alt="None">



      <iframe style="overflow-x: hidden;" title="BackgroundVideo" rel="preconnect" src="https://player.vimeo.com/video/422637484?&muted=1&autoplay=1&loop=1&background=1" frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen allow="autoplay; encrypted-media" id="iFrameId"></iframe>
      <div id="s"></div>
    </div>

  </div>
</template>

<script>
    import Vimeo from '@vimeo/player'
    //import Vue from 'vue';
    //Vue.use(Vimeo);
    //import { vueVimeoPlayer } from 'vue-vimeo-player'
    import {  TimelineMax } from "gsap"
    import JQuery from 'jquery';
    let $ = JQuery;
    export default {
        name: "HomeSplashScreen",

        data() {
          return{
              StartVid: false,
          }
        },
        mounted() {
            //src="https://player.vimeo.com/video/422637484?autoplay=1&loop=1&autopause=0&controls=0&muted=1"
            //let self = this;
            var iframe = document.querySelector('#iFrameId');
            let options = {
                id: 422637484,
                allowFullscreen: 1,
                loop: 1,
                controls: 0,
                width: 1980,
                autoplay: 1,
                background: 1,
            };

            var player = new Vimeo(iframe, options);
            player.loadVideo(422637484).then(function() {
                $("#FadeZone").addClass("fadeIn");
                $('#LogoImage').addClass("fadeInPic");

            });
            if(window.innerWidth > 800){
                var LogoStringTimeline = new TimelineMax({});
                LogoStringTimeline.from('#LogoImage', 1.5, {top: '12%', scale: 1.4});
            }


        }
    }
</script>

<style scoped>

  .fadeIn {
    background-color: rgba(0,0,0,0);
    opacity: 0.4;
  }
  .fadeInPic {
    opacity: 0.5;
  }
  #LogoImage {
    transition: 1s;
    position: absolute;
    top: 29%;
    left: 31%;
    transform: translate(0  , 3vw);
    width: 40vw;
    z-index: 99;
  }
  #Wrapper {
    display: block;
    position: relative;
    height: 87vh;
  }
  #vimeo-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
  }
  #vimeo-wrapper iframe {
    width: 100vw;
    height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
    min-height: 100vh;
    min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
    position: absolute;
    top: 45vh;
    left: 50%;

    transform: translate(-50%, -50%);
  }
  #FadeZone {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    pointer-events: none;
    overflow: hidden;
    background-color: rgba(0,0,30,100);
    transition: 2s;
  }
  #TitleArea {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    grid-template-columns: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
  }
  #HighlightedArea {
    padding: 3vw;
    border-radius: 50%;
    //background-color: rgba(0, 0, 30, 0.3);
    //box-shadow: 0 0 1vw rgba(0, 0, 30, 0.5);
  }
  #BePaidTitle {
    display: none;
  }
  @media screen and (max-width: 1000px) {
    #Wrapper {
      height: 89vh;
    }
    #LogoImage {
      transition: 1s;
      position: absolute;
      top: 33%;
      left: 15%;
      transform: translate(-10%, 3vw);
      width: 90%;
    }

    .fadeInPic {
      opacity: 0.7;
    }
    .fadeInPic:after {

      height: 90%;
      z-index: 99;
    }
    #BePaidTitle {
      position: absolute;
      top: 2%;
      right: 5%;
      color: white;
      font-size: 2rem;
      font-family: 'Play', sans-serif;
      display: initial;
    }
  }

</style>
