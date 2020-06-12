<template>
  <div id="IconsArea">

    <div id="DebtCollection" class="Service" v-on:mousedown="ChangeService(1)">
      <router-link to="/Services/ServiceArea">
        <img class="Icon" src="../../assets/images/Icons/Litigation.png" alt="None">
        <div class="Title"> Debt Collection</div>
      </router-link>
    </div>

    <div id="LedgerManagement" class="Service" v-on:mousedown="ChangeService(0)">
      <router-link to="/Services/ServiceArea">
        <img class="Icon" src="../../assets/images/Icons/DebtCollection.png" alt="None">
        <div class="Title"> Ledger Management </div>
      </router-link>
    </div>
    <div id="CreditChecking" class="Service" v-on:mousedown="ChangeService(2)">
      <router-link to="/Services/ServiceArea">
      <img class="Icon" src="../../assets/images/Icons/BussinessInvestigation.png" alt="None">
      <div class="Title"> Credit Checking </div>
      </router-link>
    </div>
    <div id="Invoice" class="Service" v-on:mousedown="ChangeService(3)">
      <router-link to="/Services/ServiceArea">
      <img class="Icon" src="../../assets/images/Icons/Invoice.png" alt="None">
      <div class="Title"> Invoice | Billing</div>
      </router-link>
    </div>
    <div id="CreditControl" class="Service" v-on:mousedown="ChangeService(4)">
      <router-link to="/Services/ServiceArea">
      <img class="Icon" src="../../assets/images/Icons/CreditIcon.png" alt="None">
      <div class="Title">Credit Control</div>
      </router-link>
    </div>
    <div id="CreditApplication" class="Service" v-on:mousedown="ChangeService(5)">
      <router-link to="/Services/ServiceArea">
      <img class="Icon" src="../../assets/images/Icons/ApplactionIcon.png" alt="None">
      <div class="Title"> Forms and <br>Terms of Trade </div>
      </router-link>
    </div>
    <div id="PPSR" class="Service" v-on:mousedown="ChangeService(6)">
      <router-link to="/Services/ServiceArea">
      <img class="Icon" src="../../assets/images/Icons/PropSecurityIcon.png" alt="None">
      <div class="Title"> P P S R </div>
      </router-link>
    </div>
    <div id="Management" class="Service" v-on:mousedown="ChangeService(7)">
      <router-link to="/Services/ServiceArea">
      <img class="Icon" src="../../assets/images/Icons/ManagmentIcon.png" alt="None">
      <div class="Title">Customer/Debtor <br>Management</div>
      </router-link>
    </div>




    <div id="FeildVisit" style="grid-area: A; transform: translateX(50%)" class="Service" v-on:mousedown="ChangeService(8)">
      <router-link to="/Services/ServiceArea">
        <img class="Icon" src="../../assets/images/Icons/FeildVisitsIcon.png" alt="None">
        <div class="Title">Field Visits</div>
      </router-link>
    </div>

    <div id="Background" style="grid-area: B; transform: translateX(75%)" class="Service" v-on:mousedown="ChangeService(9)">
      <router-link to="/Services/ServiceArea">
        <img class="Icon" src="../../assets/images/Icons/BackgroundCheckIcon.png" alt="None">
        <div class="Title">Background Checks</div>
      </router-link>
    </div>

    <div id="Invest" style="grid-area: C; transform: translateX(125%)" class="Service" v-on:mousedown="ChangeService(10)">
      <router-link to="/Services/ServiceArea">
        <img class="Icon" src="../../assets/images/Icons/InvestigationsIcon.png" alt="None">
        <div class="Title">Investigations</div>
      </router-link>
    </div>

    <div id="Doc" style="grid-area: D; transform: translateX(150%)" class="Service" v-on:mousedown="ChangeService(11)">
      <router-link to="/Services/ServiceArea">
        <img class="Icon" src="../../assets/images/Icons/DocumentServingIcon.png" alt="None">
        <div class="Title">Document <br>Serving</div>
      </router-link>
    </div>
  </div>
</template>

<script>

    import {EventBus} from "../../App";
    export default {
        name: "ServiceIcons",
        methods: {
          async ChangeService(Int) {
              this.$cookie.set('Service', Int, {expires: '10m'});
              EventBus.$emit('Service', Int);

          }
        }
    }
</script>

<style scoped>
#IconsArea {
  overflow: hidden;
  height: 50vh;
  width: 100%;
  border-radius: 40px 40px 0 0;
  background-image: url("../../assets/images/Patterns/dot-grid-white.png");
  background-size: 15%;
  position: absolute;
  bottom: 0;
  display: grid;
  grid-template-columns: 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%;
  grid-template-rows: 50% 50%;
  grid-template-areas: "1 2 3 4 5 6 7 8"
 "P A B C D X X X";
  z-index: 10;
  padding: 0 2vw 0 2vw;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;
}
.Service {
  position: relative;
  width: 100%;
  height: 20vh;
}
  .Icon {
    width: 80%;
    position: absolute;
    //transform: translate(-50%, -50%);
    transition: 0.5s;
  }
  .Service:hover .Icon {
    width: 90%;
  }
  .Service:hover .Title {
    width: 110%;
    font-size: 1.4vw;
    transform: translate(-10%, 15vh);
  }
  .Service:hover {
    cursor: pointer;
  }
.Title {

  color: black;
  text-shadow: 1px 1px 0 whitesmoke,
  -1px 1px 0 whitesmoke,
  1px -1px 0 whitesmoke,
  -1px -1px 0 whitesmoke,
  0px 1px 0 whitesmoke,
  0px -1px 0 whitesmoke,
  -1px 0px 0 whitesmoke,
  1px 0px 0 whitesmoke,
  2px 2px 0 whitesmoke,
  -2px 2px 0 whitesmoke,
  2px -2px 0 whitesmoke,
  -2px -2px 0 whitesmoke,
  0px 2px 0 whitesmoke,
  0px -2px 0 whitesmoke,
  -2px 0px 0 whitesmoke,
  2px 0px 0 whitesmoke,
  1px 2px 0 whitesmoke,
  -1px 2px 0 whitesmoke,
  1px -2px 0 whitesmoke,
  -1px -2px 0 whitesmoke,
  2px 1px 0 whitesmoke,
  -2px 1px 0 whitesmoke,
  2px -1px 0 whitesmoke,
  -2px -1px 0 whitesmoke;

  border-radius: 60%;
  transform: translate(-5%, 15vh);
  line-height: 80%;
//max-width: 1vw;
  width: 100%;
  padding: 10%;
  font-size: 1.2vw;
  font-family: 'Play', sans-serif;
  transition: 0.7s;
  position: absolute;
  text-align: center;
}
</style>