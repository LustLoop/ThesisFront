import 'ant-design-vue/dist/antd.css'
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Antd from 'ant-design-vue'
import * as MathLive from "mathlive/dist/mathlive.mjs"
import MathfieldComponent from "mathlive/dist/vue-mathlive.mjs"

Vue.use(Antd);
Vue.use(MathfieldComponent, MathLive);
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
