const app = {
    data () {
        return {
            title: 'Vue.js 3',
            name: 'Wesley',
            lastName: 'Victor - W3SFX',
            products: [
                {
                    title: 'Filme 01',
                    description: 'Filme muito legal',
                    image: './assets/images/Filme 01.jpg',
                    stars: 3,
                },
                {
                    title: 'Filme 02',
                    description: 'Filme muito legal (2)',
                    image: './assets/images/Filme 02.png',
                    stars: 0,
                },
            ],
            cart: [],
        }
    },

    methods: {
        addCart (product) {
            this.cart.push(product)
        }
    },
}

Vue.createApp(app).mount('#app')