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
    
    this.parentElement.setAttribute('class', 'nav-item active');
    btnRegistro.parentElement.setAttribute('class', 'nav-item');
    btnLogin.parentElement.setAttribute('class', 'nav-item');
    btnLoginConfirmacion.parentElement.setAttribute('class', 'nav-item');
    
};

btnRegistro.onclick = function(){
    
    divConfirmacion.style.display = 'none';
    divLogin.style.display = 'none';
    divLoginConfirmacion.style.display = 'none';
    
    divRegistro.style.display = 'block';
    
    btnConfirmacion.parentElement.setAttribute('class', 'nav-item');
    btnLogin.parentElement.setAttribute('class', 'nav-item');
    btnLoginConfirmacion.parentElement.setAttribute('class', 'nav-item');
     this.parentElement.setAttribute('class', 'nav-item active');
    
};

btnLogin.onclick = function(){
    
    divConfirmacion.style.display = 'none';
    divRegistro.style.display = 'none';
    divLoginConfirmacion.style.display = 'none';
    
    divLogin.style.display = 'block';
    
    btnRegistro.parentElement.setAttribute('class', 'nav-item');
    btnConfirmacion.parentElement.setAttribute('class', 'nav-item');
    btnLoginConfirmacion.parentElement.setAttribute('class', 'nav-item');
     this.parentElement.setAttribute('class', 'nav-item active');
    
};

btnLoginConfirmacion.onclick = function(){
    
    divConfirmacion.style.display = 'none';
    divLogin.style.display = 'none';
    divRegistro.style.display = 'none';
    
    divLoginConfirmacion.style.display = 'block';
    
    btnRegistro.parentElement.setAttribute('class', 'nav-item');
    btnConfirmacion.parentElement.setAttribute('class', 'nav-item');
    btnLogin.parentElement.setAttribute('class', 'nav-item');
     this.parentElement.setAttribute('class', 'nav-item active');
    
};