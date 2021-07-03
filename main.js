import Vue from 'vue'
import App from './App'
import store from './store' //引入Vuex
import device from 'common/device.js' //设备信息
import req from './common/req.js'
import verification from 'common/verify/verification.js' //自定义表单验证

Vue.config.productionTip = false

Vue.prototype.$store = store//Vuex作为全局组件
Vue.use(verification)
Vue.use(device)
Vue.prototype.$req = req

//不直接调用req时，使用的baseUrl
Vue.prototype.$baseUrl = "https://localhost:8080"

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
