<template>
  <div id="AboutGrid">
    <div id="ImageArea">
      <img src="../../assets/images/BePaidOrginal/DebtCollectionMail.png" alt="None" id="Image">
    </div>
    <div id="WordArea">

      <div id="Title">
        Outsource your debtor ledger management!
      </div>
      <div id="Line"></div>
      <p id="SubTitle">
        Be Paid Limited is a professional Dunedin company with a big reputation for getting late payers to cough up.
        We have been operating since 2001 so you benefit from loads of our experience.  Whether an invoice is a week overdue or has been sitting in your debtors'
        file for a year, we'll do our best to get it paid for you. Our success rate is a phenomenally high 93.27%.

        But - not only will we have your bank balance zooming into the black, we'll do it in a way that retains your client.
        When managing your ledger, we are experts in diplomacy. We calmly work with your debt to ensure you get paid without any drama, come-back or fall-out.
        And if we think there's a legitimate reason why they haven't paid, we'll liaise between them and you to sort out the problem.

        Of course, if they just simply won't pay, then we will take off the kid gloves....  but only as a very last resort and only with your permission.
      </p>

    </div>
  </div>
</template>

<script>
    export default {
        name: "HomeAbout"
    }
</script>

<style scoped>
#AboutGrid {
  background-image: url("../../assets/images/Patterns/dot-grid-blue.png");
  background-size: 15%;
  display: grid;
  grid-template-columns: 35% 65%;
  height: 80vh;
  width: 100vw;
  background-color: whitesmoke;
}
  #Image {
    padding-top: 2vh;
    height: 80vh;
    left: 0;
    position: absolute;
  }
  #WordArea {
    padding-top: 7vw;
    width: 50vw;
  }
  #Title {
    font-family: 'Play', sans-serif;
    font-size: 2.4vw;
    text-align: left;
  }
  #Line {
    background-color: #1d2f6f;
    height: 2px;
    width: 50vw;
  }
  #SubTitle {
    font-family: 'Roboto', sans-serif;
    font-size: 1vw;
    text-align: left;
    padding-top: 2vw;
  }

@import 'https://fonts.googleapis.com/css?family=Lora:400,700';




a.animated-button:link, a.animated-button:visited {
  position: relative;
  margin-top: 25vw;
  margin-left: 3vw;
  transform: translateX(8vw);
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
  background: #e71d36;
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
}

</style>