import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入布局
import 'lib-flexible';

import Navigation from 'vue-navigation'
Vue.use(Navigation, { router }) // router为路由文件

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
