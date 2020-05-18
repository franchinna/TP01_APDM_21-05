const app = new Vue({
    el: '#app',
    methods: {
        changeView(name) {
            this.viewSelected = name;
        }
        
        
    },
    data: {
        viewSelected: 'registro',
        
        formularioPrincipal: {
            nombre: '',
            apellido: '',
            email: '',
            paises: paises,
            paisOrigen: '',
            terms: false,
            
        }
        
    }
})