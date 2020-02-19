<template>
  <div id="SplashZone">
    <div id="SplashContent">
      <img  id="LogoImage" src="../../assets/images/Logo.png" alt="None">
      <div id="Title">
        <h1 class="MainLetters">C</h1>
        <h1 id="Letter1">ondon </h1>
        <h1 class="MainLetters">M</h1>
        <h1 id="Letter2">arine </h1>
        <h1 class="MainLetters">S</h1>
        <h1 id="Letter3">ervices</h1>
        <div id="Line"></div>
        <h3 id="SemiBlurb">Boat building, repairs, maintenance</h3>
      </div>
    <img src="../../assets/images/TestBoat.png" alt="None" id="TestImage">
    </div>
    <div class="ocean">


      <div id="Waves">
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
    </div>
  </div>
</template>

<script>
    import JQuery from 'jquery';
    let $ = JQuery;
    import {EventBus} from "../../App";
    import {  TimelineMax, Back } from "gsap"
    export default {
        data() {
          return{
                    NavClickTimeline: undefined,
          }
        },
        methods: {
            ServiceClick() {
                $('html, body').animate({
                    scrollTop: $('#Content').offset().top -400
                }, 2000);
            },

        },
        mounted() {





            /* Old code here */


            //SemiBlurb
            var LogoStringTimeline = new TimelineMax({});
            LogoStringTimeline.to("#LogoImage", 1, {rotate: 180, ease: Back.easeOut.config(1)}, '+=1').to(
                "#LogoImage", 2, {width: '3vw', top: '2%', rotate: 0, left: '1%', ease: Back.easeOut.config(0.5), position: 'fixed'}, '+=1').to(
                "#Title", 0.75, {opacity: 1, top: '20%', ease: Back.easeOut.config(0.5)}).to(
                "#Letter1", 1, {'margin-right': '3%', opacity: 1,  width: 'auto', ease: Back.easeOut.config(0.5)}).to(
                "#Letter2", 1, {'margin-right': '3%', opacity: 1, width: 'auto', ease: Back.easeOut.config(0.5)}, '-=1').to(
                "#Letter3", 1, {'margin-right': '3%', opacity: 1, width: 'auto', ease: Back.easeOut.config(0.5)}, '-=1').from(
                "#Line", 0.5, { scaleX: 0, transformOrigin: "right center" }).from(
                "#SemiBlurb", 0.5, { opacity: 0, y: 500, ease: Back.easeOut.config(0.5)});

            let NavIconAnimation = new TimelineMax({paused: true});
            NavIconAnimation.to("#LogoImage", 1, {rotate: 360, scale:1.5, ease: Back.easeOut.config(1)}).to(
                '#LogoImage', 1, {rotate: 0, scale: 1, ease: Back.easeOut.config(1)}
            );

            $('#LogoImage').click(function() {
                EventBus.$emit('Page', 1);
                NavIconAnimation.restart();
            });
        }
    }
</script>
<style>
  #TestImage {
    position: absolute;
    bottom: 0%;
    animation: Bigswell 7s  -1.25s infinite;;
  }
  #SplashZone {
    background: radial-gradient(ellipse at center, rgba(255, 254, 234, 1) 0%, rgba(255, 254, 234, 1) 35%, #b7e8eb 100%);
    overflow: hidden;
  }
  .ocean {
    height: 5%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #015871;
  }
  .wave {
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x;
    position: absolute;
    top: -198px;
    width: 6400px;
    height: 198px;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
  }
  .wave:nth-of-type(2) {
    top: -175px;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite, swell 7s ease -1.25s infinite;
    opacity: 1;
  }
  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }
  @keyframes swell {
    0%, 100% {
      transform: translate3d(0, -25px, 0);
    }
    50% {
      transform: translate3d(0, 5px, 0);
    }
  }
  @keyframes Bigswell {
    0%, 100% {
      transform: translate3d(0, -5vw, 0) rotate(0deg);
    }
    25% {
      transform: translate3d(0, -2vw, 0)  rotate(-3deg);
    }
    50% {
      transform: translate3d(0, 1vw, 0) rotate(0deg);
    }
    75% {
      transform: translate3d(0, -2vw, 0)  rotate(3deg);
    }
  }




  #SplashZone {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
  }
  #SplashContent {
    display: block;
    justify-content: center;
    align-content: center;
  }
  #Title {
    position: absolute;
    width: 100vw;
    margin: 0;
    opacity: 0;
    left: 0;
  }
  #LogoImage {
    position: absolute;
    width: 20vw;
    z-index: 3;
    align-self: center;
    margin: 0;
    top: 25%;
    left: 40%
  }
  #LogoImage:hover {
    cursor: pointer;
  }
  #Letter1, #Letter2, #Letter3, .MainLetters  {
    margin-bottom: 2%;
  }
  .MainLetters {
    display: inline-block;
    font-family: 'Inconsolata', monospace;
    font-weight: 300;
    font-size: 6vw;
  }
  #Letter1, #Letter2, #Letter3 {
    display: inline-block;
    font-family: 'Inconsolata', monospace;
    font-weight: 300;
    font-size: 6vw;
    margin-right: 0;
    width: 0;
    opacity: 0;
  }
  #Line {
    background-color: black;
    width: 50%;
    height: 1px;
    display: block;
    align-self: center;
    justify-self: center;
    margin: 0 23% 0 25%;
  }
  #SemiBlurb {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 1.5vw;
  }

</style>