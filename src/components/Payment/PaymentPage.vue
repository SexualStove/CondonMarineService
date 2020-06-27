<template>
  <div id="Page">
    <div id="Top-Info" class="Contact-Top-Box" style="background-color: black; position: relative; ">

      <h2 class="Contact-Top Top-Text" style="color: white">0800 223 724</h2>
      <h2 class="Contact-Top Top-Text" style="color: white"> PO Box 447, Rangiora, 7440 </h2>

      <router-link to="/Payment"><b-button class="Contact-Top" id="PortalButton" style="color: white" variant="outline-danger">Pay Now</b-button></router-link>

      <div id="line"></div>
    </div>
    <navbar style="width: 100vw" v-bind:Animation="false"></navbar>
    <div style="height: 20vh"></div>
    <div id="Terms">
      <div id="ContactTitle"> Payment Methods </div>
      <pre class="Desc">
        BANK ACCOUNT - Be Paid Ltd  02 – 0916 – 0123748 – 00
        Please include your reference number and/or your last name so we know it belongs to you.



        MAIL CHEQUE - PO Box 447, Rangiora, 7440
        made out to Be Paid Limited



       If you would like to discuss other payment arrangements please call us on 0800223724 or email us on info@bepaid.co.nz.

        Or even use the contact us page.
      </pre>
    </div>
    <div style="height: 20vh"></div>
    <div style="position: relative">
      <div class="Divider">
        <div class="LineDivider"></div>
        <div id="Diamonds" style="transform: translateY(0.2vw) scaleY(-1)">
          <div class="DiamondHolder">
            <div class="diamond-shield"></div>
          </div>
          <div class="DiamondHolderW">
            <div class="diamond-shieldW"></div>
          </div>
        </div>
      </div>
    </div>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
    import Navbar from "../Global/Navbar";
    import HomeFooter from "../Home/HomeFooter";
    export default {
        name: "DebtLodgementPage",
        components: {HomeFooter, Navbar},
        data() {
            return{
              AcceptTerms: false
            }
        }
    }
</script>

<style scoped>
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

  .Desc {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2vw;
    text-align: left;
    padding: 2%;
    white-space: pre-wrap !important; word-break: keep-all; border: 0; background-color: transparent;
  }

  #ContactTitle {
    font-family: 'Play', sans-serif;
    font-size: 3.5vw;
    padding-bottom: 1vw;
    width: 100%;
    text-align: center;
    font-weight: 700;
  }
  #Terms {
    width: 90%;
    margin: 0 auto;
    background-color: whitesmoke;
    padding: 2vw;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    justify-items: center;
    justify-content: center;
  }

  .Divider {
    position: absolute;
    bottom: 0;
    width: 100vw;
    z-index: 100;
  }
  .LineDivider {
    position: absolute;
    background-color: #1d2f6f;
    width: 100%;
    height: 1vh;
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




  .DiamondHolderW {
    position: absolute;
    transform: translate(0.5vw, -1vh) scale(0.9);
  }
</style>