<template>
  <div id="Selector">
    <div id="Title"> <router-link to="/Services"> Services </router-link> </div>
    <div class="SubTitle" v-on:click="ChangeService(1)">   Debt Collection  </div>
    <div class="SubTitle" v-on:click="ChangeService(0)"> Ledger Management  </div>
    <div class="SubTitle" v-on:click="ChangeService(2)">Credit Checking  </div>
    <div class="SubTitle" v-on:click="ChangeService(3)">Invoice | Billing  </div>
    <div class="SubTitle" v-on:click="ChangeService(4)"> Credit Controls  </div>
    <div class="SubTitle" v-on:click="ChangeService(5)">  Credit application forms and Terms of Trade  </div>
    <div class="SubTitle" v-on:click="ChangeService(6)"> P P S R  </div>
    <div class="SubTitle" v-on:click="ChangeService(7)"> Full Customer/Debtor Management</div>
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
            async ChangeService(Int)
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

}
  #Title {
    font-size: 2vw;
  }
  .SubTitle {
    margin-left: 2vw;
    margin-top: 2vh;
    margin-bottom: 2vh;
    font-size: 1.4vw;
    color: black;
    cursor: pointer;
  }
</style>