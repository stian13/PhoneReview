import {llamado} from './funciones.js';
//Funciones de boton de refireccion de a paginas de registros

//registro y login

const botonSesion = document.querySelector('#sesion');
const botonRegistro = document.querySelector('#registro')
let experimento = document.querySelector('.li');
function redirectorRegistroLogin(boton) {
    if (boton == botonRegistro) {
        window.location.href='./main/singup.html'
    }else if(boton == botonSesion){
        window.location.href='./main/login.html'
    }
}
/*
botonRegistro.addEventListener('click', function(){
    redirectorRegistroLogin(botonRegistro);
});
*/
botonRegistro.addEventListener('click', function(event) {
    event.preventDefault();
    redirectorRegistroLogin(botonRegistro);
  });
botonSesion.addEventListener('click', function(event) {
    event.preventDefault();
    redirectorRegistroLogin(botonSesion);
  });

  experimento.addEventListener('click', function () {
    llamado()
})







