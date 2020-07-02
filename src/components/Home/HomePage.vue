<template>
  <div>

    <meta name="description" content="Home page for be paid new zealand site, showing what we do, why we do it and how to contact us!">
    <div id="FadeArea">
    <div id="Top-Info" class="Contact-Top-Box" style="background-color: black; position: relative; ">

      <h2 class="Contact-Top Top-Text" style="color: white">  0800 223 724 </h2>
      <h2 class="Contact-Top Top-Text" style="color: white"> PO Box 447, Rangiora, 7440 </h2>

      <router-link to="/Payment"><b-button class="Contact-Top" id="PortalButton" style="color: white" variant="outline-danger">Pay Now</b-button></router-link>

      <div id="line"></div>
    </div>
      <HomePageMobile id="NavMobile" style="position: fixed; z-index: 99999"></HomePageMobile>

      <Navbar id="NavArea" style="z-index: 4" v-bind:Animation="true"></Navbar>
      <HomePageTitle style="z-index: 1"></HomePageTitle>
    </div>
     <HomeSplashScreen style="z-index: -1; position: relative"></HomeSplashScreen>

      <div class="Divider">
        <div class="LineDivider"></div>
        <div class="DiamondHolder">
          <div class="diamond-shield"></div>
        </div>
        <div class="DiamondHolderW">
          <div class="diamond-shieldW"></div>
        </div>
      </div>




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
        <HomeFooter ></HomeFooter>


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
    import JQuery from 'jquery';
    import HomePageMobile from "../Global/HomePageMobile";
    let $ = JQuery;
    export default {
        name: "HomePage",
        components: {
            HomePageMobile,
            HomeFooter,
            HomeContact,
            HomeRecomendations, HomeAbout, HomePageTitle, IconStrip, Navbar, HomeSplashScreen},
        data() {
          return {
            AnimateNav: true,
          }
        },
        mounted() {
            if(window.innerWidth > 800){
                var LogoStringTimeline = new TimelineMax({});
                LogoStringTimeline.from('#FadeArea', 2, {opacity: 0}, '+=1');
            }


            function offsetAnchor() {
                if (location.hash.length !== 0) {
                    window.scrollTo(window.scrollX, window.scrollY - 300);
                }
            }

            // Captures click events of all a elements with href starting with #
            $(document).on('click', 'a[href^="#"]', function() {
                window.setTimeout(function() {
                    offsetAnchor();
                }, 0);
            });


        }
    }
</script>

<style scoped>

  #NavArea {
    position: absolute;
  }
  #PortalButton {
    font-size: 1vw; padding: 0.5%;  ;

  }
  .Contact-Top {
    display: inline-block;
    font-size: 1.4vw;
    color: whitesmoke;
    padding-right: 1.5vw;
    padding-left: 1.5vw;

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
    bottom: 6%;
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

  .DiamondHolderW {
    position: absolute;
    transform: translate(0.5vw, -1vh) scale(0.9);
  }
  @media screen and (min-width: 1000px) {
    #NavMobile {
     display: none;
    }
  }
  @media screen and (max-width: 1000px) {
    .DiamondHolderW {
      display: none;
    }
    .DiamondHolder {
      display: none;
    }
    #NavArea {
      display: none;
    }
    #Top-Info {
      display: none;
    }
    .LineDivider {
      display: none;
    }
  }
</style>