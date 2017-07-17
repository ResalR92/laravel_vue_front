export default function(Vue) {
	let authenticatedUser = {};

	Vue.auth = {
		//set token
		setToken(token, expiration) {
			localStorage.setItem('token',token);
			localStorage.setItem('expiration',expiration);
		},
		//get token
		getToken() {
			let token = localStorage.getItem('token');
			let expiration = localStorage.getItem('expiration');

			if(!token || ! expiration) {
				return null;
			}

			if(Date.now() > parseInt(expiration)) {
				this.destroyToken();
				return null;
			}
			else{
				return token;
			}
		},
		//destroy token -> logout
		destroyToken() {
			localStorage.remove('token');
			localStorage.remove('expiration');
		},

		//isAuthenticated
		isAuthenticated() {
			if(this.getToken()) {
				return true;
			} else {
				return false;
			}
		},
		//relation product and user
		setAuthenticatedUser(data) {
			authenticatedUser = data;
		},
		getAuthenticatedUser() {
			return authenticatedUser;
		}
	}

	Object.defineProperties(Vue.prototype, {
		$auth: {
			get() {
				return Vue.auth
			}
		}
	})
}