Vue.component('formError', {
    props: ["texto", "titulo"],
    template: /* html */ `
            <div class="alert alert-danger">
                <div class="container">
                    <div class="alert-icon">
                        <i class="material-icons">error_outline</i>
                    </div>                    
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true"><i class="material-icons">clear</i></span>
                    </button>
                    <b>¡¡Error en la registración!! Completa bien los campos</b>

                    <ul>
                        <li v-for="error in errores">{{error}}</li>
                    </ul>

                </div>
            </div>
            `
})