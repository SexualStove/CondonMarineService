<template>
  <div id="FormArea">
    <div id="ContactCard">
      <div id="ContactTitle"> Debt Lodgement From </div>
      <form id="form" class="topBefore" >
        <div class="SectionTitle"> Your Details </div>
        <input v-model="YourDetails.Business" class="input" name ="BUSINESS NAME" type="text" placeholder="BUSINESS NAME">
        <input v-model="YourDetails.Name" class="input" name="FULL NAME" type="text" placeholder="FULL NAME">
        <input v-model="YourDetails.Phone" class="input" name="CONTACT NO" type="text" placeholder="CONTACT NO">
        <input v-model="YourDetails.Mobile" class="input" name="MOBILE" type="text" placeholder="MOBILE">
        <input v-model="YourDetails.Email" class="input" name="user_email" type="text" placeholder="E-MAIL">
        <input v-model="YourDetails.SIGNATURE" class="input" name="SIGNATURE" type="text" placeholder="SIGNATURE (JUST IN TEXT)">
        <input v-model="YourDetails.Description" class="input" name="BUSINESS DESCRIPTION" type="text" placeholder="BUSINESS DESCRIPTION">

        <div class="SectionTitle"> Debtors Details </div>
        <input v-model="DebtorsDetails.Business" class="input" name ="BUSINESS NAME" type="text" placeholder="BUSINESS NAME">
        <div class="SemiTitle">Legal Entity of Company</div>
        <div id="RaidoButtons">
          <input type="radio" id="Ltd" value="Ltd" v-model="DebtorsDetails.Legal_Entity_Of_Company">
          <label class="RadioLabel" for="Ltd" >Ltd</label>
          <input type="radio" id="Trust" value="Trust" v-model="DebtorsDetails.Legal_Entity_Of_Company">
          <label class="RadioLabel" for="Trust">Trust</label>
          <input type="radio" id="Partnership" value="Partnership" v-model="DebtorsDetails.Legal_Entity_Of_Company">
          <label class="RadioLabel" for="Partnership">Partnership</label>
          <input type="radio" id="SoleTrader" value="SoleTrader" v-model="DebtorsDetails.Legal_Entity_Of_Company">
          <label class="RadioLabel" for="SoleTrader">Sole Trader</label>
          <input type="radio" id="Individual" value="Individual" v-model="DebtorsDetails.Legal_Entity_Of_Company">
          <label class="RadioLabel" for="Individual">Individual</label>
        </div>
        <input v-model="DebtorsDetails.Name" class="input" name="full_name" type="text" placeholder="CONTRACT OR PERSONAL GUARANTOR">
        <input v-model="DebtorsDetails.DATE_OF_BIRTH" class="input" name="date_of_birth" type="text" placeholder="DATE OF BIRTH">
        <input v-model="DebtorsDetails.Address" class="input" name="address" type="text" placeholder="PHYSICAL ADDRESS">
        <input v-model="DebtorsDetails.Phone" class="input" name="phone" type="text" placeholder="CONTACT NO">
        <input v-model="DebtorsDetails.Mobile" class="input" name="mobile" type="text" placeholder="MOBILE">
        <input v-model="DebtorsDetails.Email" class="input" name="user_email" type="text" placeholder="E-MAIL">

        <div class="SectionTitle"> Debt Details </div>
        <input v-model="DebtDetails.Amount" class="input" name ="debt_amount" type="text" placeholder="DEBT AMOUNT">
        <input v-model="DebtDetails.DueDate" class="input" name ="due_date" type="text" placeholder="DATE DUE (OR RANGE)">
        <input v-model="DebtDetails.Covered" class="input" name ="covered" type="text" placeholder="COVERED BY COLLECTIONS COST AGREEMENT (YES/NO)">
        <input v-model="DebtDetails.Guarantee" class="input" name ="guarantee" type="text" placeholder="PERSONAL GUARANTEE ON ACCOUNT (YES/NO)">
        <textarea v-model="DebtDetails.DebtDetails" class="message" name="description" type="text" placeholder="DESCRIPTION OF DEBT"></textarea>
        <a v-on:click="SendForm" id="Submit"   class="btn btn-sm animated-button thar-two">Send</a>
        <div id="Gone">
        <div style="font-family: 'Play', sans-serif; font-size: 1.5vw; text-align: center;">if you have any issues submitting this form please call this number.</div>
        <div style="font-family: 'Play', sans-serif; font-size: 3vw; text-align: center;">0800 223 724</div>
        </div>
        <div id="Errors" v-for="Error in Errors" v-bind:key="Error">
          {{Error}}
        </div>
      </form>

    </div>
  </div>
</template>

<script>
    import BlogController from '../../services/BlogServices'
    export default {
        name: "DebtLodgementForm",
        data() {
            return {
                picked: '',
                DebtDetails: {
                    Amount: '',
                    DueDate: '',
                    Covered: '',
                    Guarantee: '',
                    DebtDetails: ''
                },
                DebtorsDetails: {
                    Business: '',
                    Name: '',
                    Legal_Entity_Of_Company: '',
                    DATE_OF_BIRTH: '',
                    Email: '',
                    Phone: '',
                    Address: '',
                    Mobile: '',
                },
                YourDetails: {
                    Business: '',
                    Name: '',
                    Phone: '',
                    Mobile: '',
                    Description: '',
                    SIGNATURE: '',
                    Email: '',
                },
                Sent: false,
                Errors: [],
                CompiledString: '',
            }
        },
        methods: {
            async SendForm() {
                //alert("Sorry Email is not working at the moment, please email us at info@bepaid.co.nz");
                console.log("Start Send");
                this.AreasFilled();
                if (this.Sent === false) {
                    console.log("Sent mail");
                    this.Sent = true;
                    let Time = new Date();
                    const response = await BlogController.SendForm({
                        CompiledString: this.CompiledString,
                        Time: Time
                    });
                    alert("Debt Lodgement from has been sent!");
                    console.log(response);
                } else {
                    alert("Debt Lodgement from has already been sent!");
                }
            },
            AreasFilled() {
                let form = document.getElementById("form");
                var inputs = form.querySelectorAll("input");
                [].forEach.call(inputs, function(input) {
                    if (input.value === "") {
                        input.classList.add("error");
                    } else {
                        input.classList.remove("error");
                    }
                });


                this.CompiledString = '';
                this.CompiledString += ' Your Details: \n \n';
                for (let prop in this.YourDetails) {
                    if(this.YourDetails[prop] === '') {
                        this.CompiledString += prop.toUpperCase() + ":  ---- \n"
                    } else {
                        this.CompiledString += prop.toUpperCase() + ":  " + this.YourDetails[prop] + "\n"
                    }
                }
                this.CompiledString += '\n\n\n Debtors Details: \n \n';
                for (let prop in this.DebtorsDetails) {
                    if(this.DebtorsDetails[prop] === '') {
                        this.CompiledString += prop.toUpperCase() + ":  ---- \n"
                    } else {
                        this.CompiledString += prop.toUpperCase() + ":  "  + this.DebtorsDetails[prop] + "\n"
                    }
                }
                this.CompiledString += '\n\n\n Debt Details: \n \n';
                for (let prop in this.DebtDetails) {
                    if(this.DebtDetails[prop] === '') {
                        this.CompiledString += prop.toUpperCase() + ":  ---- \n"
                    } else {
                        this.CompiledString += prop.toUpperCase() + ":  "  +  this.DebtDetails[prop] + "\n"
                    }
                }
            }
        }
    }
</script>

<style scoped>
  .SemiTitle {
    text-align: center;
    font-size: 1vw;
  }
  #RaidoButtons {
    width: 90%;
    padding-left: 17%;
    font-size: 1vw;
  }
  .RadioLabel {
    margin: 1vw;
  }
  .SectionTitle {
    font-size: 2vw;
    padding-top: 3vw;
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
  #ContactTitle {
    font-family: 'Play', sans-serif;
    font-size: 3.5vw;
    padding-bottom: 1vw;
    width: 100%;
    text-align: center;
    font-weight: 700;
  }
  .input {
    width: 90%;
    margin: 0.5vw auto 0.5vw auto;
    height: 2.1vw;
    display: block;
    transition: 1s;
    border: rgba(0, 0, 0, 0.2)  solid 1px;
    padding-left: 0.2vw;
    border-radius: 10px;
  }
  .input, .message {
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
    border-radius: 30px;
    position: relative;
    transform: translateX(8vw);
    display: inline-block;
    color: black;
    font-size:1vw;
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
    border-radius: 30px
  }
  a.animated-button.thar-two:hover {
    color: #000 !important;
    background-color: transparent;
    border-radius: 30px;
  }
  a.animated-button.thar-two:hover:before {
    top: 0%;
    bottom: auto;
    height: 100%;
    border-radius: 30px;
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
    border-radius: 30px;
  }
  #Submit {
    width: 10vw;
    margin: 3vw auto;
    transform: translateX(0);
    font-size: 1.4vw; border-radius: 30px

  }
  input[type=text].error {
    border: 1px solid red;
  }
  #Errors {
    color: red;
    font-size: 1vw;
    text-align: center;
  }
  @media screen and (max-width: 1000px) {
    .input, .message {
      font-size: initial;
      height: initial;
      width: 95%;
    }
    .SectionTitle {
      font-size: initial;
    }
    #ContactCard {
      width: 95%;
    }
    .SemiTitle {
      text-align: center;
      font-size: 140%;
      font-weight: 700;
    }
    #RaidoButtons {
      width: 90%;
      padding-left: 17%;
      font-size: initial;
    }
    #Gone {
      display: none;
    }
    #Submit {
      width: initial;
      font-size: initial;
    }
  }
</style>