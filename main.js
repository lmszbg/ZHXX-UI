import Vue from 'vue'
import App from './App'
import store from './store'  
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    el: '#app',
		store,
		components: { App },
		template: '<App/>',
		render: h => h(App)
})
app.$mount()
