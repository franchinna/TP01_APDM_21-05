let btnRegistro = document.getElementById('btnRegistro');
let btnConfirmacion = document.getElementById('btnConfirmacion');
let btnLogin = document.getElementById('btnLogin');
let btnLoginConfirmacion = document.getElementById('btnLoginConfirmacion');

let divRegistro = document.getElementById('registro');
let divConfirmacion = document.getElementById('confirmacion');
let divLogin = document.getElementById('login');
let divLoginConfirmacion = document.getElementById('loginConfirmacion');



btnConfirmacion.onclick = function(){
    
    divRegistro.style.display = 'none';
    divLogin.style.display = 'none';
    divLoginConfirmacion.style.display = 'none';
    
    divConfirmacion.style.display = 'block';
    
    this.setAttribute('class', 'btn btn-warning');
    btnRegistro.setAttribute('class', 'btn btn-default');
    btnLogin.setAttribute('class', 'btn btn-default');
    btnLoginConfirmacion.setAttribute('class', 'btn btn-default');
    
};

btnRegistro.onclick = function(){
    
    divConfirmacion.style.display = 'none';
    divLogin.style.display = 'none';
    divLoginConfirmacion.style.display = 'none';
    
    divRegistro.style.display = 'block';
    
    btnConfirmacion.setAttribute('class', 'btn btn-default');
    btnLogin.setAttribute('class', 'btn btn-default');
    btnLoginConfirmacion.setAttribute('class', 'btn btn-default');
    this.setAttribute('class', 'btn btn-warning');
    
};

btnLogin.onclick = function(){
    
    divConfirmacion.style.display = 'none';
    divRegistro.style.display = 'none';
    divLoginConfirmacion.style.display = 'none';
    
    divLogin.style.display = 'block';
    
    btnRegistro.setAttribute('class', 'btn btn-default');
    btnConfirmacion.setAttribute('class', 'btn btn-default');
    btnLoginConfirmacion.setAttribute('class', 'btn btn-default');
    this.setAttribute('class', 'btn btn-warning');
    
};

btnLoginConfirmacion.onclick = function(){
    
    divConfirmacion.style.display = 'none';
    divLogin.style.display = 'none';
    divRegistro.style.display = 'none';
    
    divLoginConfirmacion.style.display = 'block';
    
    btnRegistro.setAttribute('class', 'btn btn-default');
    btnConfirmacion.setAttribute('class', 'btn btn-default');
    btnLogin.setAttribute('class', 'btn btn-default');
    this.setAttribute('class', 'btn btn-warning');
    
};