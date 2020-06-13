import Vue from 'vue'
import Router from 'vue-router'
//import CreateBlog from '@/components/CreateBlog'
import HomePage from '@/components/Home/HomePage'
import Services from '@/components/ServicesArea/ServicePage'
import ServicesArea from '@/components/ServicesArea/ServiceArea'
import DebtLodgement from '@/components/DebtPage/DebtLodgementPage'
//import App from "../App";
//import OurServices from '@/components/OurServicesGroup/OurServices'
//import ContactUSPage from '@/components/ContactUsGroup/ContactUsPage'
//import Blog from '@/components/Blog'
//import BlogHome from '@/components/BlogHome'
//import Portal from '@/components/Portal/PortalPage'

//import AboutUs from '@/components/AboutUs'


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
        path: '/DebtLodgement',
        name: 'DebtLodgement',
        component: DebtLodgement
    },
    {
      path: '/Services',
      name: 'Services',
      component: Services
    },
    {
      path: '/Services/ServiceArea',
      name: 'ServiceArea',
      component: ServicesArea
    },
  ]
});





/*
{
      path:'/Blog/:blogId',
      name: 'Blog',
      component: Blog
    },
    {
      path:'/Blog',
      name: 'BlogHome',
      component: BlogHome
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUSPage
    },
    {
      path: '/OurServices',
      name: 'OurServices',
      component: OurServices
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/Create',
      name: 'Create',
      component: CreateBlog
    },
    {
      path: '/Portal',
      name: 'Portal',
      component: Portal
    }
 */