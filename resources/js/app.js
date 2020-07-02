require('./bootstrap');
import weather from './components/Weather.vue';
import Vue from 'vue';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {}



var app = new Vue({
    el: '#app',
    components: {
        weather
    },
    vuetify: new Vuetify()
});
export default new Vuetify(opts)
