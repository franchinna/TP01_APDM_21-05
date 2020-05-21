Vue.component('confirmacion', {
    props:{
        nombre: String,
        email: String,
        pais: String
    },
    template: /* html */`
     <div id="confirmacion" class="col-md-8 col my-3">
                        <div class="row justify-content-center">
                            <div class="col-md-2 col-6">
                                <img src="assets/images/check-ok.svg" class="rounded" alt="Registracion Exitosa!">
                            </div>

                            <div class="col-12 text-center">
                                <h2>¡Registracion Completa!</h2>
                                <p>¡Bienvenido! {{nombre}}</p>
                            </div>

                            <div class="col-12">
                                <h3>Estos son tus datos</h3>

                                <ul class="row justify-content-center list-group-flush">
                                    <li class="col-md-5 list-group-item">
                                        <span class="material-icons">account_box</span>
                                        {{nombre}}
                                    </li>
                                    <li class="col-md-5 list-group-item">
                                        <span class="material-icons">alternate_email</span>
                                        {{email}}
                                    </li>
                                    <li class="col-md-5 list-group-item">
                                        <span class="material-icons">language</span>
                                        {{pais}}
                                    </li>
                                    <li class="col-md-5 list-group-item">
                                        <span class="material-icons">vpn_key</span>
                                        *********
                                    </li>
                                </ul>

                            </div>

                            <div class="col-12 text-center">
                                <p class="text-muted">Si queres, podes borrar todo haciendo clic <a href="index.html" class="badge badge-danger">aqui</a> <br>o</p>
                                <a class="btn btn-warning" @click="$emit('login')">Inicia sesion con tus datos</a>
                            </div>

                        </div>
                    </div>
`
})