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
  min-height: 80vh;
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
#SubTitle {
  font-family: 'Roboto', sans-serif;
  font-size: 1vw;
  text-align: left;
  padding-top: 2vw;
}
  #Line {
    background-color: #1d2f6f;
    height: 2px;
    width: 50vw;
  }


@media screen and (max-width: 1000px) {
  #ImageArea {
    position: absolute;
    opacity: 0.1;
    width: 50vw;
    left:0;
  }
  #WordArea {
    margin-left: 60vw;
    width: 80vw;
    text-align: center;
  }
  #AboutGrid {
    position: relative;
    justify-items: center;
    align-content: center;
    padding: 5vh 0 5vh 0;
  }

  #Title {
    font-family: 'Play', sans-serif;
    font-size: 300%;
    text-align: left;
    max-font-size: 30px;
  }
  #SubTitle {
    font-family: 'Roboto', sans-serif;
    font-size: 150%;
    text-align: left;
    padding-top: 2vw;
  }
}
</style>