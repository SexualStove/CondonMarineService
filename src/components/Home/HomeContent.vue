<template>
  <div style="height: 3000px; background: linear-gradient(180deg, #015871 0%, #011638 100%); ">
    <div id="Paddin" style="padding-top: 10vw;"></div>

    <div class="ContentHolder" id="WhyUs">
      <img class="HomeThumbnail" src="../../assets/images/WhyUsHome.jpg" alt="None">
      <div class="Words">
        <h1 class="ContentTitle"> Why Us? </h1>
        <div class="ContentLine"></div>
        <h4 class="ContentBlrub">Over 15 years experience in building, repairs, customising and maintaining boats from trailer boats to superyachts.</h4>
      </div>
    </div>


    <div class="ContentHolder" id="WhatWeDo">
      <div class="Words">
        <h1 class="ContentTitle"> What We Do </h1>
        <div class="ContentLine"></div>
        <h4 class="ContentBlrub">Over 15 years experience in building, repairs, customising and maintaining boats from trailer boats to superyachts.</h4>
      </div>
      <img class="HomeThumbnail" src="../../assets/images/Boat.jpg" alt="None">
    </div>

    <div class="ContentHolder" id="Contact">
      <img class="HomeThumbnail" src="../../assets/images/ContactUs.jpg" alt="None">
      <div class="Words">
        <h1 class="ContentTitle"> Grab a quote </h1>
        <div class="ContentLine"></div>
        <h4 class="ContentBlrub">Over 15 years experience in building, repairs, customising and maintaining boats from trailer boats to superyachts.</h4>
      </div>

    </div>

    <div class="ContentHolder" id="Gallery">
      <div class="Words">
        <h1 class="ContentTitle"> Browse Our Work </h1>
        <div class="ContentLine"></div>
        <h4 class="ContentBlrub">Over 15 years experience in building, repairs, customising and maintaining boats from trailer boats to superyachts.</h4>
      </div>
      <img class="HomeThumbnail" src="../../assets/images/Gallery.jpg" alt="None">
    </div>
  </div>
</template>

<script>
  //
    export default {
        name: "HomeContent"
    }
</script>

<style scoped>
#WhyUs {

  margin: 0 10vw 10vw 40vw;
}
#WhatWeDo {
  margin: 20vw 40vw 20vw 10vw;
}
#Contact {
  margin: 20vw 10vw 20vw 40vw;
}
#Gallery {
  margin: 20vw 40vw 20vw 10vw;
}

.HomeThumbnail {
  width: 90%;
  max-width: 13vw;
  height: 90%;
  max-height: 13vw;

  border-radius: 15px 30px;
  margin: 2% 2.5% 0 2.5%;
}

.ContentTitle {
  font-family: 'Inconsolata', monospace;
  font-weight: 300;
  font-size: 2vw;
  margin-bottom: 0;
}
  .ContentBlrub {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 1vw;
  }
  .ContentLine {
    height: 1px;
    width: 70%;
    margin-left: 15%;
    background-color: black;
  }
  .Words {
    justify-self: center;
    align-self: center;
    horiz-align: center;
  }
  .ContentHolder {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 15px 30px;
    box-shadow: inset 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    width: 40vw;
    height: 30vh;
    transition: 1s;
  }
  .ContentHolder:hover {
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
</style>