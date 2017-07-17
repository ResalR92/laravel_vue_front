<template>
	<div class="row">
		<my-product 
			v-for="product in products" 
			:authenticatedUser="authenticatedUser"
			:product="product">
		</my-product>
	</div>
</template>

<script>
	import Product from './Product.vue'

	export default {
		data() {
			return {
				products: []
			}
		},
		computed: {
			authenticatedUser() {
				return this.$auth.getAuthenticatedUser();
			}
		},

		created() {
			this.$http.get('api/products')
			.then(response => {
						// console.log(response);
						this.products = response.body
					});
		},
		components: {
			'my-product' : Product
		}
	}
</script>