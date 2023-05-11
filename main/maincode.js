
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
//detail
const totalDetail = document.querySelector('.total-detail');


const conteinerCardsSmartphone = document.querySelector('.conteiner-cards-smartphone');

const cards = document.querySelector('.cards');
const listSmarphone = document.querySelector('.list-smarphone');
const nuevosSmarphones = document.querySelector('.nuevos-smarphones')

principal.appendChild(listSmarphone)
equiposNuevos.appendChild(nuevosSmarphones)

//---------------------detail----------------------------------

const arrayNameCaracteristicas = [
    {nombreCa:'Bateria', ubicacionImg:'http://localhost/phonereview/assets/iconos/bateria.png'},
    {nombreCa:'RAM', ubicacionImg:'http://localhost/phonereview/assets/iconos/ram.png'},
    {nombreCa:'Camara Trasera', ubicacionImg:'http://localhost/phonereview/assets/iconos/camara_trasera.png'},
    {nombreCa:'Camara Frontal', ubicacionImg:'http://localhost/phonereview/assets/iconos/camara_frontal.png'},
    {nombreCa:'Sistema operativo', ubicacionImg:'http://localhost/phonereview/assets/iconos/sistema-operativo.png'},
    {nombreCa:'Puntos anTuTu', ubicacionImg:'http://localhost/phonereview/assets/iconos/antutu.png'},
    {nombreCa:'Procesador', ubicacionImg:'http://localhost/phonereview/assets/iconos/procesador.png'},
    {nombreCa:'Memoria', ubicacionImg:'http://localhost/phonereview/assets/iconos/disco-duro.png'},
]

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

//Detail funcion reder----------
function renderizadoDetail(id, nombre,marca,espacio,cerebro,frontal,trasera,ram,energy,pAntuntu,img,tienda,nameCaracteristica,so) {
    totalDetail.innerHTML='';
    const detailSmartphone = document.createElement('div');
    detailSmartphone.classList.add('detail-smartphone');

    //smarphone img
    const boxSmartphone = document.createElement("div");
    boxSmartphone.classList.add('box-smartphone')

    const imgExit = document.createElement("img");
    imgExit.setAttribute('src', 'http://localhost/phonereview/assets/iconos/cerrar-ventana.png');
    imgExit.classList.add("exit");
    imgExit.addEventListener('click', function () {
        totalDetail.classList.toggle('desactivador')
    })


    const imgSmartphone = document.createElement("img");
    imgSmartphone.setAttribute('src',img);
    imgSmartphone.classList.add('photo-smarphone');

    boxSmartphone.append(imgExit,imgSmartphone);

    //smarphone name
    const nameSmartphoneDetail = document.createElement('div');
    nameSmartphoneDetail.classList.add('name-smartphone-detail');
    nameSmartphoneDetail.innerText=nombre;
    //smarphone puntos 1

    // Crear el elemento <div> con la clase "total-puntos-user"
    const divTotalPuntosUser = document.createElement("div");
    divTotalPuntosUser.classList.add("total-puntos-user");

    const divTexto = document.createElement("div");

    const divPuntos = document.createElement("div");
    divPuntos.classList.add("puntos");
    divPuntos.innerText=5;
    const divPuntuacion = document.createElement("div");
    divTexto.textContent = "Puntuacion de usuarios";

    const spanEstrella = document.createElement("span");
    spanEstrella.textContent = "⭐";

    divPuntos.append(divPuntuacion,spanEstrella);
    divTotalPuntosUser.append(divTexto,divPuntos);

    //smarphone caracteristicas
    const divTituloPequeno = document.createElement("div");
    divTituloPequeno.classList.add("titulo-caracteristica");
    divTituloPequeno.textContent = "Caracteristicas";

    // conteiner-caracteristicas
    const divConteinerCaracteristicas = document.createElement("div");
    divConteinerCaracteristicas.classList.add("conteiner-caracteristicas");
    let datosCaracteristicas = [
        energy,
        ram,
        trasera,
        frontal,
        so,
        pAntuntu,
        cerebro,
        espacio
    ]
    for (let i = 0; i < nameCaracteristica.length, i < datosCaracteristicas.length; i++) {
        const especificacionName = nameCaracteristica[i].nombreCa;
        const ubicacionImg = nameCaracteristica[i].ubicacionImg;
        const datosEquipo = datosCaracteristicas[i]

        const divCaracteristica = document.createElement("div");
        divCaracteristica.classList.add("caracteristica");
        divCaracteristica.setAttribute('title', especificacionName);
        
        const imgCaracteristica = document.createElement("img");
        imgCaracteristica.classList.add("imagen-caracteristica");
        imgCaracteristica.setAttribute('src', ubicacionImg);
        imgCaracteristica.setAttribute('alt', especificacionName);
        imgCaracteristica.setAttribute('title', especificacionName);

        const pDatoCaracteristica = document.createElement("p");
        pDatoCaracteristica.classList.add("dato-caracteristica");
        pDatoCaracteristica.innerText = datosEquipo; 

        divCaracteristica.append(imgCaracteristica, pDatoCaracteristica);
        divConteinerCaracteristicas.appendChild(divCaracteristica);
    }

    // enlace tienda
    const divTienda = document.createElement("div");
    divTienda.classList.add("tienda");

    const divEnlace = document.createElement("div");

    const aTienda = document.createElement("a");
    aTienda.setAttribute('href',tienda);
    aTienda.setAttribute('target','_blank');
    aTienda.classList.add("link-tienda");
    aTienda.textContent = "Tienda oficial del smartphone aquí";

    divEnlace.appendChild(aTienda);
    divTienda.appendChild(divEnlace);

    detailSmartphone.append(boxSmartphone,nameSmartphoneDetail,divTotalPuntosUser,divTituloPequeno,divConteinerCaracteristicas,divTienda)
    totalDetail.appendChild(detailSmartphone);
}

function renderPhones(array, encabezado, ubicacion) {

    for (let i = 0; i < array.length; i++) {
        const linkCelular = array[i].link_img;
        const nombreCelular = array[i].nombre;
        const idTelefono = array[i].id;
        const nombreMarca = array[i].nombre_marca;
        const memoria = array[i].almacenamiento;
        const cpu = array[i].procesador;
        const camaraFrontal = array[i].camara_frontal;
        const camaraTrasera = array[i].camara_trasera;
        const memoryRam = array[i].ram;
        const batery = array[i].bateria;
        const antutuP = array[i].puntaje_antuntu;
        const tienda = array[i].link_tienda;
        const oS = array[i].sistema_operativo;
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
            renderizadoDetail(idTelefono,nombreCelular,nombreMarca,memoria,cpu,camaraFrontal,camaraTrasera,memoryRam,batery,antutuP,linkCelular,tienda,arrayNameCaracteristicas,oS);
            totalDetail.classList.toggle('desactivador')
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




