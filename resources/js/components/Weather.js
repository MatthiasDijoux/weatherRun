import Axios from "axios";

export default {
    data() {
        return {
            communes: [],
            loading: false,
            items: [],
            select: null,
            search: null,
            title: '',
            labels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
            time: 0,
            weather: {},
            position: {},
            urlApi: 'http://api.weatherstack.com/current?access_key=69cf45bc30e3449af39759460636a290&query=',
            ready: false,
        }
    },
    watch: {
        search: function (val) {
            if (val && val.length > 1) {
                this.loading = true
                // Simulated ajax query
                setTimeout(() => {
                    this.items = this.communes.filter(commune => {
                        let _commune = commune.nom || '';
                        let _communeToLowerCase = _commune.toLowerCase();
                        let _searchValueToLowercase = val.toLowerCase();
                        return _communeToLowerCase.indexOf(_searchValueToLowercase) != -1

                    })
                    this.loading = false

                }, 500)
            }
        },
    },
    created() {
        this.initialize();
        this.getCurrentPosition();
    },
    methods: {
        initialize() {
            Axios.get('http://geo.api.gouv.fr/departements/974/communes?fields=codesPostaux&format=json&geometry=centre').then(response => {
                response.data.forEach(commune => {
                    this.communes.push(commune)
                })
            })


        },
        getCurrentPosition() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    this.position = position.coords;
                    console.log(this.position)

                    Axios.get(this.urlApi + this.position.latitude + ',' + this.position.longitude).then(response => {
                        this.weather = response.data
                        this.ready = true
                        const d = new Date(this.weather.location.localtime)
                        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                        this.weather.location.localtime = d.toLocaleDateString("fr-Fr", options)
                    })
                })
            }
        },
        getWeather(select) {

            this.title = select.nom
            Axios.get(this.urlApi + select.nom).then(response => {
                this.weather = response.data
                this.ready = true
                const d = new Date(this.weather.location.localtime)
                var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                this.weather.location.localtime = d.toLocaleDateString("fr-Fr", options)
            })
        }
    },

};