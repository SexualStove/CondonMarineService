
<template>
  <div id="ContactUs" herf="ContactUs">
    <div id="MoreAreas">
      <img src="../../assets/images/Icons/LocationIcon.png" alt="Location" id="AreaIcon">
      <div id="Text">
        <div class="STitle"> Offices: </div>
        Invercargill<br>
        Dunedin<br>
        Christchurch<br>
        <br>
        <br>
        <div class="STitle"> Agents in: </div>
        New Zealand<br>
        Australia<br>
        Pacific Islands<br>
      </div>
    </div>
    <div id="Header"> Let's Talk </div>
    <div id="LeftSide">
      <div id="ContactCard">
        <div id="ContactTitle"> Quick Enquiries </div>
        <form id="form" class="topBefore" >
          <input v-model="YourDetails.Name" id="Name" class="input" name ="user_name" type="text" placeholder="NAME">
          <input v-model="TestZone" class="input" style="display: none;" name="address" type="text" placeholder="ADDRESS REQUIRED">
          <input v-model="YourDetails.Email" class="input" name="user_email" type="text" placeholder="E-MAIL">
          <input v-model="YourDetails.Phone" class="input" name="phone" type="text" placeholder="CONTACT NO">
          <textarea v-model="YourDetails.Message" id="message" class="message" name="message" type="text" placeholder="MESSAGE"></textarea>
           <a v-on:click="SendForm" id="Submit" class="btn btn-sm animated-button thar-two">Send</a>
          <div v-if="Errors.length !== 0" style="color: red; font-size: 1vw">{{this.Errors}}</div>
        </form>

      </div>
    </div>
    <div id="RightSide">
      <div class="RSA" id="Office">
        <img class="Image" id="HoursImages" src="../../assets/images/Icons/TimeIcon.png" alt="None">
        <div class="Text">
          Business Hours: <br>
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
        <img style="transform: translate(1vw, -1vw);" class="Image" id="PhoneHours" src="../../assets/images/Icons/PhoneIconNorm.png" alt="None">
        <div class="Text">
        0800 223 724 <br>
        021 222 1099, 24/7
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

/* eslint-disable no-alert, no-console */
/* eslint-enable no-alert, no-console */

<script>
    import BlogController from '../../services/BlogServices';
    export default {
        name: "HomeContact",
        data() {
          return {
              YourDetails: {
                  Name: '',
                  Email: '',
                  Phone: '',
                  Message: '',
              },
              TestZone: '',
              Sent: false,
              Errors: [],
              CompiledString: '',
          }
        },
        methods: {
            async SendForm() {

                console.log("Start Send");
                let pass = this.JustifyFrom();
                console.log("Got pass of: "+pass);
                //let UnFilledAreas = this.AreasFilled();
                if (this.Sent === false && pass == true) {
                    console.log("This got the this.sent of; "+this.Sent);
                    this.Sent = true;
                    console.log("Changed this.sent to: "+this.Sent);
                    let date = new Date();
                    const response = await BlogController.SendContact({
                       Details: this.YourDetails,
                        Time: date
                    });
                    alert("Contact Us message has been sent!");
                    console.log(response);
                } else {
                    alert("Message has already been sent!");
                    this.Sent = true;
                }

            },
            /**
             * @return {boolean}
             */
            JustifyFrom() {
                console.log();
                if(this.TestZone !== '') {
                    console.log("autofilled");
                    return false;
                }
                let Pass = true;
                if(this.YourDetails.Message === '') {
                    console.log("Message");
                    document.getElementById("message").classList.add("error");
                    Pass = false;
                } else {
                    document.getElementById("message").classList.remove("error");
                }
                if(this.YourDetails.Name === '') {
                    console.log("Name");
                    document.getElementById("Name").classList.add("error");
                    Pass = false;
                } else {
                    document.getElementById("Name").classList.remove("error");
                }
                console.log("Returning "+Pass);
                if(Pass === true) {
                    return true;
                } else {
                    return false;
                }
            }

        }
    }
</script>

<style scoped>
  #MoreAreas {
    position: absolute;
    right: -80%;
    top: 10%;
    width: 100%;
    height: 100%;
  }
  #AreaIcon {
    width: 45%;
    opacity: 0.5;
  }
  .STitle {
    transform: translateX(15%);
    font-size: 3.4vw;
  }
  #Text {
    transform: translate(0,-110%);
    position: absolute;
    font-family: 'Play', sans-serif;
    font-size: 2.4vw;
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
    text-align: right;
  }
  #ContactUs {
    background-image: url("../../assets/images/Patterns/dot-grid-blue.png");
    background-size: 15%;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-areas: 'Header Header'
  'Left Right';
    padding: 2.5vw 2.5vw 1vw 2.5vw;
    position: relative;
    overflow: hidden;
  }
  #RightSide {
    transform: translateX(-15%);
    display: grid;
    grid-template-rows: 20% 20% 20% 20% 40%;
    height: 100%;
    justify-items: right;
    align-items: center;
  }
  #Header {
    font-family: 'Play', sans-serif;
    font-size: 650%;
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
    width: 20%;
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
    font-size: 500%;
    padding-bottom: 1vw;
  }
  .input {
    width: 90%;
    margin: 0.5vw auto 0.5vw auto;
    height: 200%;
    display: block;
    //margin: 0 auto;
    transition: 1s;
    border: rgba(0, 0, 0, 0.2)  solid 1px;
    border-radius: 10px;
  }
  .input, .message {
    //transform: scale(1.6);
    padding-left: 2%;
    font-size: 200%;
  }
  .message {
    transition: 1s;
    border-radius: 10px;
    border: rgba(0, 0, 0, 0.2)  solid 1px;
    width: 90%;
    padding-left: 0.2vw;
    min-height: 8vw;
    height: 400%;
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
    font-size: 500%;

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
    width: 40%;
    margin: 2vw auto;
    transform: translateX(0);
    font-size: 250%
  }
  input[type=text].error {
    border: 1px solid red;
  }
  textarea[type=text].error {
    border: 1px solid red;
  }
  @media screen and (max-width: 1000px) {
    #ContactUs {
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-areas: 'Header Header'
      'Left Left'
      'Right Right';
      padding: 2.5vw 2.5vw 1vw 2.5vw;
    }
    #Header {
      font-family: 'Play', sans-serif;
      font-size: 350%;
    }
    #ContactTitle {
      font-family: 'Play', sans-serif;
      font-size: 300%;
    }
    .input, .message {
    //transform: scale(1.6);
      margin-top: 2%;
    }
    #ContactCard {
      width: 90%;
    }
    #RightSide {
      margin-top: 10%;
      transform: translateX(-4%);
      display: grid;
      grid-template-rows: 20% 20% 20% 20% 40%;
      height: 100%;
      justify-items: left;
      align-items: center;
    }
    .Text {
      font-size: 300%;
    }
    #MoreAreas {
      position: absolute;
      right: -66%;
      top: 66%;
      width: 100%;
      height: 100%;

    }
    #AreaIcon {
      width: 70%;
      opacity: 0.5;
    }
    .STitle {
      transform: translateX(15%);
      font-size: 100%;
    }
    #Text {
      transform: translate(0, -95%);
      left: 0;
      text-align: left;
      position: absolute;
      font-family: 'Play', sans-serif;
      font-size: 110%;

    }
  }
</style>