import Vue from 'vue'
//import HomePage from '@/components/Home/HomePage'
//import MenuPage from '@/components/MenuPage/RealMenuPage'
import Router from 'vue-router'
import SendOrder from "../components/MenuPage/SendOrder";
const HomePage = () => import('@/components/Home/HomePage');
const MenuPage = () => import('@/components/MenuPage/RealMenuPage');
Vue.use(Router);
export default new Router({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) { // if has a hash...
            return { selector: to.hash } // scroll to the element
        } if(savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [
        {
            path: '',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/Menu',
            name: 'MenuPage',
            component: MenuPage
        },
        {
            path: "/SendOrder",
            name: "SendOrder",
            component: SendOrder
        }
    ]
})