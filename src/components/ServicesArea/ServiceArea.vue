<template>
  <div id="WholeArea">
    <div style="height: 15vh"></div>
    <div id="PageArea" v-bind:style="{'min-height': this.Style[this.CurrentService]}">
      <img class="Image" v-bind:src="this.images[this.CurrentService]" alt="None">
      <div v-if="this.CurrentService < 6" class="Title">{{this.Title[this.CurrentService]}}</div>
      <div v-if="this.CurrentService >= 6" class="Title2">{{this.Title[this.CurrentService]}}</div>
      <div  ><pre class="Desc">{{this.Desc[this.CurrentService]}}</pre></div>
    </div>
  </div>
</template>

<script>
    import JQuery from 'jquery';
    let $ = JQuery;
    import {EventBus} from "../../App";
    export default {
        name: "ServiceArea",
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
                ],
                Title: [

                    'Ledger Management',
                    'Debt Collection',
                    'Credit Checking',
                    'Invoice | Billing',
                    'Credit Control',
                    'Forms and Terms of Trade',
                    'Personal Property Security Registration and Searches',
                    'Full Customer/Debtor Management'
                ],
                Desc: [


                    'Need some kind of text',


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

                    'We contact your customers on your behalf.  Your customers get regular, personalised serivce, and in most cases they don\'t need to know we are involved, except for paying you sooner!   Fast results that are more cost-effective than in-house credit control. More time to spend on making money - not chasing yesterdays.  A custom-designed credit control service ideally for businesses with 10 to 300 monthly debtors. \n \n'+
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
                    'This register is maintained by the Companies Office and can only be accessed on-line.   We have been registering and maintaining security agreements on the regidster since the register began in 2002.\n' +
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
                    'Reduction of risk of fraud by employees - because we are keeping an eye on the money that is coming in, there is less risk of it being syphoned off by an unscrupulous employee.'
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
                ]
            }
        },
        beforeMount() {
            if(this.$cookie.get('Service') === null) {
                this.CurrentService = 0;
            } else {
                this.CurrentService = this.$cookie.get('Service');
            }
            this.Load = false;


        },

        mounted() {
            if(this.Load === false) {
                $('html, body').animate({
                    scrollTop: $('#PageArea').offset().top
                }, 2000);
                this.Load = true;
            }
            var self = this;

            EventBus.$on('Service', changed => {
                self.CurrentService = changed;

            });
        }
    }
</script>

<style scoped>
  #WholeArea {
    background-image: url("../../assets/images/Patterns/dot-grid-white.png");
    background-size: 15%;
    overflow: hidden;
  }
#PageArea {

  width: 100vw;
  position: relative;
  margin-bottom: 10vh;
}
.Title {
  top: 30%;
}
.Title2 {
  top: 12%;
}
.Title, .Title2 {
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
    top: 2%;
    left: 2%;
    width: 30%;
  }

  .Desc {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2vw;
    text-align: left;
    position: absolute;
    width: 67%;
    top: 55vh;
    left: 20%;
    padding: 1%;
    background-image: url("../../assets/images/Patterns/dot-grid-white.png");
    border-radius: 50px;
    background-size: 30%;
    -moz-box-shadow: 0 0 10px black;
    -webkit-box-shadow: 0 0 3px black;
    box-shadow: 0 0 5px black;
    white-space: pre-wrap !important; word-break: keep-all; border: 0; background-color: transparent;
  }

</style>