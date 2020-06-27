<template>
  <div id="SplashArea">
    <div id="Top-Info" class="Contact-Top-Box" style="background-color: black; position: relative; ">

      <h2 class="Contact-Top Top-Text" style="color: white">  0800 2 BE PAID (0800 223 724) </h2>
      <h2 class="Contact-Top Top-Text" style="color: white"> PO Box 447, Rangiora, 7440 </h2>

      <router-link to="/Payment"><b-button class="Contact-Top" id="PortalButton" style="color: white" variant="outline-danger">Pay Now</b-button></router-link>

      <div id="line"></div>
    </div>
    <navbar id="NavArea" style="width: 100vw" v-bind:Animation="false"></navbar>
    <home-page-mobile id="NavMobile" style="z-index: 99999"></home-page-mobile>
    <div id="Title"> Services </div>
    <ServiceIcons></ServiceIcons>
  </div>
</template>

<script>
    import Navbar from "../Global/Navbar";
    import ServiceIcons from "./ServiceIcons";
    import HomePageMobile from "../Global/HomePageMobile";
    export default {
        name: "ServiceSplashPage",
        components: {HomePageMobile, ServiceIcons, Navbar},

        data() {
            return {
                NoAnimation: false,
            }
        }
    }
</script>

<style scoped>

#SplashArea {
  height: 100vh;
  width: 100%;
  background-image: url("../../assets/images/BePaidOrginal/ServicesBackground.png");
  background-size: cover;
}
  #Title {
    color: black;
    font-family: 'Play', sans-serif;
    font-size: 6.7vw;
    font-weight: 700;
    position: absolute;
    top: 30%;
    width: 100%;
    overflow: hidden;
    text-align: center;
    text-shadow: rgba(29,47,111, 0.5) -2px 2px;
  }

#PortalButton {
  font-size: 1vw; padding: 0.5%;  ;

}
.Contact-Top {
  display: inline-block;
  font-size: 1vw;
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

@media screen and (min-width: 1000px) {
  #NavMobile {
    display: none;
  }
}
@media screen and (max-width: 1000px) {

  #NavArea {
    display: none;
  }

  #Top-Info {
    display: none;
  }

  #Title {
    top: 20%;
    font-size: 300%;
  }
}
</style>