<template>
    <div id="TextArea" style="position: absolute;  z-index: 0">
    <div style="transform: translateY(-9vw)">
      <div id="MainTitle"> Across the nation big or small, Be Paid brings professionalism to your door </div>
      <div class="Line" id="Line"></div>
      <div class="Line" id="Line2"></div>
    </div>
    <div style="transform: translateY(8vh);">

    <div id="ButtonArea">

      <div id="Button1" v-on:mousedown="ServiceClick2(0)" style=" z-index: 99;" class="col-md-3 col-sm-3 col-xs-6 button">
        <router-link style="text-decoration: none; color: white" to="/Services/ServiceArea">
        <a style="border-radius: 30px" href="#" class="btn btn-sm animated-button thar-two">
        Ledger management
      </a> </router-link> </div>

      <div v-on:mousedown="ServiceClick2(1)" id="Button2" style=" z-index: 99; " class="col-md-3 col-sm-3 col-xs-6 button">
        <router-link to="/Services/ServiceArea" style="border-radius: 30px; text-decoration: none; color: white" class="btn btn-sm animated-button thar-two">
        Collections
       </router-link> </div>

    </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HomePageTitle",
        data() {
            return {

            }
        },
        mounted() {
        },
        methods: {
            ServiceClick2(Int) {
                this.$cookie.set('Service', Int, { expires: '10m' });
            },

        },
    }

</script>

<style scoped>
  #TextArea {
    position: relative;
    width: 60vw;
    height: 30vw;
    text-align: center;
    top: 15%; left: 20%;
  }
  #MainTitle {
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
  #ButtonArea {
    margin-top: 2vw;
    display: grid;
    grid-template-columns: 50% 50%;
  }
  .button, .btn {
    padding: 0.5vw 0.3vw;
  }



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
  @media screen and (max-width: 1000px) {
    #TextArea {
      position: relative;
      width: 90%;
      height: 30vw;
      text-align: center;
      top: 15%; left: 5%;
    }
    #MainTitle {
      padding-top: 9.6vw;
      color: white;
      font-family: 'Play', sans-serif;
      font-size: 150%;
      font-weight: 700;
      width: 100%;

    }
    #ButtonArea {
      transform: translate(-5%, 1400%);
      display: None;
    }
    .Line {
      display: none;
    }
    a.animated-button:link, a.animated-button:visited {
      position: relative;
      width: 100%;
      align-self: center;
      justify-items: center;
      transform: translateX(6vw);
      display: inline-block;
      color: #fff;
      margin: initial;
      font-size:100%;
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
  }
</style>