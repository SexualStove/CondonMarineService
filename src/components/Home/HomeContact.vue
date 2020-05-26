<template>
  <div id="Wrapper">
    <div id="Header"> Let's Talk </div>
    <div id="LeftSide">

      <div id="ContactCard">
        <div id="ContactTitle"> Quick Enquiries </div>
        <form id="form" class="topBefore" >
          <input class="input" name ="user_name" type="text" placeholder="NAME">
          <input class="input" name="user_email" type="text" placeholder="E-MAIL">
          <input class="input" name="phone" type="text" placeholder="CONTACT NO">
          <textarea class="message" name="message" type="text" placeholder="MESSAGE"></textarea>
           <a id="Submit" style="border-radius: 30px" href="#" class="btn btn-sm animated-button thar-two">Send</a>
        </form>

      </div>
    </div>
    <div id="RightSide">
      <div class="RSA" id="Office">
        <img class="Image" id="HoursImages" src="../../assets/images/Icons/TimeIcon.png" alt="None">
        <div class="Text">
          Bussiness Hours: <br>
          Mon-Fri 	09:00-05:00
        </div>

      </div>
      <div class="RSA" id="Address">
        <img class="Image" id="AddressImage" src="../../assets/images/Icons/AddressIcon.png" alt="None">
        <div class="Text">
          P O Box 447, <br>
          Rangiora, 7440
        </div>

      </div>
      <div class="RSA" id="Phone">
        <img style="transform: translate(1vw, -1vw);" class="Image" id="PhoneHours" src="../../assets/images/Icons/PhoneIcon.png" alt="None">
        <div class="Text">
        0800 223 724
        </div>

      </div>
      <div class="RSA" id="Email">
        <img style="transform: translate(1vw, -1vw);" class="Image" id="EmailImage" src="../../assets/images/Icons/EmailIcon.png" alt="None">
        <div class="Text">
        info@bepaid.co.nz
        </div>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HomeContact"
    }
</script>

<style scoped>

  #Wrapper {
    background-image: url("../../assets/images/Patterns/dot-grid-blue.png");
    background-size: 15%;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-areas: 'Header Header'
  'Left Right';
    padding: 2.5vw 2.5vw 1vw 2.5vw;
  }
  #RightSide {
    display: grid;
    grid-template-rows: 20% 20% 20% 20% 20%;
    height: 100%;
    justify-items: right;
    align-items: center;
  }
  #Header {
    font-family: 'Play', sans-serif;
    font-size: 3.5vw;
  }
  #LeftSide {
    grid-area: Left;
  }
  #RightSide {
    grid-area: Right;
  }
  .RSA {
    font-size: 1.5vw;
    padding: 2vw 15vw 2vw 4vw;
    position: relative;
    text-align: left;


  }
  .Text {
    font-size: 1.9vw;
    font-weight: 700;
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
    z-index: 1;
    font-family: 'Play', sans-serif;
    display: inline-block;
    position: relative;
  }
  .Image {
    z-index: 0;
    width: 5vw;
    opacity: 0.5;
    top: 30%;
    left:3%;
    display: inline-block;
    transform: translate(1vw, -2vw);
  }

  #ContactCard {
    width: 70%;
    margin: 0 auto;
    background-color: whitesmoke;
    padding: 2vw;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    justify-items: center;
    justify-content: center;
  }
  #form {
    justify-items: center;
    justify-content: center;
  }
  #Header {
    grid-area: Header;
    padding: 1vw 0 4vw 0;
  }
  #ContactTitle {
    font-family: 'Play', sans-serif;
    font-size: 2.5vw;
    padding-bottom: 1vw;
  }
  .input {
    width: 25vw;
    margin: 0.5vw auto 0.5vw auto;
    height: 2.1vw;
    display: block;
    //margin: 0 auto;
    transition: 1s;
    border: rgba(0, 0, 0, 0.2)  solid 1px;
    padding-left: 0.2vw;
    border-radius: 10px;
  }
  .input, .message {
    //transform: scale(1.6);
    font-size: 1vw;
  }
  .message {
    transition: 1s;
    border-radius: 10px;
    border: rgba(0, 0, 0, 0.2)  solid 1px;
    width: 25vw;
    padding-left: 0.2vw;
    height: 8vw;
    display: block;
    margin: 0 auto;
  }
  .input:focus, .message:focus {
    border: rgba(0, 0, 0, 0.4) solid 2px;
    box-shadow: 0 0 8px 0 #1d2f6f;
  }
  .input:hover, .message:hover {
    box-shadow: 0 0 4px 0 #1d2f6f;
  }

  a.animated-button:link, a.animated-button:visited {
    position: relative;
    transform: translateX(8vw);
    display: inline-block;
    color: black;
    font-size:1vw;

    //font-weight: bold;
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
    color: black;
    cursor: pointer;
    display: block;
    position: relative;
    border: 2px solid #86CB92;
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  }
  a.animated-button.thar-two:hover {
    color: #000 !important;
    background-color: transparent;
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
    color: #000;
    background: #86CB92;
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  }
  #Submit {
    width: 10vw;
    margin: 2vw auto;
    transform: translateX(0);
  }
</style>