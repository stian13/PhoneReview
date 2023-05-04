
//id categorias
const categoriaCamaras = document.querySelector('#Camaras');
const categoriasGamer = document.querySelector('#Gamer');
const categoriaAlamacenamiento = document.querySelector('#Almacenamiento');
const categoriaResistentes = document.querySelector('#Resistentes');
const categoriaGamaAlta = document.querySelector('#Alta');
const categoriaGamaMedia = document.querySelector('#Media');
const categoriaGamaBaja = document.querySelector('#Baja');
const categoriaMultimedia = document.querySelector('#multimedia');
        //Id contenedor donde se mostraran los celulares de la categoria
const conteinerCardsSmartphone = document.querySelector('.conteiner-cards-smartphone');

let dibujo;


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

//-----categorias-----
categorias
camaraCategoria
gamerCategoria
almacenamientoCategoria
resistentesCategoria
gamaAltaCategoria
gamaMediaCategoria
gamaBajaCategoria
multimediaCategoria

/*
    
*/

//--------------------
celulares
function renderPhones(array) {
    for (let i = 0; i < array.length; i++) {
        const linkCelular = array[i].link_img;
        const nombreCelular = array[i].nombre;
        dibujo = `
                    <div class="cards desactivador">
                        <img src="${linkCelular}" alt="" class="img-smartphone">
                        <div class="name-smartphone"> ${nombreCelular} </div>
                        <div class="conteiner-puntuacion">
                            <div>5</div>
                            <span>⭐</span>
                        </div>
                    </div>
                `
        conteinerCardsSmartphone.innerHTML+=dibujo;
    }
}
renderPhones(celulares);




