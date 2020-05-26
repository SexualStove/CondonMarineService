<template>
  <div>
    <div id="Top-Info" class="Contact-Top-Box" style="background-color: black; position: relative">

      <h2 class="Contact-Top Top-Text">  0800 223 724 </h2>
      <h2 class="Contact-Top Top-Text"> P O Box 7004, Mornington Dunedin </h2>

      <b-button class="Contact-Top" id="PortalButton" style="" variant="outline-danger">Pay Now</b-button>

      <div id="line"></div>
    </div>
    <div id="Splash">
      <Navbar id="NavArea"></Navbar>
     <HomeSplashScreen style="z-index: -1"></HomeSplashScreen>
      <div class="Divider">
        <div class="LineDivider"></div>
        <div class="DiamondHolder">
          <div class="diamond-shield"></div>
        </div>
        <div class="DiamondHolderW">
          <div class="diamond-shieldW"></div>
        </div>
      </div>
    </div>

    <HomePageTitle style="z-index: 1"></HomePageTitle>

        <IconStrip></IconStrip>
        <HomeAbout style="box-shadow: inset 0 8px 6px -6px  rgba(0,0,0,0.2);"></HomeAbout >
        <HomeRecomendations style="box-shadow:  0 0 10px  rgba(0,0,0,0.2); z-index: 3"></HomeRecomendations>
        <HomeContact style="box-shadow: inset 0 8px 6px -6px  rgba(0,0,0,0.2); z-index: 1;"></HomeContact>
    <div style="position: relative">
        <div class="Divider">
          <div class="LineDivider"></div>
          <div id="Diamonds" style="transform: translateY(0.2vw) scaleY(-1)">
            <div class="DiamondHolder">
              <div class="diamond-shield"></div>
            </div>
            <div class="DiamondHolderW">
              <div class="diamond-shieldW"></div>
            </div>
          </div>
        </div>
    </div>
        <HomeFooter></HomeFooter>


  </div>

</template>

<script>
    import {  TimelineMax } from "gsap"
    import HomeSplashScreen from "./HomeSplashScreen";
    import Navbar from "../Global/Navbar";
    import IconStrip from "./IconStrip";
    import HomePageTitle from "./HomePageTitle";
    import HomeAbout from "./HomeAbout";
    import HomeRecomendations from "./HomeRecomendations";
    import HomeContact from "./HomeContact";
    import HomeFooter from "./HomeFooter";
    export default {
        name: "HomePage",
        components: {
            HomeFooter,
            HomeContact,
            HomeRecomendations, HomeAbout, HomePageTitle, IconStrip, Navbar, HomeSplashScreen},
        data() {

        },
        mounted() {
            var LogoStringTimeline = new TimelineMax({});
            LogoStringTimeline.from('#Top-Info', 4, {opacity: 0}, '+=2'
            );
        }
    }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Play:wght@400;700&family=Roboto&display=swap');
  #PlaceHolder {
    background-image: url("../../assets/images/Patterns/dot-grid-white.png");
    height: 100vh;
    background-size: 15%;
  }
  #NavArea {
    position: absolute;
  }
  #Splash {
    position: relative;
  }
  #PortalButton {
    font-size: 1vw; padding: 0.5%;  ;

  }
  .Contact-Top {
    display: inline-block;
    font-size: 1vw;
    color: whitesmoke;
    padding-right: 3vw;

    font-family: 'Play', sans-serif;
    //font-family: 'Roboto', sans-serif;
  }

  #line {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40vw;
    height: 1px;
    background-color: #e71d36;
  }
  #Top-Info {
    padding: 0.5vw;
    text-align: right;
    justify-items: right;
    background-color: black;
    position: relative;
    font-family: 'Play', sans-serif;
    //font-family: 'Roboto', sans-serif;
  }
  .Top-Text {
    transform: translateY(0.5vw);
  }

  .Divider {
    position: absolute;
    bottom: 0;
    width: 100vw;
    z-index: 100;
  }
  .LineDivider {
    position: absolute;
    background-color: #1d2f6f;
    width: 100%;
    height: 1vh;
  }

  .DiamondHolderW, .DiamondHolder {
    left: 47.4%;
  }

  .DiamondHolder {
    position: absolute;

    transform: translateY(-2vh);
  }


  .diamond-shield {
    width: 0;
    height: 0;
    border: 2vw solid transparent;
    border-bottom: 0.9vw solid #1d2f6f;
    position: relative;
    top: -2vw;
  }
  .diamond-shield:after {
    content: '';
    position: absolute;
    left: -2vw;
    top: 0.85vw;
    width: 0;
    height: 0;
    border: 2vw solid transparent;
    border-top: 2.9vw solid #1d2f6f;
  }

  .diamond-shieldW {
    width: 0;
    height: 0;
    border: 1.5vw solid transparent;
    border-bottom: 0.5vw solid whitesmoke;
    position: relative;
    top: -1.5vw;
  }
  .diamond-shieldW:after {
    content: '';
    position: absolute;
    left: -1.5vw;
    top: 0.48vw;
    width: 0;
    height: 0;
    border: 1.5vw solid transparent;
    border-top: 2.4vw solid whitesmoke;
  }

  .Diamond {
    border-style: solid;
    border-color: transparent transparent #1d2f6f transparent;
    border-width: 0 1vw 1vw 1vw;
    height: 0;
    width: 2vw;
    box-sizing: content-box;
    position: relative;
    margin: 0.8vw 0 2vw 0;
  }
  #Diamond:after {
    content: "";
    position: absolute;
    top: 1vw;
    left: -1vw;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: #1d2f6f transparent transparent transparent;
    border-width: 2.8vw 2vw 0 2vw;
  }

  .DiamondHolderW {
    position: absolute;
    transform: translate(0.5vw, -1vh) scale(0.9);
  }
  #DiamondW {
    border-style: solid;
    border-color: transparent transparent whitesmoke transparent;
    border-width: 0 1vw 1vw 1vw;
    height: 0;
    width: 2vw;
    box-sizing: content-box;
    position: relative;
    margin: 0.8vw 0 2vw 0;
  }
  #DiamondW:after {
    content: "";
    position: absolute;
    top: 1vw;
    left: -1vw;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: whitesmoke transparent transparent transparent;
    border-width: 2.8vw 2vw 0 2vw;
  }

</style>