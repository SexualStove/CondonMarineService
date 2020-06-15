<template>
  <div>
    <div id="WholeArea">
      <div id="Top-Info" class="Contact-Top-Box" style="background-color: black; position: relative; ">

        <h2 class="Contact-Top Top-Text" style="color: white">  0800 2 BE PAID (0800 223 724) </h2>
        <h2 class="Contact-Top Top-Text" style="color: white"> PO Box 447, Rangiora, 7440 </h2>

        <router-link to="/Payment"><b-button class="Contact-Top" id="PortalButton" style="color: white" variant="outline-danger">Pay Now</b-button></router-link>

        <div id="line"></div>
      </div>
      <navbar style="width: 100vw" v-bind:Animation="false"></navbar>
      <div style="height: 15vh"></div>
      <div id="PageArea" v-bind:style="{'min-height': this.Style[this.CurrentService]}">
        <div id="RightSide">
          <transition name="fade" >
            <img class="Image" v-bind:src="this.images[this.CurrentService]" alt="None" :key="this.images[this.CurrentService]">
          </transition>
          <transition name="fade" >
          <div :key="this.Title[this.CurrentService]" v-bind:style="{'top': this.Style2[this.CurrentService]}" class="Title">{{this.Title[this.CurrentService]}}</div>
          </transition>
          <transition name="fade">
          <div :key="this.Desc[this.CurrentService]" ><pre class="Desc">{{this.Desc[this.CurrentService]}}</pre></div>
          </transition>
        </div>
        <ServiceSelector id="LeftSide"></ServiceSelector>
      </div>
    </div>
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
    <home-footer></home-footer>
  </div>
</template>

<script>
    import {EventBus} from "../../App";
    import HomeFooter from "../Home/HomeFooter";
    import Navbar from "../Global/Navbar";
    import ServiceSelector from "./ServiceSelector";
    export default {
        name: "ServiceArea",
        components: {ServiceSelector, Navbar, HomeFooter},
        data() {
            return {
                Load: false,
                CurrentService: 0,
                images: [

                    require('../../assets/images/Icons/DebtCollection.png') ,
                    require('../../assets/images/Icons/Litigation.png') ,
                    require('../../assets/images/Icons/BussinessInvestigation.png') ,
                    require('../../assets/images/Icons/Invoice.png') ,
                    require('../../assets/images/Icons/CreditIcon.png') ,
                    require('../../assets/images/Icons/ApplactionIcon.png') ,
                    require('../../assets/images/Icons/PropSecurityIcon.png') ,
                    require('../../assets/images/Icons/ManagmentIcon.png') ,
                    require('../../assets/images/Icons/FeildVisitsIcon.png'),
                    require('../../assets/images/Icons/BackgroundCheckIcon.png'),
                    require('../../assets/images/Icons/InvestigationsIcon.png'),
                    require('../../assets/images/Icons/DocumentServingIcon.png'),
                ],
                Title: [

                    'Ledger Management',
                    'Debt Collection',
                    'Credit Checking',
                    'Invoice | Billing',
                    'Credit Control',
                    'Forms and Terms of Trade',
                    'Personal Property Security Registration & Searches',
                    'Full Customer/Debtor Management',
                    'Field Visits',
                    'Background Checks',
                    'Investigations',
                    'Document Serving'
                ],
                Desc: [


                    'We offer litigation support services – including scanning, OCR, coding and indexing, electronic discovery etc. We have a fully qualified legal team ready to support your company covering all aspects of work, and can reproduce and store legal documents and case files. \n\n'+
                    'Our experience has taught us how best to approach legal action. Our legal team use a variety of tools – from a simple notice of claims through to filing for bankruptcy. Always we will ensure you’re 100% on board with our recommendation before any action is taken. \n\n'+
                    'Approaching legal proceedings through Coast to Coast is likely to be significantly less expensive than working directly with a law firm. We’ll try to get a result in the shortest possible time, so that you’re not paying hours and hours of legal costs.',


                    'You may have your receivables under good control in-house - (if you haven\'t - we really need to talk) (0800 223 724)  but sometimes you have one that just will not pay and it\'s time to call in the big guns.\n' +
                    '\n' +
                    'You want to use a service you can trust that uses ethical and effective practices to ensure your customers pay their debts.\n' +
                    '\n' +
                    'You will find our debt collection service prompt, persistent and efficient (not to mention incredibly cost-effective if you have the right processes in place) - and we will help you with that.\n' +
                    '\n' +
                    'Your reinforcements - Be Paid Limited - are ready to back you up whenever you need us.\n' +
                    '\n' +
                    'We can fix it!\n' +
                    '\n',

                    'Can they pay?  \n' +
                    'Will they pay?  \n' +
                    'What is their past history?\n' +
                    'The number one rule of debtor management is first - know your customer.\n' +
                    '\n' +
                    'We can do a comprehensive credit check on your prospective customers to reduce your risk.\n' +
                    '\n' +
                    'We subscribe to New Zealand\'s leading credit reporting agency, Centrix Group, and have immediate online access to their credit reports.\n' +
                    'Its simple, quick and inexpensive.\n' +
                    'Contact us with your customers details including assurance of their permission (for individuals) or email or fax us your signed credit application form.  We\'ll give you an assessment straight away.\n' +
                    'Credit checking - just one of the services we offer to protect your precious assets - your customer relationships and your cash. ',

                    'If you are always behind in sending out your invoices or you find it difficult to find the time to do them, we can professionally process invoices on a daily, weekly, fortnightly or monthly basis. We can use all types of software including Xero, MYOB, Reckon and Acclaim Cashbook as well as Workflowmax, Service8 and other types of jobbing software.  \n' +
                    'We also make sure your invoices and statements have all the necessary elements including payment terms and look professional.\n' +
                    '\n' +
                    'This service helps self-employed trades people and other small businesses who never have enough time or may not have access to a computer or the necessary software and/or skills to do this essential task automatically.\n' +
                    'Often invoicing is left to evenings and weekends or when you find some time which means invoices go out late, resulting in late payment. Wouldn\'t your time be better spent on the work that earns you money?  \n' +
                    'We can process invoices for any business including those that charge by time, quotation, time and materials or time and travel.  We can input your payments and send out monthly statements and supply you with an up to date report of who owes you what, at any time.\n' +
                    'If needed, we can create your quotations and then convert those quotations into invoices upon acceptance by your customer.\n' +
                    'If you would like more information on this service, please contact us. We will be very happy to customise the right solution for you. ',

                    'We contact your customers on your behalf.  Your customers get regular, personalised service, and in most cases they don\'t need to know we are involved, except for paying you sooner!   Fast results that are more cost-effective than in-house credit control. More time to spend on making money - not chasing yesterdays.  A custom-designed credit control service ideally for businesses with 10 to 300 monthly debtors. \n \n'+
                      'A monthly fee is charged for Credit Control based on the average number of debtors invoiced monthly (not the dollar value of the billing).  Calculated in the fee is an amount for phone, stationery and postage charges.  The total fee will depend on whether you typically have recurring trade customers or a mix of trade and retail customers and also whether your customers are mostly local or nationwide. We are happy to give you a no-obligation free quotation.',

                    'Comprehensive credit application forms and customised terms of trade\n' +
                    '\n' +
                    'Nobody starts a business relationship intending to see it end in failure. We would like to think a handshake should be sufficient - but often its not.\n' +
                    '\n' +
                    'Are you protected with current terms and conditions? – the fine print that should appear on your Credit Application Form? \n' +
                    '\n' +
                    'Well written Terms and Conditions of Trade should spell out the options available to you if you don’t get paid on time. They should allow you to add penalty interest on overdue accounts and make your customer liable for any collection costs.  Inclusion of a reservation of title also allows you to withhold or repossess your goods or services until your customer pays (if registered on the PPSR).  Add a personal guarantee and your customer has a powerful reason to pay you first. \n' +
                    '\n' +
                    'For an up-to-date Credit Application form and Terms and Conditions of Trade tailor-made to your specific requirements, complete this simple questionnaire and we will give you a no-obligation written quotation.  ',

                    'Have you sold goods that are now in the possession of your customer - but you have not been paid?   Do you own goods which are leased or bailed to someone else?\n' +
                    '\n' +
                    'Do you think you can march in there and recover these goods ahead of your customers\' secured creditors?\n' +
                    '\n' +
                    'Re-think carefully.   In an insolvency or liquidation, your customer could be treated as \'owner\' of the goods, including leased goods, (if your lease is longer than one year).   If you want to get paid in an insolvency, ahead of the banks and unsecured creditors, you should register a charge over the assets you provide to your customers on credit.\n' +
                    '\n' +
                    'Provided your Terms of Trade have the correct clauses, Be Paid Limited can arrange registration of all your completed credit applications or other security documents on the Personal Property Securities Register.\n' +
                    '\n' +
                    'This register is maintained by the Companies Office and can only be accessed on-line.   We have been registering and maintaining security agreements on the register since the register began in 2002.\n' +
                    '\n' +
                    'Be Paid Limited - caring for your most important assets - your customers and your cash.',

                    'Total Customer Care\n' +
                    'A fully outsourced solution and can include any or all of the following services:\n' +
                    '\n' +
                    'Credit checking -  credit check your new credit customers to reduce the risk of default and send them a welcome on-boarding letter.\n' +
                    '\n' +
                    ' Invoicing - process your invoices and have them sent on time so you get paid on time.\n' +
                    '\n' +
                    ' Statements - input payments and send out statements so your customers know what they owe in a timely manner.\n' +
                    '\n' +
                    ' Credit Control - you don\'t  have to ask your customer for money - we will!  (and if we identify problems, we will let you know straight away so you have a chance to fix them).\n' +
                    '\n' +
                    'Debt Collection - if payment is not made when it should, with your permission, we will pursue your debtor in the most economical and effective way we can to get payment in full plus costs.\n' +
                    '\n' +
                    'Reporting -  When using cloud software, you can see activity at any time, see who are your best and worst payers and when we contacted them.   Have an accurate idea of when money should be coming in and how much.  If not using cloud software, we will provide regularly reports.\n' +
                    '\n' +
                    'Customer Answer Service - We can arrange it so that customers call us directly with their account queries and we can sort them for you.\n' +
                    '\n' +
                    'Secure off-site storage of your crucial billing and customer records - your information is safe even if there is a fire or burglary or other disaster at your premises \n' +
                    '\n' +
                    'Reduction of risk of fraud by employees - because we are keeping an eye on the money that is coming in, there is less risk of it being syphoned off by an unscrupulous employee.',


                    'I honestly dont understand what this is',


                    'Background checks covers the verification of someone and the negative records of that someone for employment/tenant screening or general due diligence purposes.\n' +
                    '\n' +
                    'Background investigations can get into an in-depth history and character of a subject.\n' +
                    '\n' +
                    'The kinds of information we can investigate include but are not limited to- past histories with family, neighbors, employers, friends, education, co-workers, professions, professional licenses, and much more. Our background investigations will help you to understand a character and profile of the one you send us to investigate.',




                    'Research Investigation:\n\n' +
                    'Investigators can conduct research in order to find information about companies that you do business with for acquisitions, mergers, joint ventures, venture capital, private equity, and investments. They can also perform in-depth employee background checks.\n\n' +
                    'Financial Investigation:\n\n' +
                    'An investigator conducting a financial investigation can discover embezzlement, money laundering, fraud, and other white collar crime.\n\n' +
                    'Computer & Systems Investigation:\n\n' +
                    'Our team of IT experts can undertake investigations into your computers, tablets, phones and networks, whether to uncover cyber crime, improper dealing, recover lost (or password protected) items, gain access to locked systems or restore lost data.\n' +
                    'We have access to a full forensic data recovery lab and can offer recovery success rates higher than is normally available in the civilian market place.\n' +
                    'We can also advise on systems security and implement measures to secure your network from unwanted action.\n\n' +
                    '' +
                    'Undercover Investigation:\n\n' +
                    'By blending in with the company, an investigator can look into employee misconduct like theft, substance abuse, or harassment. Investigators will often use covert surveillance as a part of their inspection.',




                    'We serve these types of documents:\n\n' +
                    '• District Court Proceedings\n' +
                    '• Divorce Proceedings (Dissolution of Marriage papers)\n' +
                    '• Domestic Related documents\n' +
                    '• Employment Court Proceedings\n' +
                    '• Family Court orders\n' +
                    '• High Court Proceedings\n' +
                    '• Insolvency related documents\n' +
                    '• Judgements\n' +
                    '• New Zealand Family Proceedings Act 1980\n' +
                    '• Orders for Examination\n' +
                    '• Property Law Act Notices\n' +
                    '• Property Related documents\n' +
                    '• Protection Orders\n' +
                    '• Statement of Claim, Notice of Proceeding, List of documents relied on\n' +
                    '• Trespass Notices\n' +
                    '• Witness Summons'
                ],
                Style: [
                    '120vh',
                    '120vh',
                    '120vh',
                    '120vh',
                    '120vh',
                    '120vh',
                    '120vh',
                    '180vh',
                    '120vh',
                    '120vh',
                    '180vh',
                    '120vh'
                ],
                Style2: [
                  '13%',
                    '13%',
                    '13%',
                    '13%',
                    '13%',
                    '7%',
                    '0',
                    '5%',
                    '13%',
                    '13%',
                    '10%',
                    '13%'
                ]
            }
        },
        beforeMount() {
          if(this.$cookie.get('Service') === null) {
              this.CurrentService = 1;
          } else {
              this.CurrentService = this.$cookie.get('Service');
          }

          this.Load = false;


        },

        mounted() {
            let self = this;
            EventBus.$on('Service', changed => {
                console.log("Did this even ping!?");
                self.CurrentService = changed;
            });
        }
    }
</script>

<style scoped>
  .Divider {
    position: absolute;
    bottom: 0;
    width: 100vw;
    z-index: 100;
    transform: translateY(-0.4vh);
  }
  .LineDivider {
    position: absolute;
    background-color: #1d2f6f;
    width: 100%;
    height: 1vh;
    transform: translateY(-0.5vh);
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

  .Diamond {
    border-style: solid;
    border-color: transparent transparent #1d2f6f transparent;
    border-width: 0 1vw 1vw 1vw;
    height: 0;
    width: 2vw;
    box-sizing: content-box;
    position: relative;
    margin: 0.8vw 0 2vw 0;
  }
  #Diamond:after {
    content: "";
    position: absolute;
    top: 1vw;
    left: -1vw;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: #1d2f6f transparent transparent transparent;
    border-width: 2.8vw 2vw 0 2vw;
  }

  .DiamondHolderW {
    position: absolute;
    transform: translate(0.5vw, -1vh) scale(0.9);
  }
  #DiamondW {
    border-style: solid;
    border-color: transparent transparent whitesmoke transparent;
    border-width: 0 1vw 1vw 1vw;
    height: 0;
    width: 2vw;
    box-sizing: content-box;
    position: relative;
    margin: 0.8vw 0 2vw 0;
  }
  #DiamondW:after {
    content: "";
    position: absolute;
    top: 1vw;
    left: -1vw;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: whitesmoke transparent transparent transparent;
    border-width: 2.8vw 2vw 0 2vw;
  }
  .Contact-Top {
    display: inline-block;
    font-size: 1vw;
    color: whitesmoke;
    padding-right: 3vw;

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











  #WholeArea {
    background-image: url("../../assets/images/Patterns/dot-grid-white.png");
    background-size: 15%;
    overflow: hidden;
  }
#PageArea {
  width: 100vw;
  position: relative;
  //margin-bottom: 10vh;
  display: grid;
  grid-template-columns: 20% 70%;
  grid-template-areas: "Left Right";
}
#RightSide {
  position: relative;
  grid-area: Right;
}
#LeftSide {
  grid-area: Left;
  justify-content: center;
  justify-items: center;
  text-align: left;
  color: white;
  padding-left: 1vw;
///background-image: url("../../assets/images/Patterns/dot-grid-blue.png");
  background-image: url("../../assets/images/Patterns/dot-grid-blue.png");
  background-size: 15%;
  width: 20vw;
  height: 105vh;
  margin-bottom: 5vh;
  padding-top: 5vh;
  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;
}
.Title {
  top: 13%;
}
.Title2 {
  line-height: 85%;
  top: 5%
}
.Title3 {
  line-height: 85%;
  top: 0;
}
.Title, .Title2, .Title3 {
  line-height: 85%;
  color: black;
  font-family: 'Play', sans-serif;
  font-size: 5vw;
  font-weight: 700;
  position: absolute;
  left: 20%;
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
}
  .Image {
    position: absolute;
    opacity: 0.4;
    top: -10%;
    left: 0%;
    width: 40%;
  }

  .Desc {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2vw;
    text-align: left;
    position: absolute;
    width: 85%;
    top: 29vh;
    left: 20%;
    padding: 2%;
    background-image: url("../../assets/images/Patterns/dot-grid-white.png");
    border-radius: 25px;
    background-size: 30%;
    -moz-box-shadow: 0 0 10px black;
    -webkit-box-shadow: 0 0 3px black;
    box-shadow: 0 0 5px black;
    white-space: pre-wrap !important; word-break: keep-all; border: 0; background-color: transparent;
  }


  .fade-leave-active,
  .fade-enter-active {
    transition: 1s;
  }
  .fade-enter {
    opacity: 0;
    transform: translate(5%, 100%) scale(1.2);
  }
  .fade-leave-to {
    opacity: 0;
    transform: translate(-5%, 100%) scale(0.8);
  }


</style>