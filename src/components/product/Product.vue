<template>
	<div class="col-md-4">
		<div class="thumbnail">
			<img :src="'http://localhost:8000/img/'+product.image" class="img-responsive" v-if="product.image">
			<img src="/asset/img/icon.png" v-else>

			<div class="caption">
				<h3>{{ product.name }}</h3>
				<p>{{ product.price }}</p>
				<hr>
				<p>
					<a href="#" class="btn btn-default">Wish list</a>
					<a href="#" class="btn btn-success">Buy</a>
				</p>
				<hr>
				<p v-if="product.user_id == authenticatedUser.id">
					<a href="#" class="btn btn-danger" role="button"
						@click="$emit('delete-product')">
						Delete
					</a>
					<router-link
						:to="'/products/'+product.id+'/edit'"
						class="btn btn-warning"
					>
						Edit						
					</router-link>
				</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: ['product','authenticatedUser']
	}
</script>