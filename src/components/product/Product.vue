<template>
	<div>
		{{ product.name }} | {{ product.price}}
	</div>
</template>
<script>
	export default {
		props: ['product']
	}
</script>