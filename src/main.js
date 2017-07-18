import Vue from 'vue'
import App from './App.vue'
import Router from './routes.js'

import VueResource from 'vue-resource'
//register packages globally
import Auth from './packages/auth/Auth.js'

Vue.use(VueResource)
Vue.use(Auth)

//default route http
Vue.http.options.root = 'http://localhost:8000'
//mengirim token ke middleware laravel -> auth:api
Vue.http.headers.common['Authorization'] = 'Bearer '+Vue.auth.getToken()
//interceptors->post processing->HANDLING ERROR->Globally
Vue.http.interceptors.push((request, next) => {
	next(response => {
		if(response.status == 404){
			swal(response.status.toString(),response.body.error,"error");
		} else if(response.status == 500) {
			swal(response.status.toString(),"We are experiencing a problem in our servers!","error");
		}
	})
})

Router.beforeEach(
	(to,from,next) => {
		if(to.matched.some(record => record.meta.forVisitors)) {
			if(Vue.auth.isAuthenticated()) {
				next({
					path: '/feed'
				})
			} else {
				next()
			}
		} 
		else if(to.matched.some(record => record.meta.forAuth)) {
			if(!Vue.auth.isAuthenticated()) {
				next({
					path: '/login'
				})
			} else {
				next()
			}
		}
		else {
			next()
		}
	}
)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
