<template>
  <div id="Selector">
    <div id="Title"> <router-link to="/Services"> Services </router-link> </div>
    <div class="SubTitle" v-on:mousedown="ChangeService(1)"> <a href="/Services/ServiceArea">  Debt Collection </a> </div>
    <div class="SubTitle" v-on:mousedown="ChangeService(0)"> <a href="/Services/ServiceArea">  Ledger Management </a> </div>
    <div class="SubTitle" v-on:mousedown="ChangeService(2)"> <a href="/Services/ServiceArea">  Credit Checking </a> </div>
    <div class="SubTitle" v-on:mousedown="ChangeService(3)"> <a href="/Services/ServiceArea">   Invoice | Billing </a>> </div>
    <div class="SubTitle" v-on:mousedown="ChangeService(4)"> <a href="/Services/ServiceArea">   Credit Controls </a> </div>
    <div class="SubTitle" v-on:mousedown="ChangeService(5)"> <a href="/Services/ServiceArea">   Credit application forms and Terms of Trade </a> </div>
    <div class="SubTitle" v-on:mousedown="ChangeService(6)"> <a href="/Services/ServiceArea">   P P S R </a> </div>
    <div class="SubTitle" v-on:mousedown="ChangeService(7)"> <a href="/Services/ServiceArea">   Full Customer/Debtor Management </a></div>
  </div>
</template>

<script>
    export default {
        name: "ServiceSelector",
        data() {
            return {

            }
        },
        methods: {
            async ChangeService(Int)
            {
                this.$cookie.set('Service', Int, {expires: '10m'});
            }
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
  }
</style>