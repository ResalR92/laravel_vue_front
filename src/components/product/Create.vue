<template>
	<div class="row">
		<div class="col-md-8 col-md-offset-2">
			<div class="panel panel-default">
				<div class="panel-body">
					<form @submit.prevent="create">
						<div class="form-group">
							<label>Name</label>
							<input type="text" class="form-control"
								name="name"
								v-validate="'required'"
								v-model="product.name">
							<div class="help-block alert alert-danger" v-show="errors.has('name')">{{ errors.first('name') }}</div>
						</div>
						<div class="form-group">
							<label>Price</label>
							<input type="number" class="form-control" 
								name="price" 
								v-validate="'required|numeric|min_value:1|max_value:50'"
								v-model="product.price">
							<div class="help-block alert alert-danger" v-show="errors.has('price')">{{ errors.first('price') }}</div>
						</div>
						<div class="form-group">
							<label>Description:</label>
							<textarea class="form-control" v-model="product.description"></textarea>
						</div>
						<!-- memastikan semua form terisi divalidasi dengan v-show->logic -->
						<input type="submit" 
							value="Create" 
							class="btn btn-success pull-right">
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				product: {
					name: '',
					price: 0,
					description: ''
				}
			}
		},
		methods: {
			create() {
				//local language
				this.$validator.updateDictionary({
					'id' : {
						attributes: {
							name: 'nama',
							price: 'harga'
						}
					}
				});

				this.$validator.setLocale('id');

				this.$validator.validateAll().then(()=>{
					this.$http.post('api/products',this.product)
						.then(response => {
							// console.log(response);
							this.$router.push('/feed');
					});
				});
			}
		}

	}
</script>