const app = {
    data () {
        return {
            name: 'Wesley',
            lastName: 'Victor - W3SFX',
            product: {
                title: 'Filme 01',
                description: 'Filme muito legal',
                image: './assets/images/Filme 01.jpg',
            },
            product2: {
                title: 'Filme 02',
                description: 'Filme muito legal (2)',
                image: './assets/images/Filme 02.png',
            }
        }
    }
}

Vue.createApp(app).mount('#app')