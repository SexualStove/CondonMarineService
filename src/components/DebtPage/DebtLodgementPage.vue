<template>
  <div id="Page">
    <meta name="description" content="Debt Lodgement page, for customers to fill out a debt lodgement from so that we can work on getting you, your debt!">
    <div id="Top-Info" class="Contact-Top-Box" style="background-color: black; position: relative; ">

      <h2 class="Contact-Top Top-Text" style="color: white">  0800 2 BE PAID (0800 223 724) </h2>
      <h2 class="Contact-Top Top-Text" style="color: white"> PO Box 447, Rangiora, 7440 </h2>

      <router-link to="/Payment"><b-button class="Contact-Top" id="PortalButton" style="color: white" variant="outline-danger">Pay Now</b-button></router-link>

      <div id="line"></div>
    </div>
    <navbar id="NavArea" style="width: 100vw" v-bind:Animation="false"></navbar>
    <HomePageMobile id="NavMobile" style="position: fixed; z-index: 99999"></HomePageMobile>
    <div id="ContentArea">
      <transition name="fade"  mode="out-in">
        <DebtLodgementForm v-if="AcceptTerms" :key="AcceptTerms"></DebtLodgementForm>
      </transition>
      <transition name="fade"  mode="out-in">
        <DebtLodgementTerms :key="AcceptTerms" v-if="!AcceptTerms"></DebtLodgementTerms>
      </transition>
    </div>
    <a v-if="!AcceptTerms" v-on:click="AcceptTerms = true"  class="btn btn-sm animated-button thar-two submit">Accept</a>
    <a v-else v-on:click="AcceptTerms = false"  class="btn btn-sm animated-button thar-two submit">See Terms</a>
  </div>
</template>

<script>
    import Navbar from "../Global/Navbar";
    import DebtLodgementForm from "./DebtLodgementForm";
    import DebtLodgementTerms from "./DebtLodgementTerms";
    import HomePageMobile from "../Global/HomePageMobile";
    export default {
        name: "DebtLodgementPage",
        components: {HomePageMobile, DebtLodgementTerms, DebtLodgementForm, Navbar},
        data() {
            return{
              AcceptTerms: false
            }
        }
    }
</script>

<style scoped>
  #ContentArea {
    padding: 10vw 10vw 0 10vw;
  }
  #Page {
    background-image: url("../../assets/images/Patterns/dot-grid-white.png");
    background-size: 15%;
    overflow: hidden;
    //min-height: 100vh;
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








  a.animated-button:link, a.animated-button:visited {
    //border-radius: 30px;
    position: relative;
    transform: translateX(8vw);
    display: inline-block;
    color: black;
    font-size:1vw;

  //font-weight: bold;
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
    color: black;
    cursor: pointer;
    display: block;
    position: relative;
    border: 2px solid #86CB92;
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    //border-radius: 30px
  }
  a.animated-button.thar-two:hover {
    color: #000 !important;
    background-color: transparent;
    //border-radius: 30px;
  }
  a.animated-button.thar-two:hover:before {
    top: 0%;
    bottom: auto;
    height: 100%;
    //border-radius: 30px;
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
    color: #000;
    background: #86CB92;
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    //border-radius: 30px;
  }
  .submit {
      width: 10vw;
      margin: 3vw auto;
      transform: translateX(0);
      font-size: 1.4vw;
  }





  .fade-leave-active,
  .fade-enter-active {
    transition: 1s;
  }
  .fade-enter {
    opacity: 0;
    //transform: translate(100%, 0) scale(1.2);
  }
  .fade-leave-to {
    opacity: 0;
    ///transform: translate(-100%, 0) scale(0.8);
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
    .submit {
      font-size: 2rem;
      width: initial;
    }
  }
</style>