<template>
	<div class="col-md-4">
		<div class="thumbnail">
			<img src="/asset/img/icon.png">

			<div class="caption">
				{{ product.user_id }}
				<h3>{{ product.name }}</h3>
				<p>{{ product.price }}</p>
				<hr>
				<p>
					<a href="#" class="btn btn-default">Wish list</a>
					<a href="#" class="btn btn-success">Buy</a>
				</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: ['product']
	}
</script>