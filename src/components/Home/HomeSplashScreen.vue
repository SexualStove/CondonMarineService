<template>
  <div id="Wrapper" >
    <div id="TitleArea" style="z-index: 0">
      <div id="HighlightedArea" style="z-index: -1">
      </div>
    </div>

    <div id="vimeo-wrapper">

      <div id="FadeZone">
        <img id="LogoImage" style="position: absolute; top: 33.5%; left: 15%; transform: translate(14.5vw  , 3vw); width: 40vw" src="../../assets/images/BePaidOrginal/LogoFull.png" alt="None">
      </div>

      <iframe src="https://player.vimeo.com/video/422637484?&muted=1&autoplay=1&loop=1&background=1" frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen allow="autoplay; encrypted-media" id="iFrameId"></iframe>
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
            let self = this;
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
            if(self.StartVid) {
                player.on('loaded', function() {
                    player.play();
                    self.StartVid = false;
                });
            }



            var LogoStringTimeline = new TimelineMax({});
            LogoStringTimeline.from('#LogoImage', 2, {top: '12%', scale: 1.4}, "+=0.6"
            );
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


</style>
