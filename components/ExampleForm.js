const exampleForm = {
    template: `
        <form action="#" method="post" @submit.prevent="saveData">
            <label>
                Name:
                <input v-model="name" type="text" name="name" placeholder="Nome">

                <div v-if="errors.name">
                    {{ errors.name }}
                </div>
            </label>
            <label>
                Sexo:
                <select name="sexo" v-model="sexo">
                    <option value="">Escolha</option>
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                </select>
            </label>
            <label>
                Descrição:
                <textarea name="description" v-model="description" placeholder="Descrição"></textarea>
            </label>
            <label>
                <input type="checkbox" v-model="agree" name="agree">
                Concordo
            </label>
            <button type="submit">Enviar</button>
        </form>
    `,

    data() {
        return {
            name: 'Wesley Victor',
            sexo: 'M',
            description: 'Desenvolvedor Web Júnior | Laravel',
            agree: true,

            errors: {
                name: ''
            }
        }
    },

    methods: {
        saveData () {
            this.reset()

            if (this.name === '') {
                this.errors.name = 'Informe um valor para o nome'

                return
            }

            console.log(this.name)
            console.log(this.sexo)
            console.log(this.description)
            console.log(this.agree)
        },

        reset () {
            this.errors = {
                name: ''
            }
        }
    }
}

app.component('example-form', exampleForm)