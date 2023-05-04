
//id categorias
const categoriaCamaras = document.querySelector('#Camaras');
const categoriasGamer = document.querySelector('#Gamer');
const categoriaAlamacenamiento = document.querySelector('#Almacenamiento');
const categoriaResistentes = document.querySelector('#Resistentes');
const categoriaGamaAlta = document.querySelector('#Alta');
const categoriaGamaMedia = document.querySelector('#Media');
const categoriaGamaBaja = document.querySelector('#Baja');
const categoriaMultimedia = document.querySelector('#Multimedia');
        //Id contenedor donde se mostraran los celulares de la categoria

const contendorMostrador = document.querySelector('.contendor-mostrador');
const encajador = document.querySelector('.encajador');

const tituloCategoria = document.querySelector('.tipo-categoria-title');
const titulo = document.querySelector('.titulo')
const contenedorImgCierre = document.querySelector('.contenedor-img-cierre');
const salidaCategoria = document.querySelector('.salida-categoria');

const conteinerCardsSmartphone = document.querySelector('.conteiner-cards-smartphone');
const cards = document.querySelector('.cards');

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

const titulosCategorias = [
    "Smartphone con mejores Camaras",
    "Smartphone para usuarios Gamer",
    "Smarphone con Alto Almacenamiento",
    "Smarphone Resistentes",
    "Smarphone Gama Alta",
    "Smartphone gama Media",
    "Smartphone Gama Baja",
    "Smarphone para uso de Multimedia"
];

/*
    
*/
//--------------------

function renderPhones(array,encabezado) {
    encajador.classList.toggle('desactivador');
    conteinerCardsSmartphone.innerHTML = '';
    titulo.innerHTML = '';
    titulo.innerHTML = encabezado;
    for (let i = 0; i < array.length; i++) {
        const linkCelular = array[i].link_img;
        const nombreCelular = array[i].nombre;
        dibujo = `
            <div class="cards">
                <img src="${linkCelular}" alt="" class="img-smartphone">
                <div class="name-smartphone"> ${nombreCelular} </div>
                <div class="conteiner-puntuacion">
                    <div>5</div>
                    <span>⭐</span>
                </div>
            </div>
        `;
        conteinerCardsSmartphone.innerHTML += dibujo;
    }
}


salidaCategoria.addEventListener('click', function () {
    encajador.classList.toggle('desactivador');
    conteinerCardsSmartphone.innerHTML = '';
})

categoriaCamaras.addEventListener('click', function () {
    renderPhones(camaraCategoria,titulosCategorias[0]);
});

categoriasGamer.addEventListener('click', function () {
    renderPhones(gamerCategoria,titulosCategorias[1])
});

categoriaAlamacenamiento.addEventListener('click', function () {
    renderPhones(almacenamientoCategoria,titulosCategorias[2])
});

categoriaResistentes.addEventListener('click', function () {
    renderPhones(resistentesCategoria, titulosCategorias[3])
});

categoriaGamaAlta.addEventListener('click', function () {
    renderPhones(gamaAltaCategoria, titulosCategorias[4])
});

categoriaGamaMedia.addEventListener('click', function () {
    renderPhones(gamaMediaCategoria,titulosCategorias[5])
});

categoriaGamaBaja.addEventListener('click', function () {
    renderPhones(gamaBajaCategoria,titulosCategorias[6])
});

categoriaMultimedia.addEventListener('click', function () {
    renderPhones(multimediaCategoria,titulosCategorias[7])
});



