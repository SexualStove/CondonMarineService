<template>
  <div id="NavArea">
    <div id="Logo">
      <img id="LogoImage" style="" src="../../assets/images/BePaidOrginal/BePaidLogo.png" alt="None">
    </div>
    <div class="NavItem" id="Services">
      Services
      <div  class="Line"></div>
    </div>
    <div class="NavItem" id="About">
      About Us
      <div class="Line"></div>
    </div>
    <div class="NavItem" id="Contact">
      Contact
      <div class="Line"></div>
    </div>
  </div>
</template>

<script>
    import {  TimelineMax } from "gsap"
    export default {
        name: "Navbar",
        data() {

        },
        mounted() {
            var LogoStringTimeline = new TimelineMax({});
            LogoStringTimeline.from('#NavArea', 4, {opacity: 0}, '+=3.5'
            );
           /* var LogoStringTimeline = new TimelineMax({});
            LogoStringTimeline.from('#Logo', 4, {opacity: 0}, '+=2').from('#Services', 4, {opacity: 0}, '-=4').from(
                '#About', 4, {opacity: 0}, '-=4').from('#Contact', 4, {opacity: 0}, '-=4'
            );*/
        }
    }
</script>

<style scoped>
 #NavArea {
   grid-template-areas: "Logo LogoPad Services About Contact";
   grid-template-columns: 15% 49% 12% 12% 12% ;
   color: white;
   font-family: 'Play', sans-serif;
   align-items: center;
   justify-items: center;
   width: 99vw;
   display: grid;
   background: linear-gradient(to top, transparent 0%, black 100%);
   font-size: 1.5vw;
 }
  #Logo {
    justify-items: center;
    grid-area: Logo;
    transform: translate(2vw, -2.7vw) scale(1.7);
  }
  #LogoImage {
    padding-top: 1vw;
    width: 7vw;
  }
  #LogoImage:hover {
    cursor: pointer;
  }
  #About {
    grid-area: About;
  }
  #Services {
    grid-area: Services;
  }

  #Contact {
    grid-area: Contact;
  }
  .NavItem {
    transition: 0.7s;
  }
  .NavItem:hover {
    cursor: pointer;
    color: #e71d36;
  }
  .Line {
    background-color: #e71d36;
    height: initial;
    width: initial;
    transition: 0.7s;
    transform: translateY(-0.7vh);
  }
  .NavItem:hover .Line {
    height: 2px;
    width: 90%;
  }
</style>
