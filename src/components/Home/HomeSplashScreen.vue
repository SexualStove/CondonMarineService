<template>
  <div id="Wrapper" >
    <div id="TitleArea" style="z-index: 0">
      <div id="HighlightedArea" style="z-index: -1">
      </div>
    </div>

    <div id="vimeo-wrapper">

      <div id="FadeZone"></div>

      <iframe id="iFrameId" src="https://player.vimeo.com/video/210743868?autoplay=1&loop=1&autopause=0&controls=0&muted=1"
              frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>

  </div>
</template>

<script>
    import {  TimelineMax } from "gsap"
    import JQuery from 'jquery';
    let $ = JQuery;
    export default {
        name: "HomeSplashScreen",
        data() {

        },
        mounted() {
            $("#iFrameId").on("load", function () {
                $("#FadeZone").addClass("fadeIn");

            });

            var LogoStringTimeline = new TimelineMax({});
            LogoStringTimeline.from('#Scalpel', 2, {translateX: '-25vw'}, '+=2').from(
                '#Hammer', 2, {translateX: '25vw'}, '-=2').from('#InvestigationsText', 2, {opacity: 0}).from(
                    '#CollectionsText', 2, {opacity: 0}, '-=2'
            );
        }
    }
</script>

<style scoped>

  .fadeIn {
    background-color: rgba(0,0,0,0);
    opacity: 0.4;
  }
  #Wrapper {
    display: block;
    position: relative;
    height: 85vh;
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
    min-height: 90vh;
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