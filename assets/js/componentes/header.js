Vue.component('headerPrincipal', {
    template: `
        <header>
            <nav class="navbar navbar-expand-lg bg-warning">
                <div class="container">
                    <div class="navbar-translate">
                        <h1 class="navbar-brand" href="#">Franco Cinnante VUE.JS</h1>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="navbar-toggler-icon"></span>
                            <span class="navbar-toggler-icon"></span>
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div class="collapse navbar-collapse">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a href="#" class="nav-link" id="btnRegistro" @click="$emit('registro')">
                                    <i class="material-icons">
                                        description
                                    </i> Formulario

                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link" id="btnConfirmacion" @click="$emit('confirmacion')">
                                    <i class="material-icons">
                                        check_circle
                                    </i> Confirmación

                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link" id="btnLogin" @click="$emit('login')">
                                    <i class="material-icons">
                                        description
                                    </i> Login

                                </a>
                            </li>
                        </ul>

                        <form class="form-inline ml-auto">
                            <div class="togglebutton ml-auto">
                                <label>
                                    <input type="checkbox">
                                    <!--checked=""-->
                                    <span class="toggle"></span>
                                    Dark Mode
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    
    `
})