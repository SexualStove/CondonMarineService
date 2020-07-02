<template>
  <div id="QuoteArea">
    <div id="ArrowL">
      <a v-on:click="PrevQuote" class="arrow left"></a>
    </div>
    <div id="Quote">
      <b>"</b>  {{Quotes[CurrentQuote].Quote}}  <b>"</b>
    </div>
    <div id="ArrowR">
      <a v-on:click="NextQuote" class="arrow right"></a>
    </div>
    <div id="By">
      - {{Quotes[CurrentQuote].By}}
    </div>
  </div>
</template>

<script>
    export default {
        name: "HomeRecomendations",
        data () {
            return {
                CurrentQuote: 0,
                Quotes: [
                    {
                        Quote: "Great to deal with, quick and clear communication, with a great result - got paid!  Very helpful and would recommend",
                        By: 'Chris Nelson, Taieri Technology Ltd'
                    },
                    {
                        Quote: 'We\'ve been working with Be Paid Ltd for the past 6 months and its been a game changer for us.  Not only does it save us time but it also allows us to maintain better relationships with our clients, as we\'re not the ones on the end of the phone asking for payment when things have been missed.',
                        By: 'Sam Heath, Managing Director, Nudge Marketing'
                    },
                    {
                      Quote: 'Wonderful to work with when dealing with with our debt collection - has had really good results for us and keeps us well informed as to what is happening with collection.',
                      By: 'Magic Kids Club Ltd'
                    },
                    {
                        Quote: 'We have used the services of Be Paid Ltd since December 2001.  Over that time they have done an excellent job for us.  They treat our clients professionally and with respect while maintaining a disciplined and persistent debt collection process. They have good intuition as to the best approach to take in any situation and communicate well with us as required.  We have found outsourcing this role to be very effective for us and we would recommend Be Paid Ltd.',
                        By: 'Downie Stewart Lawyers'
                    }
                ]
            }
        },
        methods: {
            NextQuote() {
                if(this.CurrentQuote === this.Quotes.length-1) {
                    this.CurrentQuote = 0;
                } else {
                    this.CurrentQuote += 1;
                }
            },

            PrevQuote() {
                if(this.CurrentQuote <= 0) {
                    this.CurrentQuote = this.Quotes.length-1;
                } else {
                    this.CurrentQuote -= 1;
                }
            }
        }
    }
</script>

<style scoped>

  #QuoteArea{
    grid-template-columns: 10% 10% 60% 10% 10%;
    grid-template-areas: 'BorderL ArrowL Quote ArrowR BorderR'
                          'By By By By By';
    display: grid;
    text-align: center;
    padding: 4vw;
    background-image: url("../../assets/images/Patterns/dot-grid-white.png");
    background-size: 15%;
    line-height: 180%;
  }
  #ArrowL {
    grid-area: ArrowL;
    position: relative;
  }
  #ArrowR {
    grid-area: ArrowR;
    position: relative;
  }
  #Quote {
    grid-area: Quote;
    font-family: 'Play', sans-serif;
    font-size: 1.5vw;
  }
  #By {
    grid-area: By;
    font-size: 0.8vw;
    font-family: 'Roboto', sans-serif;
  }









  .arrow {
    position: absolute;
    top: 50%;
    width: 3vmin;
    height: 3vmin;
    background: transparent;
    border-top: 1vmin solid black;
    border-right: 1vmin solid black;
    box-shadow: 0 0 0 lightgray;
    -webkit-transition: all 200ms ease;
    transition: all 200ms ease;
  }
  .arrow.left {
    left: 0;
    -webkit-transform: translate3d(0, -50%, 0) rotate(-135deg);
    transform: translate3d(0, -50%, 0) rotate(-135deg);
  }
  .arrow.right {
    right: 0;
    -webkit-transform: translate3d(0, -50%, 0) rotate(45deg);
    transform: translate3d(0, -50%, 0) rotate(45deg);
  }
  .arrow:hover {
    border-color: #e71d36;
    box-shadow: 0.5vmin -0.5vmin 0 black;
    cursor: pointer;
  }
  .arrow:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-40%, -60%) rotate(45deg);
    transform: translate(-40%, -60%) rotate(45deg);
    width: 200%;
    height: 200%;
  }

  #QuoteArea, * {
    transition: 1s;
  }

  @media screen and (max-width: 1000px) {
    #Quote {
      grid-area: Quote;
      font-family: 'Play', sans-serif;
      font-size: 150%;
    }
    #By {
      grid-area: By;
      font-size: 100%;
      font-family: 'Roboto', sans-serif;
    }
  }
</style>