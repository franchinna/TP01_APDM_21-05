let btnRegistro = document.getElementById('btnRegistro');
let btnConfirmacion = document.getElementById('btnConfirmacion');

let divRegistro = document.getElementById('registro');
let divConfirmacion = document.getElementById('confirmacion');



btnConfirmacion.onclick = function(){
    
    divRegistro.style.display = 'none';
    divConfirmacion.style.display = 'block';
    this.setAttribute('class', 'btn btn-warning');
    btnRegistro.setAttribute('class', 'btn btn-default');
    
};

btnRegistro.onclick = function(){
    
    divConfirmacion.style.display = 'none';
    divRegistro.style.display = 'block';
    btnConfirmacion.setAttribute('class', 'btn btn-default');
    this.setAttribute('class', 'btn btn-warning');
    
};