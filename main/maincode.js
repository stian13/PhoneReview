
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

//elementos internos del detail 

const detailSmartphone = document.querySelector('.detail-smartphone');
const boxSmartphone = document.querySelector(".box-smartphone");
const divTotalPuntosUser = document.querySelector(".total-puntos-user");
const divConteinerCaracteristicas = document.querySelector(".conteiner-caracteristicas");
const conteinerComentarios = document.querySelector('.todos-comentarios');
const divTienda = document.querySelector(".tienda");
const nameSmartphoneDetail = document.querySelector('.name-smartphone-detail');

    //detail-comentarios
const  cajaComentarios = document.querySelector('#caja-comentarios')
const nameUser = document.querySelector('.name-user')
const darPuntuacion = document.querySelector('.dar-puntuacion')

//conteiner smartphones
const conteinerCardsSmartphone = document.querySelector('.conteiner-cards-smartphone');

const inputComentario = document.querySelector('.input-comentario')

const cards = document.querySelector('.cards');
const listSmarphone = document.querySelector('.list-smarphone');
const nuevosSmarphones = document.querySelector('.nuevos-smarphones')

const comentarioResiente = document.querySelector('.resiente')
 
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

const idmovil = document.querySelector('.idmovil')
inputComentario.value = ' ';
idmovil.value = ' ';
darPuntuacion.value = ' ';


//transformador de array a numero 

function conversoDeNumeros(a,lugarDeImpresion) {
    let numeros = a.map(Number);
    numeros = numeros.filter(numero => !isNaN(numero));
    let suma = numeros.reduce((a, b) => a + b, 0);
    let cantidadNumeros = numeros.length;
    let resultado = (suma / cantidadNumeros).toFixed(1);
    lugarDeImpresion.innerText = resultado;
}

//funcion enviar caja de comentarios

function enviarComentari(idForm) {
    var datos = new FormData(idForm);
        
        fetch('./main/save.php',{
            method:'POST',
            body: datos
        })
            .then(res => res.json())
}

//Detail funcion reder----------
function renderizadoDetail(idCell, nombre,marca,espacio,cerebro,frontal,trasera,ram,energy,pAntuntu,img,tienda,nameCaracteristica,so, iniciado) {
    idmovil.innerHTML=' ';
    idmovil.value = idCell;
    //totalDetail.innerHTML='';

    //comentarios
    let idCelphone;
    idCelphone = ' ';
    idCelphone = idCell;
    let comentariosFiltrados = comentariosTotales.filter(function (x) {
        return x.id_celular == idCelphone
    });

    let conteinerPuntos = [];
    
    //img smarphone
        //cierre
    boxSmartphone.innerHTML=' ';
    const imgExit = document.createElement("img");
    imgExit.setAttribute('src', 'http://localhost/phonereview/assets/iconos/cerrar-ventana.png');
    imgExit.classList.add("exit");
    imgExit.addEventListener('click', function () {
        totalDetail.classList.toggle('desactivador')
        boxSmartphone.innerHTML=" ";
        nameSmartphoneDetail.innerHTML=' ';
        divTotalPuntosUser.innerHTML=' ';
        divConteinerCaracteristicas.innerHTML=' ';
        conteinerComentarios.innerHTML= ' ';
        idCelphone = ' ';
        divPuntuacion.innerText=' ';

        inputComentario.value = ' ';
        idmovil.value = ' ';
        darPuntuacion.value = ' ';
    })
        //img celular
    const imgSmartphone = document.createElement("img");
    imgSmartphone.setAttribute('src',img);
    imgSmartphone.classList.add('photo-smarphone');
    
    boxSmartphone.append(imgExit,imgSmartphone);

    //smarphone name
    nameSmartphoneDetail.innerHTML=' ';
    nameSmartphoneDetail.textContent = nombre;

    // Crear el elemento <div> con la clase "total-puntos-user"
    

    const divTexto = document.createElement("div");
    divTexto.textContent = "Puntuacion promedio de usuarios";

    const divPuntos = document.createElement("div");
    divPuntos.classList.add("puntos");
    
    const divPuntuacion = document.createElement("div");
    

    const spanEstrella = document.createElement("span");
    spanEstrella.textContent = "⭐";

    divTotalPuntosUser.innerHTML=' ';
    divPuntos.append(divPuntuacion,spanEstrella);
    divTotalPuntosUser.append(divTexto,divPuntos);

    //smarphone caracteristicas

    // conteiner-caracteristicas

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
    divConteinerCaracteristicas.innerHTML=' ';
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
    conteinerPuntos = [' '];
    conteinerComentarios.innerHTML= ' ';
    for (let i = 0; i < comentariosFiltrados.length; i++) {
        const user = comentariosFiltrados[i].name_user_id;
        const texto = comentariosFiltrados[i].contenido;
        const puntajeDado =  comentariosFiltrados[i].puntaje;
        conteinerPuntos.push(comentariosFiltrados[i].puntaje);
            //comentarios de otros usuarios 
        
        const comentarioUserOther = document.createElement('div')
        comentarioUserOther.classList.add('comentario-user-other');
        const userName = document.createElement('div');
        userName.classList.add('name-use');
        userName.innerText = user;

        const parrafoComentario = document.createElement('div')
        parrafoComentario.classList.add('parrafo');
        parrafoComentario.innerText = texto;

        const cajaPuntos = document.createElement('div')
        cajaPuntos.classList.add('caja-puntos')

        const punto = document.createElement('div')
        punto.innerText = puntajeDado;
        const spanStart = document.createElement('span')
        spanStart.innerText = '⭐';

        cajaPuntos.append(punto,spanStart);

        comentarioUserOther.append(userName,parrafoComentario,cajaPuntos)
        conteinerComentarios.appendChild(comentarioUserOther)
        idCelphone = ' ';
    }
    divPuntuacion.innerText=' ';
    conversoDeNumeros(conteinerPuntos, divPuntuacion)
       
    
    

    // enlace tienda
    
    divTienda.innerHTML= ' ';
    const divEnlace = document.createElement("div");

    const aTienda = document.createElement("a");
    aTienda.setAttribute('href',tienda);
    aTienda.setAttribute('target','_blank');
    aTienda.classList.add("link-tienda");
    aTienda.textContent = "Tienda oficial del smartphone aquí";

    divEnlace.appendChild(aTienda);

    divTienda.appendChild(divEnlace);
    cajaComentarios.addEventListener('submit', function () {
        enviarComentari(cajaComentarios);
        inputComentario.value = ' ';
        idmovil.value = ' ';
        darPuntuacion.value = ' ';
    })
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
        
        // Extraer todos los números de la cadena
        let extractorPuntosAntutu = parseFloat(antutuP.replace(/v9 |[.]/g, ''))
            let ki;
            if (extractorPuntosAntutu <= 450000) {
                 ki = "Bajo"
            } else if (extractorPuntosAntutu > 45000 &&              extractorPuntosAntutu < 800000){
                ki = "Medio"
            }else if (extractorPuntosAntutu > 800000) {
                ki = "Alto"
            }else if (extractorPuntosAntutu == null){
                ki = " "
            }
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


        const divPunto = document.createElement('p');
        divPunto.innerText  = ki;
        divPunto.classList.add('rango')
        
        const nivelAntutu = document.createElement('p')
        nivelAntutu.classList.add('fraseAntutu')
        nivelAntutu.textContent = "Nivel Atuntu";

        const imgAntuntuP = document.createElement('img');
        imgAntuntuP.setAttribute('src', 'http://localhost/phonereview/assets/iconos/antutu.png')
        imgAntuntuP.classList.add('antuntuImg')
        divPuntuacion.append(nivelAntutu, divPunto, imgAntuntuP)

        divCards.addEventListener('click', function () {
            totalDetail.classList.toggle('desactivador')
            renderizadoDetail(idTelefono,nombreCelular,nombreMarca,memoria,cpu,camaraFrontal,camaraTrasera,memoryRam,batery,antutuP,linkCelular,tienda,arrayNameCaracteristicas,oS,usuario);
            
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



