<template>
  <div style=" background: linear-gradient(180deg, #015871 0%, #011638 100%); ">

    <div id="Paddin" style="padding-top: 10vw;"></div>



    <div class="ContentHolder" id="WhatWeDo">
      <div class="Words" id="2Right">
        <div class="animated-arrow">
          <span class="the-arrow -left">
            <span class="shaft"></span>
          </span>
          <h1 class="ContentTitle"> What We Do </h1>
        </div>

        <div class="ContentLine"></div>
        <h4 class="ContentBlrub">Over 15 years experience in building, repairs, customising and <br> maintaining boats from trailer boats to superyachts.</h4>
      </div>
      <div class="ImageHolder" style="margin: 2% 2.5% 0 15%;" id="2Left">
        <img class="HomeThumbnail" src="../../assets/images/Boat.jpg" alt="None">
      </div>
    </div>

    <div class="ContentHolder" id="Contact">
      <div class="ImageHolder" style="margin: 2% 15% 0 2.5%;" id="3Right">
        <img class="HomeThumbnail" src="../../assets/images/ContactUs.jpg" alt="None">
      </div>
      <div class="Words" id="3Left">
        <div class="animated-arrow">
          <span class="the-arrow -left">
            <span class="shaft"></span>
          </span>
          <h1 class="ContentTitle"> Grab a quote </h1>
        </div>
        <div class="ContentLine"></div>
        <h4 class="ContentBlrub">Over 15 years experience in building, repairs, customising and <br> maintaining boats from trailer boats to superyachts.</h4>
      </div>

    </div>

    <div class="ContentHolder" id="Gallery">
      <div class="Words" id="4Right">
        <div class="animated-arrow">
          <span class="the-arrow -left">
            <span class="shaft"></span>
          </span>
          <h1 class="ContentTitle" style="font-size: 4.3vw"> Browse Our Work </h1>
        </div>

        <div class="ContentLine"></div>
        <h4 class="ContentBlrub">Over 15 years experience in building, repairs, customising and <br> maintaining boats from trailer boats to superyachts.</h4>
      </div>
      <div class="ImageHolder" style="margin: 2% 2.5% 0 15%;" id="4Left">
        <img class="HomeThumbnail" src="../../assets/images/Gallery.jpg" alt="None">
      </div>
    </div>
  </div>
</template>

<script>
  //box-shadow: inset 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  import {  TimelineMax, Back } from "gsap"
  export default {

      data() {
          return {
              AboutUsContent: false,
          }
      },
      methods: {

      },

      computed: {

      },
      mounted() {
          //let self = this;
          //let Right1 = document.getElementById("1Right");
          let Right2 = document.getElementById("2Right");
          let Right3 = document.getElementById("3Right");
          let Right4 = document.getElementById("4Right");
          //let Left1 = document.getElementById("1Left");
          let Left2 = document.getElementById("2Left");
          let Left3 = document.getElementById("3Left");
          let Left4 = document.getElementById("4Left");
          //let TimeLineOne = new TimelineMax({paused: true});
          let TimeLineTwo = new TimelineMax({paused: true});
          let TimeLineThree = new TimelineMax({paused: true});
          let TimeLineFour = new TimelineMax({paused: true});
          /*TimeLineOne
              .from(Right1, 0.3, {opacity: 0, x: -2000, ease: Back.easeOut.config(0.2)}).from(
              Left1, 0.3, {opacity: 0, x: 2000, ease: Back.easeOut.config(0.2)}, "+=0.5"
          );*/
          TimeLineTwo
              .from(Right2, 0.3, {opacity: 0, x: -2000, ease: Back.easeOut.config(0.2)}).from(
              Left2, 0.3, {opacity: 0, x: 2000, ease: Back.easeOut.config(0.2)}, "-=1"
          );
          TimeLineThree
              .from(Right3, 0.3, {opacity: 0, x: -2000, ease: Back.easeOut.config(0.2)}).from(
              Left3, 0.3, {opacity: 0, x: 2000, ease: Back.easeOut.config(0.2)}, "+=0.5"
          );
          TimeLineFour
              .from(Right4, 0.3, {opacity: 0, x: -2000, ease: Back.easeOut.config(0.2)}).from(
              Left4, 0.3, {opacity: 0, x: 2000, ease: Back.easeOut.config(0.2)}, "-=1"
          );
          /*var body = document.body,
              html = document.documentElement;

          var height = Math.max( body.scrollHeight, body.offsetHeight,
              html.clientHeight, html.scrollHeight, html.offsetHeight );*/
          var bodyRect = document.body.getBoundingClientRect();
          var BodySize = (bodyRect.top );
          this.$nextTick(function(){
              window.addEventListener("scroll", function() {
                  console.log("-----------------------------");
                  console.log(BodySize);
                  console.log(document.documentElement.scrollTop);
                  console.log(document.documentElement.clientHeight);
                  console.log(window.innerHeight);
                  console.log(Right3.getBoundingClientRect().top- bodyRect.top);
                  console.log(Right4.getBoundingClientRect().top- bodyRect.top);
                  /*if (Right1.getBoundingClientRect().top+200 <= (window.innerHeight || document.documentElement.clientHeight)) {
                      TimeLineOne.paused(false);
                      console.log("1")
                  }*/
                  if (Right2.getBoundingClientRect().top+200 <= (window.innerHeight || document.documentElement.clientHeight)) {
                      TimeLineTwo.paused(false);
                      console.log("2");
                  }
                  if (Right3.getBoundingClientRect().top+200 <= (window.innerHeight || document.documentElement.clientHeight)) {
                      TimeLineThree.paused(false);
                      console.log("3");
                  }
                  if (Right4.getBoundingClientRect().top+200 <= (window.innerHeight || document.documentElement.clientHeight)) {
                      TimeLineFour.paused(false);
                      console.log("4");
                  }
              })
          });
      }
  }
</script>

<style scoped>
#WhyUs {

  padding: 0 5vw 5vw 20vw;
}
#WhatWeDo {
  padding: 0vw 15vw 5vw 15vw;
}
#Contact {
  padding: 10vw 15vw 5vw 15vw;
}
#Gallery {
  padding: 10vw 15vw 20vw 15vw;
}

.HomeThumbnail {
  width: 100%;
  max-width: 20vw;
  height: 100%;
  max-height: 20vw;
  border-radius: 15px 30px;
  margin-top: 6%;
  justify-self: center;
  align-self: center;
  horiz-align: center;
}

.ContentTitle {
  font-family: 'Inconsolata', monospace;
  font-weight: 300;
  font-size: 5vw;
  margin-bottom: 0;
}
  .ContentBlrub {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 1vw;
  }
  .ContentLine {
    height: 2px;
    width: 100%;
    margin-top: 1%;
    background-color: white;
  }
  .Words {
    width: 55vw;
    justify-self: center;
    align-self: center;
    horiz-align: center;

  }
  .ImageHolder {
    box-shadow: inset 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    max-width: 100%;
    width: 35vw;
    height: 22.5vw;
    border-radius: 15px 30px;

    justify-content: center;
    align-content: center;
    horiz-align: center;
  }
  .ContentHolder {
    border-radius: 15px 30px;
    vertical-align: top;
    display: flex;
    height: 22.5vw;
    transition: 1s;
    color: white;
  }
  .ImageHolder {
    transition: 1s;
  }
  .ImageHolder:hover {
    box-shadow:
      inset 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19),
      inset 0 0 60px whitesmoke,
      inset 20px 0 80px #f0f,
      inset -20px 0 80px #0ff,
      inset 20px 0 300px #f0f,
      inset -20px 0 300px #0ff,
      0 0 50px #fff,
      -10px 0 80px #f0f,
      10px 0 80px #0ff;
  }






.the-arrow {
  width: 0.5vw;
  transition: all 0.2s;
}
.the-arrow.-left {
  position: absolute;
  top: 70%;
  left: 0;
}
.the-arrow.-left > .shaft {
  width: 0;
  background-color: #4c4c4c;
}
.the-arrow.-left > .shaft:before, .the-arrow.-left > .shaft:after {
  width: 0;
  background-color: #4c4c4c;
}
.the-arrow.-left > .shaft:before {
  transform: rotate(0);
}
.the-arrow.-left > .shaft:after {
  transform: rotate(0);
}
.the-arrow > .shaft {
  background-color: #4c4c4c;
  display: block;
  height: 0.3vh;
  position: relative;
  transition: all 0.2s;
  transition-delay: 0s;
  will-change: transform;
}
.the-arrow > .shaft:before, .the-arrow > .shaft:after {
  background-color: #4c4c4c;
  content: '';
  display: block;
  height: 0.3vh;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  transition: all 0.2s;
  transition-delay: 0s;
}
.the-arrow > .shaft:before {
  transform-origin: top right;
}
.the-arrow > .shaft:after {
  transform-origin: bottom right;
}

.animated-arrow {
  display: inline-block;
  color: white;
  font-style: italic;
  text-decoration: none;
  position: relative;
  transition: all 0.2s;
}
.animated-arrow:hover {
  color: whitesmoke;
  cursor: pointer;
}
.animated-arrow:hover > .the-arrow.-left > .shaft {
  width: 4vw;
  transition-delay: 0.1s;
  background-color: white;
}
.animated-arrow:hover > .the-arrow.-left > .shaft:before, .animated-arrow:hover > .the-arrow.-left > .shaft:after {
  width: 0.7vw;
  transition-delay: 0.1s;
  background-color: white;
}
.animated-arrow:hover > .the-arrow.-left > .shaft:before {
  transform: rotate(40deg);
}
.animated-arrow:hover > .the-arrow.-left > .shaft:after {
  transform: rotate(-40deg);
}
.animated-arrow:hover > .ContentTitle{
  transform: translateX(5vw);
}
.animated-arrow:hover > .main > .the-arrow.-right > .shaft {
  width: 0;
  transform: translateX(200%);
  transition-delay: 0s;
}
.animated-arrow:hover > .main > .the-arrow.-right > .shaft:before, .animated-arrow:hover > .main > .the-arrow.-right > .shaft:after {
  width: 0;
  transition-delay: 0s;
  transition: all 0.1s;
}
.animated-arrow:hover > .main > .the-arrow.-right > .shaft:before {
  transform: rotate(0);
}
.animated-arrow:hover > .main > .the-arrow.-right > .shaft:after {
  transform: rotate(0);
}
.animated-arrow > .ContentTitle {
  display: flex;
  align-items: center;
  transition: all 0.2s;
}
.animated-arrow > .main > .the-arrow {
  position: relative;
}

</style>