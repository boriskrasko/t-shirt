Vue.component('product', {
	props: {
		premium: {
			type: Boolean,
			requared: true,

		}
	},
	template: `
	<div class="container">
		<div class="row">
			<div class="sm-6">
				<img :src="image" :alt="description">
			</div>
			<div class="sm-6">
				<h1>{{ title }}</h1>
				<p v-if="quanity > 0">In Stock ({{ quanity }})</p>
				<p :style="{color: fontColor}" v-else >Sold Out</p>
				<p>Shipping: {{ shipping }}</p>
				<ul>
					<li v-for="size in sizes">
						{{ size }}
					</li>
				</ul>
				<ul v-for="detail in details">
					<li>
						{{ detail }}
					</li>
				</ul>
				<ul>
					<li class="box-color" :style="{backgroundColor: variant.variantColor}" v-for="variant in variants" @mouseover="variantSelected(variant.variantImage, variant.variantPrice);">
					</li>
				</ul>
				<ul>
					<li>$ {{ price }}</li>
				</ul>

				<button :disabled="quanity == 0"  @click="addQuanity" class="btn btn-dark">+</button>
				<button class="btn">{{ quantitySelected }}</button>
				<button :disabled="quantitySelected == 0" @click="cancelQuanity" class="btn btn-dark">-</button>
				<br>
				<br>
				<button @click="addCart" class="btn btn-primary">Add Cart</button>
				<div>
					<p>Cart ({{ cart }})</p>
				</div>
			</div>
		</div>
	</div>
	` ,
	data() {
		return {
		title: 'T-Shirt',
		image: 'img/g-star-raw-graphic--8-t-shirt-white-flat-back.jpg',
		description: 'T-Shirt',
		sizes: ['XS', 'S', 'M', 'L'],
		details: ['100% cotton'],
		colors: ['White', 'Black'],
		quanity: 4,
		quantitySelected: 0,
		cart:  0,
		fontColor: 'red',
		price: '7.5',
		variants: [
		{
			variantColor: 'White',
			variantImage: 'img/g-star-raw-graphic--8-t-shirt-white-flat-back.jpg',
			variantPrice: '7.5',
			variantQuanity: 4

		},
		{
			variantColor: 'Black',
			variantImage: 'img/g-star-raw-t-shirt-black-model-side.jpg',
			variantPrice: '8.1',
			variantQuanity: 2

		}
		]
	}
	} ,
	methods: {
		variantSelected: function (variantImage, variantPrice) {
			this.image = variantImage, 
			this.price = variantPrice
		},
		addCart: function() {
			this.cart++
		},
		addQuanity: function () {
			this.quantitySelected++;
			this.quanity--
		},
		cancelQuanity: function () {
			this.quantitySelected--;
			this.quanity++
		},
		
	},
	
	computed: {
		shipping() {
			if (this.premium) {
				return "Free"
			}
			return 2.99
		},

	}
})

app = new Vue ({
	el: '#app',
	data: {
		premium: true,
	}
})


