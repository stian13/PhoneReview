
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

const principal = document.querySelector('#Principal');
const equiposNuevos = document.querySelector('#equipos_nuevos');


const conteinerCardsSmartphone = document.querySelector('.conteiner-cards-smartphone');

const cards = document.querySelector('.cards');
const listSmarphone = document.querySelector('.list-smarphone');
const nuevosSmarphones = document.querySelector('.nuevos-smarphones')

principal.appendChild(listSmarphone)
equiposNuevos.appendChild(nuevosSmarphones)


//smart-zone y smartphone neews


        //detail- Detalles del telefono 



        //-----------------------------
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

celulares

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

nuevos

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



//--------------------





   
function renderPhones(array, encabezado, ubicacion) {
    

        for (let i = 0; i < array.length; i++) {
            const linkCelular = array[i].link_img;
            const nombreCelular = array[i].nombre;
            const idTelefono = array[i].id;
            /*
            dibujo = `
                <div class="cards" id = "${idTelefono}">
                    <img src="${linkCelular}" alt="" class="img-smartphone">
                    <div class="name-smartphone"> ${nombreCelular} </div>
                    <div class="conteiner-puntuacion">
                        <div>5</div>
                        <span>⭐</span>
                    </div>
                </div>
            `;
            */
            const divCards = document.createElement('div');
            divCards.classList.add('cards');
            divCards.classList.add(idTelefono);
    
            const imgSmarphone = document.createElement('img');
            imgSmarphone.setAttribute('src', linkCelular);
            imgSmarphone.classList.add('img-smartphone');
    
            const divName = document.createElement('div');
            divName.classList.add('name-smartphone');
            divName.innerHTML = nombreCelular;
    
            const divPuntuacion = document.createElement('div');
            divPuntuacion.classList.add('conteiner-puntuacion');
    
    
            const divPunto = document.createElement('div');
            divPunto.innerText  = "5";
            const spanEstrellita = document.createElement('span');
            spanEstrellita.innerText = "⭐";
            divPuntuacion.append(divPunto, spanEstrellita)
    
            divCards.addEventListener('click', function () {
                console.log(divCards)
            })
    
            divCards.append(imgSmarphone, divName, divPuntuacion);
            
            ubicacion.appendChild(divCards)
        }
    
}

function tipoRenderizasdo(array2, encabezado2, ubicacion2, boleano) {
    if (boleano === true) {
        encajador.classList.toggle('desactivador');
        conteinerCardsSmartphone.innerHTML = '';
        titulo.innerHTML = '';
        titulo.innerHTML = encabezado2;
        renderPhones(array2, encabezado2,ubicacion2)
    } else if (boleano === false) {
        renderPhones(array2, "", ubicacion2)
    }
}    


salidaCategoria.addEventListener('click', function () {
    encajador.classList.toggle('desactivador');
    conteinerCardsSmartphone.innerHTML = '';
})

categoriaCamaras.addEventListener('click', function () {
    tipoRenderizasdo(camaraCategoria,titulosCategorias[0], conteinerCardsSmartphone, true);
});

categoriasGamer.addEventListener('click', function () {
    tipoRenderizasdo(gamerCategoria,titulosCategorias[1], conteinerCardsSmartphone, true)
});

categoriaAlamacenamiento.addEventListener('click', function () {
    tipoRenderizasdo(almacenamientoCategoria,titulosCategorias[2], conteinerCardsSmartphone, true)
});

categoriaResistentes.addEventListener('click', function () {
    tipoRenderizasdo(resistentesCategoria, titulosCategorias[3], conteinerCardsSmartphone, true)
});

categoriaGamaAlta.addEventListener('click', function () {
    tipoRenderizasdo(gamaAltaCategoria, titulosCategorias[4], conteinerCardsSmartphone, true)
});

categoriaGamaMedia.addEventListener('click', function () {
    tipoRenderizasdo(gamaMediaCategoria,titulosCategorias[5], conteinerCardsSmartphone, true)
});

categoriaGamaBaja.addEventListener('click', function () {
    tipoRenderizasdo(gamaBajaCategoria,titulosCategorias[6], conteinerCardsSmartphone, true)
});

categoriaMultimedia.addEventListener('click', function () {
    tipoRenderizasdo(multimediaCategoria,titulosCategorias[7], conteinerCardsSmartphone, true)
});

tipoRenderizasdo(celulares, "", listSmarphone, false);
tipoRenderizasdo(nuevos, "", nuevosSmarphones, false);




