import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from '@/router/routes.js'


Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'hash',
	routes
})

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')