<template>
  <div>
    <ServiceSplashPage></ServiceSplashPage>
    <div v-if="ServiceAreaOn < -99" class="Divider">
      <div class="LineDivider"></div>
      <div class="DiamondHolder">
        <div class="diamond-shield"></div>
      </div>
      <div class="DiamondHolderW">
        <div class="diamond-shieldW"></div>
      </div>
    </div>


  </div>
</template>

<script>
    import JQuery from 'jquery';
    let $ = JQuery;
    import {EventBus} from "../../App";
    import ServiceSplashPage from "./ServiceSplashPage";

    export default {
        name: "ServicePage",
        components: {ServiceSplashPage},
        data() {
            return {
                ServiceAreaOn: -1,
                Load: 0,
            }
        },
        beforeMount() {
            this.ServiceAreaOn = this.$cookie.get('Service');
        },
        methods: {
        },
        mounted() {
            let self = this;
            EventBus.$on('Service', changed => {
                self.ServiceAreaOn = changed;
                $('html, body').animate({
                    scrollTop: $('#PageArea').offset().top
                }, 2000);
            });
        }
    }
</script>

<style scoped>
  .Divider {
    position: absolute;
    bottom: 0;
    width: 100vw;
    z-index: 100;
    transform: translateY(-0.4vh);
  }
  .LineDivider {
    position: absolute;
    background-color: #1d2f6f;
    width: 100%;
    height: 1vh;
    transform: translateY(-0.5vh);
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