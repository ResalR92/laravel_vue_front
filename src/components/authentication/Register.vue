<template>
	<div class="row">
		<div class="col-md-6 col-md-offset-3">
			<div class="panel panel-default">
				<div class="panel-body">
					<div class="form-group">
						<input type="text" class="form-control" v-model="name" placeholder="Name">
					</div>
					<div class="form-group">
						<input type="email" class="form-control" v-model="email" placeholder="Email">
					</div>
					<div class="form-group">
						<input type="password" class="form-control" v-model="password" placeholder="Password">
					</div>
					<button class="btn btn-success pull-right"> Register</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				email: '',
				password: ''
			}
		}
	}
</script>

<style>
	
</style>