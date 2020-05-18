Vue.component('confirmacion', {
    props:["texto"],
    template: /* html */`
     <div id="confirmacion" class="col-md-8 col my-3">
                        <div class="row justify-content-center">
                            <div class="col-md-2 col-6">
                                <img src="assets/images/check-ok.svg" class="rounded" alt="Registracion Exitosa!">
                            </div>

                            <div class="col-12 text-center">
                                <h2>¡Registracion Completa!</h2>
                                <p>¡Bienvenido! -Nombre de usuario-</p>
                            </div>

                            <div class="col-12">
                                <h3>Estos son tus datos</h3>

                                <ul class="row justify-content-center list-group-flush">
                                    <li class="col-md-5 list-group-item"><span class="material-icons">account_box</span></li>
                                    <li class="col-md-5 list-group-item"><span class="material-icons">alternate_email</span> email</li>
                                    <li class="col-md-5 list-group-item"><span class="material-icons">language</span> Pais de residencia</li>
                                    <li class="col-md-5 list-group-item"><span class="material-icons">wc</span> Género </li>
                                </ul>

                            </div>

                            <div class="col-12 text-center">
                                <p class="text-muted">Si queres, podes borrar todo haciendo clic <a href="" class="badge badge-danger">aqui</a> <br>o</p>
                                <button class="btn btn-warning">Inicia sesion con tus datos</button>
                            </div>

                        </div>
                    </div>
`
})