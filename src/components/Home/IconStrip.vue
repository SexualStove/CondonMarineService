<template>
  <div>
    <div id="IconStrip">
      <div class="Break"></div>
      <div id="DebtArea" class="IconArea">
        <div class="IconBottomRight"></div>
        <div class="IconBottomLeft"></div>
        <div class="IconTopRight"></div>
        <div class="IconTopLeft"></div>
        <img class="Icon" src="../../assets/images/Icons/DebtCollection.png" alt="None">
        <div class="Title"> Debt Collection</div>
        <div class="SubTitle">
          You want to use a service you can trust that uses ethical and effective practices to ensure your customers pay their debts.
        </div>
      </div>
      <div id="LitigationArea" class="IconArea">
        <div class="IconBottomRight"></div>
        <div class="IconBottomLeft"></div>
        <div class="IconTopRight"></div>
        <div class="IconTopLeft"></div>
        <img class="Icon" src="../../assets/images/Icons/Litigation.png" alt="None">
        <div class="Title"> Litigation </div>
        <div class="SubTitle">
          We have a fully qualified legal team ready to support your company covering all aspects of work, and can reproduce and store legal documents and case files.
        </div>
      </div>
      <div id="BussinesstArea" class="IconArea">
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
      <div id="privateDomesticArea" class="IconArea">
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
      <div class="Break"></div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "IconStrip"
    }
</script>

<style scoped>
#IconStrip {
  background-image: url("../../assets/images/Patterns/dot-grid-white.png");
  background-size: 15%;
  padding: 10vh 0 10vh 0;
  width: 100%;
  grid-template-columns: 15% 17.5% 17.5% 17.5% 17.5% 15%;
  display: grid;
  justify-items: center;

}
  .Icon {
    top: 0;
    vertical-align: top;
    vert-align: top;
    width: 8.5vw;
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
    transform: translate(0, -3vh);
    max-width: 15vw;
    font-size: 1.4vw;
    font-family: 'Play', sans-serif;
    transition: 0.7s;
  }
  .IconArea:hover .Title {
    font-size: 1.5vw;
  }
  .IconArea {
    width: 15vw;
    padding: 1vw;
    position: relative;
  }
  .SubTitle {
    font-size: 0.8vw;
    transform: translate(0, -2vh);

    font-family: 'Roboto', sans-serif;
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
</style>