<template>
	<div class="row">
		<div class="col-md-6 col-md-offset-3">
			<div class="panel panel-default">
				<div class="panel-body">
					<div class="form-group">
						<input type="email" class="form-control" v-model="email" placeholder="Email">
					</div>
					<div class="form-group">
						<input type="password" class="form-control" v-model="password" placeholder="Password">
					</div>
					<button @click="login" class="btn btn-success pull-right"> Login</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			login() {
				let data = {
					client_id:2,
					client_secret:'V9CBzfq82A7Hc7gpNNkPotzzS2hXkJs8Ffow8bcj',
					grant_type: 'password',
					username: this.email,
					password: this.password
				}
				this.$http.post("oauth/token",data)
					.then(response => {
						console.log(response);
						this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now());
						//redirect to auth page
						this.$router.push('/feed');
					});
					// .then(function(response) {
					// 	console.log(response);
					// });
			}
		}
	}
</script>

<style>
	
</style>