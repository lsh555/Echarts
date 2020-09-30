import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'

import './assets/css/global.scss'
import './assets/font/iconfont.css'
Vue.config.productionTip = false
//请求基准路径的配置
axios.defaults.baseURL = `http://127.0.0.1:8888/api/`
Vue.prototype.$http =  axios
//对服务端进行连接
import SocketService from '../utils/socket_service'
SocketService.Instance.connect()
// 其他的组件  this.$socket
Vue.prototype.$socket = SocketService.Instance

//将全局的echars挂载到原型
Vue.prototype.$echarts = window.echarts
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
