<template>
  <div id="Selector">
    <div > <router-link id="Title" to="/Services"> Services </router-link> </div>
    <div class="SubTitle" v-on:click="ChangeService(1)"> Debt Collection <div class="Line"></div>  </div>
    <div class="SubTitle" v-on:click="ChangeService(0)"> Ledger Management <div class="Line"></div> </div>
    <div class="SubTitle" v-on:click="ChangeService(2)">Credit Checking <div class="Line"></div> </div>
    <div class="SubTitle" v-on:click="ChangeService(3)">Invoice | Billing <div class="Line"></div> </div>
    <div class="SubTitle" v-on:click="ChangeService(4)"> Credit Controls <div class="Line"></div> </div>
    <div class="SubTitle" v-on:click="ChangeService(5)">  Credit application forms and Terms of Trade <div class="Line"></div> </div>
    <div class="SubTitle" v-on:click="ChangeService(6)"> P P S R <div class="Line"></div> </div>
    <div class="SubTitle" v-on:click="ChangeService(7)"> Full Customer/Debtor Management <div class="Line"></div></div>
    <div class="SubTitle" v-on:click="ChangeService(8)"> Family/Marriage <div class="Line"></div> </div>
    <div class="SubTitle" v-on:click="ChangeService(9)"> Background checks <div class="Line"></div> </div>
    <div class="SubTitle" v-on:click="ChangeService(10)"> Investigations <div class="Line"></div></div>
    <div class="SubTitle" v-on:click="ChangeService(11)"> Document Serving<div class="Line"></div> </div>
  </div>
</template>

<script>
    import {EventBus} from "../../App";
    export default {
        name: "ServiceSelector",
        data() {
            return {
              Int: 0,
            }
        },
        methods: {

            ChangeService(Int)
            {
                this.$cookie.set('Service', Int, {expires: '10m'});
                this.Int = Int;
                EventBus.$emit('Service', Int);
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>
#Selector {
  box-shadow: 0px 10px 5px black, 0px -10px 5px black;
}
  #Title {
    text-decoration: none;
    margin-top: 5vh;
    font-size: 2vw;
    color: black;
    font-weight: 700;
    font-family: 'Play', sans-serif;
    transition: 1s;
  }
  #Title:hover {
    color: #1d2f6f;
    font-size: 2.2vw;
  }
  .SubTitle {
    font-family: 'Play', sans-serif;
    margin-left: 2vw;
    margin-top: 2vh;
    margin-bottom: 2vh;
    font-size: 1.4vw;
    color: black;
    cursor: pointer;
    transition: 1s;
    width: fit-content;
    position: relative;
  }
  .SubTitle:hover {
    color: #eF1F3F;
  }
  .Line {
    background-color: #eF1F3F;
    width: 0%;
    height: 1px;
    transition: 1s;
    transform: translateY(-0.5vh);
  }
  .SubTitle:hover .Line {
    width: 100%;
  }
</style>