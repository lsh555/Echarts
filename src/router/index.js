import Vue from 'vue'
import Router from 'vue-router'

// const SellerPage =() =>import('../views/SellerPage')
// const TrendPage = () =>import('../views/TrendPage')
// const MapPage = () =>import('../views/MapPage')
// const RankPage = () =>import('../views/RankPage')
// const HotPage= () =>import('../views/HotPage')
// const StockPage = () =>import('../views/StockPage')
const ScreenPage = () =>import('../views/ScreenPage')
Vue.use(Router)


 const routes=[
    {
      path: '',
      redirect:'/screenpage',
    },
    // {
    //   path : '/sellerpage',
    //   component:SellerPage,
    // },
    // {
    //   path : '/trendpage',
    //   component:TrendPage,
    // },
    // {
    //   path : '/mappage',
    //   component:MapPage,
    // },
    // {
    //   path : '/rankpage',
    //   component:RankPage,
    // },
    // {
    //   path : '/hotpage',
    //   component:HotPage,
    // },
    // {
    //   path : '/stockpage',
    //   component:StockPage,
    // },
    {
      path : '/screenpage',
      component:ScreenPage,
    }
   
    
  ]
  const router =new Router({
    routes
  })

  export default router

