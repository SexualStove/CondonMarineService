<template>
  <div id="TextArea" style="position: absolute; top: 15%; left: 20%; z-index: 0">
    <div style="transform: translateY(-7vw)">
      <div id="Title"> Across the nation big or small, Be Paid brings professionalism to your door </div>
      <div id="Line"></div>
      <div id="Line2"></div>
    </div>
    <div style="transform: translateY(7vw);">

    <div id="ButtonArea">
      <div id="Button1" style=" z-index: 99; margin-right: 10vw" class="col-md-3 col-sm-3 col-xs-6 button"> <a style="border-radius: 30px" href="#" class="btn btn-sm animated-button thar-two">Ledger management</a> </div>
      <div id="Button2" style=" z-index: 99; " class="col-md-3 col-sm-3 col-xs-6 button"> <a style="border-radius: 30px" href="#" class="btn btn-sm animated-button thar-two">Collections</a> </div>
    </div>
    </div>
  </div>
</template>

<script>
    import {  TimelineMax } from "gsap"
    export default {
        name: "HomeSplashScreen",
        data() {
          return {

          }
        },
        mounted() {

            var LogoStringTimeline = new TimelineMax({});
            LogoStringTimeline.from('#Line', 2, {width: 0}, '+=2').from('#Line2', 2, {width: 0}, '-=1.5').from(
                '#Title', 2, {translateY: '2vw', opacity: 0}).from('#SubTitle', 2, {opacity: 0, translateY: '-2vw'}, '-=1').from(
                '#Button1', 2, {opacity: 0}, '-=2').from('#Button2', 2, {opacity: 0}, '-=2'
            );
        }
    }

</script>

<style scoped>
  #TitleIcon {
    opacity: 0 ;
    width: 40vw;
    position: absolute;
    top: 20%;
    left: 30%;
    z-index: 1;
  }
  #TextArea {
    position: relative;
    width: 60vw;
    height: 30vw;
    text-align: center;
  }
  #Title {
    padding-top: 9.6vw;
    color: white;
    font-family: 'Play', sans-serif;
    font-size: 3.2vw;
    font-weight: 700;
    width: 100%;
    z-index: 99;
    position: absolute;
    text-align: center;
    text-shadow: 1px 1px 0 #e71d36,
    -1px 1px 0 #e71d36,
    1px -1px 0 #e71d36,
    -1px -1px 0 #e71d36,
    0px 1px 0 #e71d36,
    0px -1px 0 #e71d36,
    -1px 0px 0 #e71d36,
    1px 0px 0 #e71d36,
    2px 2px 0 #e71d36,
    -2px 2px 0 #e71d36,
    2px -2px 0 #e71d36,
    -2px -2px 0 #e71d36,
    0px 2px 0 #e71d36,
    0px -2px 0 #e71d36,
    -2px 0px 0 #e71d36,
    2px 0px 0 #e71d36,
    1px 2px 0 #e71d36,
    -1px 2px 0 #e71d36,
    1px -2px 0 #e71d36,
    -1px -2px 0 #e71d36,
    2px 1px 0 #e71d36,
    -2px 1px 0 #e71d36,
    2px -1px 0 #e71d36,
    -2px -1px 0 #e71d36;
  }
  #Line {
    background-color: #e71d36;
    height: 3px;
    margin-top: 13.2vw;
    width: 60vw;
    position: absolute;
  }
  #Line2 {
    background-color: #e71d36;
    height: 3px;
    margin-top: 18vw;
    transform: translateX(3vw);
    width: 54vw;
    position: absolute;
  }
  #SubTitle {
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 2vw;
    font-weight: 400;
    z-index: 99;
    position: absolute;
    padding-top: 15vw;
  }
  #ButtonArea {
    margin-top: 2vw;
  }
  .button, .btn {
    padding: 0.5vw 0.3vw;
  }



  /*
  <div id="Collections" class="Block">
          <img id="Hammer" class="TitleImage" src="../../assets/images/Icons/hammer.png" alt="Missing">
          <div id="CollectionsText" >
            <div class="Title">Collections</div>
            <div class="Line" id="LineA"></div>
            <div class="SubTitle" id="SubTitleA">
              Debt, Eviction, Repossessions, Document Serving, Litigation
            </div>
          </div>
        </div>
        <div id="Investigations" class="Block">
          <img id="Scalpel" class="TitleImage" src="../../assets/images/Icons/scalpel.png" alt="Missing">
          <div id="InvestigationsText">
            <div class="Title">
              <div class="Title">Investigations</div>
              <div class="Line" id="LineB"></div>
            </div>
            <div class="SubTitle" id="SubTitleB">
              Corporate, employment, Private & Domestic, Security Consultants
            </div>
          </div>
        </div>
   */
  @import url(https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css);
  @import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);



  h2 {
    color: #BDC3C7;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  /* Global Button Styles */


  a.animated-button:link, a.animated-button:visited {
    position: relative;
    margin-top: 25vw;
    margin-left: 3vw;
    transform: translateX(6vw);
    display: inline-block;
    color: #fff;
    font-size:1vw;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    overflow: hidden;
    letter-spacing: .08em;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
  }
  a.animated-button.thar-two {
    color: #fff;
    cursor: pointer;
    display: block;
    position: relative;
    border: 2px solid #e71d36;
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    background-color: rgba(231,29,54,1);
    width: 15vw;
  }
  a.animated-button.thar-two:hover {
    color: #000 !important;
    background-color: transparent;
    text-shadow: blue;
  }
  a.animated-button.thar-two:hover:before {
    top: 0%;
    bottom: auto;
    height: 100%;
  }
  a.animated-button.thar-two:before {
    display: block;
    position: absolute;
    left: 0px;
    bottom: 0px;
    height: 0px;
    width: 100%;
    z-index: -1;
    content: '';
    color: #000 !important;
    background: #eF1F3F;
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  }
</style>