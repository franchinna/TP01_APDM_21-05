Vue.component('userLogin', {
    props: [],
    template: `
                    <div id="login" class="col-md-6 col my-3">
                        <div class="card card-nav-tabs text-center">
                            <div class="card-header card-header-warning">
                                <h3 class="card-title">¡Bienvenido al sitio!</h3>
                            </div>
                            <div class="card-body">

                                <small class="text-muted">Por favor, ingresa tu email y contraseña</small>

                                <form class="row justify-content-center">
                                    <div class="col-md-10 col-12">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Dirección de Email</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresá tu email">
                                            <small id="emailHelp" class="form-text text-muted">Nunca compartiremos su correo electrónico con nadie.</small>
                                        </div>
                                    </div>

                                    <div class="col-md-10 col-12">
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Ingresá tu Password">
                                        </div>

                                    </div>
                                    <div class="col-md-8 col-12">
                                        <button type="submit" class="btn btn-warning">Ingresar al sitio</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
`
})