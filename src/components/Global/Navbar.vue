<template>
  <div id="NavArea">
    <div id="Logo">
      <router-link to="/">
        <img id="LogoImage" style="transform: translateX(-1vw)" src="../../assets/images/BePaidOrginal/LogoFull.png" alt="None">
      </router-link>
    </div>
    <div id="LogoPad">
      With Offices now in Invercargill, Dunedin and Christchurch. <br>
      And agents from every island in NZ to every territory in Australia
    </div>

      <div class="NavItem" id="Services">
        <router-link class="Link" to="/Services">
        Services
        <div  class="Line"></div>
        </router-link>
      </div>

    <div class="NavItem" id="About">
      <router-link class="Link" to="/DebtLodgement">
      Debt Lodgement
      <div class="Line"></div>
      </router-link>
    </div>
    <div v-if="Animation" style="grid-area: Contact" v-on:mousedown="ScrollDown()" class="NavItem" id="Contact">
      Contact
      <div class="Line"></div>
    </div>
    <div v-else style="grid-area: Contact"  class="NavItem">
      <router-link class="Link" to="/#ContactUs">
      Contact
      <div class="Line"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
    import JQuery from 'jquery';
    let $ = JQuery;
    import {  TimelineMax } from "gsap"
    export default {
        name: "Navbar",
        props: {
            title: String,
            likes: Number,
            Animation: Boolean,
            commentIds: Array,
            author: Object,
            callback: Function,
            contactsPromise: Promise // or any other constructor
        },

        data() {
          return {

          }
        },
        methods: {
           ScrollDown() {

                  $('html, body').animate({
                      scrollTop: $('#ContactUs').offset().top
                  }, 2000);

            }
        },
        mounted() {
            if(this.Animation === true) {
                var LogoStringTimeline = new TimelineMax({});
                LogoStringTimeline.from('#NavArea', 4, {opacity: 0}, '+=3.5'
                );
            } else {
                console.log('Did not trigger');
                console.log(Animation);
            }

           /* var LogoStringTimeline = new TimelineMax({});
            LogoStringTimeline.from('#Logo', 4, {opacity: 0}, '+=2').from('#Services', 4, {opacity: 0}, '-=4').from(
                '#About', 4, {opacity: 0}, '-=4').from('#Contact', 4, {opacity: 0}, '-=4'
            );*/
        }
    }
</script>

<style scoped>
  router-link:hover {

  }
  .Link {
    text-decoration:none; color: white;
    transition: 1s;
  }
  .Link:hover {
    color: #e71d36;
  }
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
 #LogoPad {
   justify-items: center;
   grid-area: LogoPad;
   font-size: 1vw;
   text-align: center;
   transform: translateY(-5vh);
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
