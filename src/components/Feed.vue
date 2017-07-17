<template>
	<h1>Feed</h1>
</template>

<script>
	export default {
		data() {
			return {
				products: []
			}
		},
		created() {
			this.$http.get('api/products')
			.then(response => {
						console.log(response);
					});
		}
	}
</script>