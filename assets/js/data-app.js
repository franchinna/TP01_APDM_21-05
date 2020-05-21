const app = new Vue({
    el: '#app',

    methods: {
        changeView(name) {
            this.viewSelected = name;
        },

        formSubmit() {

            this.errores = [];

            if (!this.formularioPrincipal.nombre) {
                    this.errores.push('El campo de nombre esá vacio');
                }

            if (!this.formularioPrincipal.email) {
                this.errores.push('El campo de email esá vacio');
            }

            if (!this.formularioPrincipal.password){
                this.errores.push('El campo de contraseña esá vacio');
            }
            
            if (!this.formularioPrincipal.passwordConfirm){
                this.errores.push('El campo de confirmar contraseña esá vacio');
            }
            
            if(this.formularioPrincipal.passwordConfirm !== this.formularioPrincipal.password){
                this.errores.push('Las contraseñas no coinciden');
            }

            if (!this.errores.length) {
                return this.changeView('confirmacion');
            }
        },

    },
    data: {
        errores: [],
        
        viewSelected: 'registro',

        formularioPrincipal: {
            nombre: null,
            apellido: null,
            email: null,
            password: null,
            passwordConfirm: null,
            paises: paises,
            paisOrigen: null,
            terms: false,

        }

    },

})