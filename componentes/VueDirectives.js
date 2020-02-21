Vue.component('vue-directives',{
    template:   `<div>
                    <p v-text="text"></p>   
                    <a :href="link.href" v-bind:title="link.title" v-text="link.text"></a>
                </div>`,
    data () {
        return {
            text: 'Texto de prueba v-text',
            link: {
                text: 'Vue JS Home',
                href : 'https://vuejs.org/',
                title: 'Documentacion Vue JS'
            }
        }
    }
})