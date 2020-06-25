<template>
  <div style="position: fixed; z-index: 9;" >

      <div >

        <nav role="navigation" >

          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu" >
              <router-link   to="/">
              <li class="MainItem"><a class="a" href="#">Home</a></li>
              </router-link>
              <router-link   to="/Services">
              <li style="padding-bottom: 5px;" class="MainItem"><a class="a" href="#">Our Services</a></li>
              </router-link>
              <router-link  to="/Services/ServiceArea">
                <li v-on:click="ChangeService(1)"><a class="a" href="#">Debt Collections</a></li>
              </router-link>
              <router-link  to="/Services/ServiceArea">
                <li v-on:click="ChangeService(0)"><a class="a" href="#">Ledger Management</a></li>
              </router-link>
              <router-link  to="/Services/ServiceArea">
                <li v-on:click="ChangeService(2)"><a class="a" href="#">Credit Checking</a></li>
              </router-link>
              <router-link  to="/Services/ServiceArea">
                <li v-on:click="ChangeService(3)"><a class="a" href="#">Invoice | Billing</a></li>
              </router-link>
              <router-link  to="/Services/ServiceArea">
                <li v-on:click="ChangeService(4)"><a class="a" href="#">Credit Controls</a></li>
              </router-link>
              <router-link  to="/Services/ServiceArea">
                <li v-on:click="ChangeService(5)"><a class="a" href="#">Credit application forms and Terms</a></li>
              </router-link>
              <router-link  to="/Services/ServiceArea">
                <li v-on:click="ChangeService(5)"><a class="a" href="#">of the trade</a></li>
              </router-link>
              <router-link  to="/Services/ServiceArea">
                <li v-on:click="ChangeService(6)"><a class="a" href="#">P P S R</a></li>
              </router-link>
              <router-link  to="/Services/ServiceArea">
                <li v-on:click="ChangeService(7)"><a class="a" href="#">Full Customer/Debtor Management</a></li>
              </router-link>
              <router-link  to="/Services/ServiceArea">
                <li v-on:click="ChangeService(8)"><a class="a" href="#">Family/Marriage Issues</a></li>
              </router-link>
              <router-link  to="/Services/ServiceArea">
                <li v-on:click="ChangeService(9)"><a class="a" href="#">Background checks</a></li>
              </router-link>
              <router-link  to="/Services/ServiceArea">
                <li v-on:click="ChangeService(10)"><a class="a" href="#">Investigations </a></li>
              </router-link>
              <router-link  to="/Services/ServiceArea">
                <li v-on:click="ChangeService(11)"><a class="a" href="#">Document Serving </a></li>
              </router-link>
              <router-link  to="/#ContactUs">
              <li class="MainItem"><a class="a" href="#">Contact Us</a></li>
              </router-link>
              <router-link  to="/DebtLodgement">
                <li class="MainItem"><a class="a" href="#">Debt Lodgement</a></li>
              </router-link>
            </ul>
          </div>
        </nav>
      </div>
    </div>

</template>

<script>
    import {EventBus} from "../../App";

    export default {
        name: "HomePageMobile",
      data() {
        return {

        }
      },
        methods: {
            ChangeService(Int)
            {
                this.$cookie.set('Service', Int, {expires: '10m'});
                EventBus.$emit('Service', Int);
            }
        }

    }
</script>

<style scoped>
  #Logo {

    width: 70%;
    height:12%;
    left: 25%;
    position: absolute;
  }
  .a {
    text-decoration: none;
    color: #1E1E23;
    opacity:1;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1.4em;
    padding-left: 20px;
    transition: 200ms;
    text-shadow: 0.001em 0.001em forestgreen;
    width: auto;
  }
  .a:hover {
    opacity:0.5;
  }
  ul {
    padding: 0;
    list-style-type: none;
  }


  nav {
    background-color: transparent;
    height: 65px;
    position: sticky;
  }


  #menuToggle {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 25px;
    left: 25px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;

  }

  #menuToggle input
  {
    display: flex;
    width: 40px;
    height: 32px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }

  #menuToggle span
  {
    display: flex;
    width: 29px;
    height: 2px;
    margin-bottom: 5px;
    position: relative;
    background: #859e30;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 5px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
    background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
    opacity 0.55s ease;
  }

  #menuToggle span:first-child
  {
    transform-origin: 0% 0%;
  }

  #menuToggle span:nth-last-child(2)
  {
    transform-origin: 0% 100%;
  }

  #menuToggle input:checked ~ span
  {
    opacity: 1;
    transform: rotate(45deg) translate(-3px, -1px);
    background: #36383F;
  }
  #menuToggle input:checked ~ span:nth-last-child(3)
  {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  #menuToggle input:checked ~ span:nth-last-child(2)
  {
    transform: rotate(-45deg) translate(0, -1px);
  }

  input:checked ~ #menu {
    transition: 1s;
    box-shadow: 0px 0px 100vw #444444;
  }
  #menu
  {

    position: absolute;
    width: 300px;
    height: 100vh;

    margin: -50px 0 0 -50px;
    padding-left: 20px;
    padding-top: 90px;
    background-color: #F5F6FA;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transform: translate(-100%, 0);
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    background-image: url("../../assets/images/Patterns/dot-grid-blue.png");
    background-size: 15%;
  }

  #menu .MainItem
   {
     padding-top: 15px;
     padding-bottom: 5px;
     transition-delay: 2s;
    font-size: 1.7em;
   }

  #menu .SecondItem
  {
    transition-delay: 2s;
  }

  #menuToggle input:checked ~ ul
  {
    transform: none;

  }
</style>
