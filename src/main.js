import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
// 引入vant所有组件
import Vant from 'vant';
//加载 vant 全局样式
import 'vant/lib/index.css';

//注册使用 vant组件库
Vue.use(Vant);






Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
