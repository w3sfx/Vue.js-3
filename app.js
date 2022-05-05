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
            // textColor: '#000',
            // bgColor: '#fff',
            styles: {
                backgroundColor: '#000',
                color: '#fff',
            },
            themeBlack: true
        }
    },

    computed: {
        fullName () {
            return this.name + ' ' + this.lastName
        }
    },

    methods: {
        addCart (product) {
            this.cart.push(product)
        },

        inCart (product) {
            return this.cart.indexOf(product) != -1
        },

        removeCart (product) {
            this.cart = this.cart.filter( (prod, index) => product != prod)
        },

        toogleTheme () {
            this.themeBlack = !this.themeBlack

            if (this.themeBlack) {
                this.styles.backgroundColor = '#000'
                this.styles.color = '#fff'
            }
            else {
                this.styles.backgroundColor = '#fff'
                this.styles.color = '#000'
            }
        }
    },
}

Vue.createApp(app).mount('#app')