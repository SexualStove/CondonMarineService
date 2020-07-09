<template>
  <div style="overflow-x: hidden;">
    <div id="ServiceTitle"><b>⇩ Key Services ⇩</b></div>
    <div id="IconStrip">

      <div class="Break" style="grid-area: L"></div>
      <router-link style="text-decoration:none" to="/Services/ServiceArea">
        <div id="DebtArea" style="grid-area: I1" class="IconArea" v-on:mousedown="ServiceClick(0)">
          <div class="IconBottomRight"></div>
          <div class="IconBottomLeft"></div>
          <div class="IconTopRight"></div>
          <div class="IconTopLeft"></div>
          <img class="Icon" src="../../assets/images/Icons/DebtCollection.png" alt="None">
          <div class="Title"> Ledger Management </div>
          <div class="SubTitle">
            You want to use a service you can trust that uses ethical and effective practices to ensure your customers pay their debts.
          </div>
        </div>
      </router-link>
      <router-link style="text-decoration:none"  to="/Services/ServiceArea">
        <div id="LitigationArea" style="grid-area: I2" class="IconArea" v-on:mousedown="ServiceClick(1)">
          <div class="IconBottomRight"></div>
          <div class="IconBottomLeft"></div>
          <div class="IconTopRight"></div>
          <div class="IconTopLeft"></div>
          <img class="Icon" src="../../assets/images/Icons/Litigation.png" alt="None">
          <div class="Title"> Debt Collection </div>
          <div class="SubTitle">
            We have a fully qualified legal team ready to support your company covering all aspects of work, and can reproduce and store legal documents and case files.
          </div>
        </div>
      </router-link>
      <router-link style="text-decoration:none"  to="/Services/ServiceArea">
        <div id="BussinesstArea" style="grid-area: I3" class="IconArea" v-on:mousedown="ServiceClick(2)">
          <div class="IconBottomRight"></div>
          <div class="IconBottomLeft"></div>
          <div class="IconTopRight"></div>
          <div class="IconTopLeft"></div>
          <img class="Icon" src="../../assets/images/Icons/BussinessInvestigation.png" alt="None">
          <div class="Title"> Credit Checking </div>
          <div class="SubTitle">
            We can do a comprehensive credit check on your prospective customers to reduce your risk. Its simple, quick and inexpensive.
          </div>
        </div>
      </router-link>
      <router-link style="text-decoration:none" to="/Services/ServiceArea">
        <div id="privateDomesticArea" style="grid-area: I4"  class="IconArea" v-on:mousedown="ServiceClick(3)">
          <div class="IconBottomRight"></div>
          <div class="IconBottomLeft"></div>
          <div class="IconTopRight"></div>
          <div class="IconTopLeft"></div>
          <img class="Icon" src="../../assets/images/Icons/Invoice.png" alt="None">
          <div class="Title"> Invoice | Billing</div>
          <div class="SubTitle">
            If you are always behind in sending out your invoices or you find it difficult to find the time to do them,
            we can professionally process invoices on a daily, weekly, fortnightly or monthly basis
          </div>
        </div>
      </router-link>
      <div class="Break" style="grid-area: R" ></div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "IconStrip",
        data() {
          return {

          }
        },
        methods: {
            ServiceClick(Int) {
                this.$cookie.set('Service', Int, { expires: '10m' });
            },

        },
    }
</script>

<style scoped>
#IconStrip {
  background-image: url("../../assets/images/Patterns/dot-grid-white.png");
  background-size: 15%;
  padding: 10vh 0 10vh 0;
  width: 100%;
  grid-template-columns: 15% 17.5% 17.5% 17.5% 17.5% 15%;
  grid-template-areas: "L I1 I2 I3 I4 R";
  display: grid;
  justify-items: center;
  text-align: center;
}
  .Icon {
    top: 0;
    vertical-align: top;
    vert-align: top;
    width: 70%;
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
    transform: translate(-2vw, -3vh);
    //max-width: 1vw;
    width: 135%;
    font-size: 200%;
    font-family: 'Play', sans-serif;
    transition: 0.7s;
  }
  .IconArea:hover .Title {
    font-size: 1.5vw;
  }
  .IconArea {
    width: 80%;
    padding: 1vw;
    position: relative;

  }
  .SubTitle {
    font-size: 90%;
    transform: translate(0, -2vh);
    color: black;
    font-family: 'Roboto', sans-serif;
  }
  .SubTitle:hover {
    text-decoration: none;
  }



.IconTopLeft, .IconTopRight, .IconBottomLeft, .IconBottomRight {
  transition: 0.7s;
  position: absolute;
  height: 3%;
  width: 3%;
  opacity: 0.1;
}

.IconBottomRight {
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  bottom: 0;
  right: 0;
}
.IconBottomLeft {
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  bottom: 0;
  left: 0;
}
.IconTopRight {
  border-top: 1px solid black;
  border-right: 1px solid black;
  top: 0;
  right: 0;
}
.IconTopLeft {
  border-top: 1px solid black;
  border-left: 1px solid black;
  top: 0;
  left: 0;
}



.IconArea:hover .IconBottomLeft, .IconArea:hover .IconTopRight, .IconArea:hover .IconTopLeft, .IconArea:hover .IconBottomRight   {
  height: 50%;
  width: 50%;
  opacity: 0.3;
}
  .IconArea:hover {
    cursor: pointer;
  }
#ServiceTitle {
  display: none;
}
@media screen and (max-width: 1000px) {
  #ServiceTitle {
    top: 0;
    background-color: white;
    text-align: center;
    font-size: 2rem;
    font-family: 'Play', sans-serif;
    color: #eF1F3F;
    width: 100%;
    display: inline-block;
  }

  #IconStrip {
    background-image: url("../../assets/images/Patterns/dot-grid-white.png");
    background-size: 15%;
    padding: 10vh 0 10vh 0;
    width: 100%;
    grid-template-columns: 5% 90% 5%;
    grid-template-rows: 25% 25%;
    grid-template-areas: "L I1 R"
                          "L I2 R"
    "L I3 R"
    "L I4 R";
    display: grid;
    justify-items: center;
    text-align: center;
  }
  .Icon {
    width: 50%;
  }
  .Title {
    transform: translate(-2vw, -3vh);
    width: 100%;
    font-size: 200%;
    line-height: 90%;
  }
  .IconArea {
    width: 80%;
    margin: 2vh auto;
    position: relative;
  }
  .IconTopLeft, .IconTopRight, .IconBottomLeft, .IconBottomRight {
    transition: 0.7s;
    position: absolute;
    height: 9%;
    width: 9%;
    opacity: 0.3;
  }
}
</style>