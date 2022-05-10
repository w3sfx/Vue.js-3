const productDetail = {
    template: `
        <p>{{ product.title }}</p>
        <img :src="product.image" :alt="product.title" style="max-width: 100px;">
        <strong v-if="product.stars > 0">{{ product.stars }}</strong>

        <button
            @click.prevent="addCart(product)"
            :disabled="productInCart"
            :class="['color', {'button-disabled' : productInCart}]">
            ADD CART
        </button>
    `,

    //props: ['product', 'productInCart'],
    props: {
        product: {
            type: Object,
            required: true,
        },

        productInCart: {
            type: Boolean,
            required: true,
        }
    },

    data() {
        return {
            example: 123,
        }
    },

    methods: {
        addCart (product) {

        }
    },
}

app.component('product-detail', productDetail)