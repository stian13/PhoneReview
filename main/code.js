
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
const titulo = document.querySelector('.titulo');
const contenedorImgCierre = document.querySelector('.contenedor-img-cierre');
const salidaCategoria = document.querySelector('.salida-categoria');

const principal = document.querySelector('#Principal');
const equiposNuevos = document.querySelector('#equipos_nuevos');

const totalDetail = document.querySelector('.total-detail');

const conteinerCardsSmartphone = document.querySelector('.conteiner-cards-smartphone');

const cards = document.querySelector('.cards');
const listSmarphone = document.querySelector('.list-smarphone');
const nuevosSmarphones = document.querySelector('.nuevos-smarphones');

principal.appendChild(listSmarphone)
equiposNuevos.appendChild(nuevosSmarphones)

//---------------------detail----------------------------------

const arrayNameCaracteristicas = [
    {nombreCa:'Bateria', ubicacionImg:'../assets/iconos/bateria.png'},
    {nombreCa:'RAM', ubicacionImg:'../assets/iconos/ram.png'},
    {nombreCa:'Camara Trasera', ubicacionImg:'../assets/iconos/camara_trasera.png'},
    {nombreCa:'Camara Frontal', ubicacionImg:'../assets/iconos/camara_trasera.png'},
    {nombreCa:'Sistema operativo', ubicacionImg:'../assets/iconos/androide.png'},
    {nombreCa:'Puntos anTuTu', ubicacionImg:'../assets/iconos/'},
    {nombreCa:'Procesador', ubicacionImg:'../assets/iconos/procesador.png'},
    {nombreCa:'Memoria', ubicacionImg:'../assets/iconos/disco-duro.png'},
]



//smart-zone y smartphone neews


        /*detail- Detalles del telefono 

        <div class="detail-smartphone">

                <!--smarphone img-->
                <div class="box-smartphone">
                    <img src="" alt="" class="exit">
                    <img src="" alt="" class="photo-smarphone">
                </div>

               <!--smarphone name-->
                <div class="name-smartphone-detail">Samsung Galaxy A52</div>

                <!--smarphone puntos 1-->
                <div class="total-puntos-user">
                    <div>Puntuacion de usuarios</div>
                    <div class="puntos">
                        <div>4</div><span>⭐</span>
                    </div>
                </div>

                <!--smarphone caracteristicas-->
                <div class="titulo-pequeño " >Caracteristicas</div>

                    <div class="conteiner-caracteristicas">

                        <div class="caracteristica">
                            <div class="tipo-carateristica">
                                <img src="./assets/iconos/bateria.png" alt="">
                                <span>Bateria</span>
                            </div>
                            <div class="dato-caracteristica">5000 mAh</div>
                        </div>

                </div>

                <!--smarphone comentarios-->
                <div class="titulo-pequeño">Comentarios</div>
                
                <form class="comentario-user">
                    <div class="name-user">Pepito</div>
                    <div class="conteiner-input">
                        <input type="text" placeholder="    Comenta" class="input-comentario">
                    </div>
                    <label for="" class="label-puntos">Da una puntuacion</label>
                    <select name="numero" id="numero" class="dar-puntuacion">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input type="submit" value="Enviar" class="boton-enviar">
                </form>
                
                <div class="todos-comentarios">
            <div class="comentario-user-other">
                <div class="name-use">gabriel</div>
                    <div class="parrafo">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium numquam quae minima, sint consequatur quasi voluptatibus amet tenetur natus, sit a recusandae quisquam, dolore illo mollitia est. Dolore, vero ipsum.
                    </div>
                    <div class="caja-puntos">
                        <div>5</div>
                        <samp>⭐</samp>
                    </div>
                </div>
                <div class="comentario-user-other">
                    <div class="name-use">gabriel</div>
                        <div class="parrafo">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium numquam quae minima, sint consequatur quasi voluptatibus amet tenetur natus, sit a recusandae quisquam, dolore illo mollitia est. Dolore, vero ipsum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate porro hic tempora minima magnam quae? Quisquam, ipsa? Alias id quisquam odit sapiente eveniet minus molestiae, maxime nulla odio quidem reprehenderit.
                        </div>
                        <div class="caja-puntos">
                            <div>5</div>
                            <samp>⭐</samp>
                        </div>
                    </div>
                </div>
                <!--smarphone tienda oficial-->
                <div class="tienda">
                    <div>
                        <a href="" class="link-tienda">Tienda oficial del smartphone aqui</a>
                    </div>
                </div>
            </div>


        */

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

function renderizadoDetail(id, nombre,marca,espacio,cerebro,frontal,trasera,ram,energy,pAntuntu,img,tienda,nameCaracteristica,so) {
    const detailSmartphone = document.createElement('div');
    detailSmartphone.classList.add('detail-smartphone');

    //smarphone img
    const boxSmartphone = document.createElement("div");
    boxSmartphone.classList.add('box-smartphone')

    const imgExit = document.createElement("img");
    imgExit.setAttribute('src', '../assets/iconos/cerrar-ventana.png');
    imgExit.classList.add = ('exit');

    const imgSmartphone = document.createElement("img");
    imgSmartphone.setAttribute('src',img);
    imgSmartphone.classList.add = ('photo-smarphone');

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
    divTituloPequeno.classList.add("titulo-pequeño");
    divTituloPequeno.textContent = "Caracteristicas";

    // conteiner-caracteristicas
    const divConteinerCaracteristicas = document.createElement("div");
    divConteinerCaracteristicas.classList.add("conteiner-caracteristicas");
    for (let i = 0; i < nameCaracteristica.length; i++) {
        const especificacionName = nameCaracteristica[i].nombreCa;
        const ubicacionImg = nameCaracteristica[i].ubicacionImg;

        const divCaracteristica = document.createElement("div");
        divCaracteristica.classList.add("caracteristica");
        

        const divTipoCaracteristica = document.createElement("div");
        divTipoCaracteristica.classList.add("tipo-caracteristica");
    
        const imgCaracteristica = document.createElement("img");
        imgCaracteristica.setAttribute('src', ubicacionImg);
    
        const spanNameCaracteristica = document.createElement("span");
        spanNameCaracteristica.innerText = especificacionName;

        const divDatoCaracteristica = document.createElement("div");
        divDatoCaracteristica.classList.add("dato-caracteristica");
    
        divTipoCaracteristica.append(imgCaracteristica,spanNameCaracteristica);
        divCaracteristica.append(divTipoCaracteristica,divDatoCaracteristica);
        divConteinerCaracteristicas.appendChild(divCaracteristica);
        
    }

    // enlace tienda
    const divTienda = document.createElement("div");
    divTienda.classList.add("tienda");

    const divEnlace = document.createElement("div");

    const aTienda = document.createElement("a");
    aTienda.setAttribute('src',tienda);
    aTienda.classList.add("link-tienda");
    aTienda.textContent = "Tienda oficial del smartphone aquí";

    divEnlace.appendChild(aTienda);
    divTienda.appendChild(divEnlace);

    detailSmartphone.append(boxSmartphone,nameSmartphoneDetail,divTotalPuntosUser,divTituloPequeno,divConteinerCaracteristicas,divTienda)
    totalDetail.appendChild(detailSmartphone);
}

//--------------------   
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




