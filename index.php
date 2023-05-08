<?php
    include("./main/conexion.php");
    #creando consulta
    $categorias = "SELECT nombre_categoria, especifico, img_direccion FROM categoria WHERE id_categoria < 9";
    $celulares = "SELECT * FROM celulares";
    #consulta tipo de categorias
    $categorias_camaras = "SELECT * FROM `celulares` WHERE categoria_id = 1";
    $categorias_gamer = "SELECT * FROM `celulares` WHERE categoria_id = 2";
    $categorias_almacenamiento = "SELECT * FROM `celulares` WHERE categoria_id = 3";
    $categorias_resistentes = "SELECT * FROM `celulares` WHERE categoria_id = 4";
    $categorias_gama_alta = "SELECT * FROM `celulares` WHERE categoria_id = 5";
    $categorias_gama_media = "SELECT * FROM `celulares` WHERE categoria_id = 6";
    $categorias_gama_baja = "SELECT * FROM `celulares` WHERE categoria_id = 7";
    $categorias_multimedia = "SELECT * FROM `celulares` WHERE categoria_id = 8";
    $categorias_nuevo = "SELECT * FROM `celulares` WHERE categoria_id = 9";
    #-------------------------------------------------------


    $resultado_consulta_celulares = $conexion->query($celulares);

    #--resultado-consultas-especidicas---
    $resultado_consulta_categoria = $conexion->query($categorias);


    $resultado_consulta_categoria_camaras = $conexion->query($categorias_camaras);

    $resultado_consulta_categoria_gamer = $conexion->query($categorias_gamer);

    $resultado_consulta_categoria_almacenamiento = $conexion->query($categorias_almacenamiento);

    $resultado_consulta_categoria_resistentes = $conexion->query($categorias_resistentes);

    $resultado_consulta_categoria_gamaalta = $conexion->query($categorias_gama_alta);

    $resultado_consulta_categoria_gamamedia = $conexion->query($categorias_gama_media);

    $resultado_consulta_categoria_gamabaja = $conexion->query($categorias_gama_baja);

    $resultado_consulta_categoria_multimedia = $conexion->query($categorias_multimedia);

    $resultado_consulta_categoria_nuevo = $conexion->query($categorias_nuevo);


#arrays almacen
    $celulares_array = array();
    $categorias_celulares = array();
    #arrays categoria unica celulares

    $categorias_celulares_camaras = array();
    $categorias_celulares_gamer = array();
    $categorias_celulares_alamcenamiento = array();
    $categorias_celulares_resistentes = array();
    $categorias_celulares_gamaalta = array();
    $categorias_celulares_gamamedia = array();
    $categorias_celulares_gamabaja = array();
    $categorias_celulares_multimedia = array();
    $categorias_celulares_nuevo = array();

    function ciclo_agregador($consulta_resultado, $array)
    {
        while ($fila_categorias = 
        $consulta_resultado->fetch_assoc()) {
             $array[] = $fila_categorias;
        } 
        return $array;
    }

    $categorias_celulares_camaras =ciclo_agregador($resultado_consulta_categoria_camaras, $categorias_celulares_camaras);

    $categorias_celulares_gamer =ciclo_agregador($resultado_consulta_categoria_gamer, $categorias_celulares_gamer);

    $categorias_celulares_alamcenamiento =ciclo_agregador($resultado_consulta_categoria_almacenamiento, $categorias_celulares_alamcenamiento);

    $categorias_celulares_resistentes =ciclo_agregador($resultado_consulta_categoria_resistentes, $categorias_celulares_resistentes);

    $categorias_celulares_gamaalta =ciclo_agregador($resultado_consulta_categoria_gamaalta, $categorias_celulares_gamaalta);

    $categorias_celulares_gamamedia =ciclo_agregador($resultado_consulta_categoria_gamamedia, $categorias_celulares_gamamedia);

    $categorias_celulares_gamabaja =ciclo_agregador($resultado_consulta_categoria_gamabaja, $categorias_celulares_gamabaja);

    $categorias_celulares_multimedia =ciclo_agregador($resultado_consulta_categoria_multimedia, $categorias_celulares_multimedia);

    $categorias_celulares_nuevo =ciclo_agregador($resultado_consulta_categoria_nuevo, $categorias_celulares_nuevo);


    
    

    while ($fila_categorias = $resultado_consulta_categoria->fetch_assoc()) {
        $categorias_celulares[] = $fila_categorias;
    }

    while ($fila_celulares = $resultado_consulta_celulares->fetch_assoc()) {
        $celulares_array[] = $fila_celulares;
    }

    


    $celulares_json = json_encode($celulares_array);
    $categorias_json = json_encode($categorias_celulares);

#json resultado categorias

    $camaras_json = json_encode($categorias_celulares_camaras);
    $gamer_json = json_encode($categorias_celulares_gamer);
    $alamcenamiento_json = json_encode($categorias_celulares_camaras);
    $resistentes_json = json_encode($categorias_celulares_resistentes);
    $gamaalta_json = json_encode($categorias_celulares_gamaalta);
    $gamamedia_json = json_encode($categorias_celulares_gamamedia);
    $gamabaja_json = json_encode($categorias_celulares_gamabaja);
    $multimedia_json = json_encode($categorias_celulares_multimedia);
    $nuevo_json = json_encode($categorias_celulares_nuevo);


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PhoneReview</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="stylesheet" href="http://localhost/phonereview/assets/styles/style.css" >
    <link rel="stylesheet" href="http://localhost/phonereview/assets/styles/stylesmarphone.css">
    <link rel="stylesheet" href="http://localhost/phonereview/assets/styles/stylesnewsmarphone.css">
</head>
<body>
<!--Cabecera !-->
    <header>
        <div class="cabecera">
            <section class="section-cabecera">
                <div class="title-principal"><span>Phone</span>Review</div>
            </section>
            <section class="section-pagina ">
                <ul class="lista-secciones" >
                    <li class="li">
                        <a href="#Principal" class="enlases">
                            Smart Zone
                        </a>
                    </li>
                    <li>
                        <a href="#grupo_categorias" class="enlases">
                            Categorias
                        </a>
                    </li>
                    <li>
                        <a href="#equipos_nuevos" class="enlases">
                            Nuevos Equipos
                        </a>
                    </li>
                </ul>
            </section>
            <section class="section-login" id="sistem-login">
                <div id="registro">
                        registrate
                </div>
                <div id="sesion">
                        Iniciar Sesion
                </div>
            </section>
            <!--detail-->

        <section class="total-detail desactivador">

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
                    
                    <div class="caracteristica">
                        <div class="tipo-carateristica">
                            <img src="./assets/iconos/ram.png" alt="">
                            <span>RAM</span>
                        </div>
                        <div class="dato-caracteristica">17 GB</div>
                    </div>

                    <div class="caracteristica">
                        <div class="tipo-carateristica">
                            <img src="./assets/iconos/camara_frontal.png" alt="">
                            <span>Camara Trasera</span>
                        </div>
                        <div class="dato-caracteristica">100 px</div>
                    </div>

                    <div class="caracteristica">
                        <div class="tipo-carateristica">
                            <img src="./assets/iconos/camara_frontal.png" alt="">
                            <span>Camara Frontal</span>
                        </div>
                        <div class="dato-caracteristica">17 GB</div>
                    </div>

                    <div class="caracteristica">
                        <div class="tipo-carateristica">
                            <img src="./assets/iconos/androide.png" alt="">
                            <span>Sistema operativo</span>
                        </div>
                        <div class="dato-caracteristica">Android 12 oreo</div>
                    </div>

                    <div class="caracteristica">
                        <div class="tipo-carateristica">
                            <img src="./assets/iconos/disco-duro.png" alt="">
                            <span>Memoria</span>
                        </div>
                        <div class="dato-caracteristica">Andr256 GB</div>
                    </div>

                    <div class="caracteristica">
                        <div class="tipo-carateristica">
                            <img src="./assets/iconos/androide.png" alt="">
                            <span>Puntos antuntu</span>
                        </div>
                        <div class="dato-caracteristica">100.203.21</div>
                    </div>

                    <div class="caracteristica">
                        <div class="tipo-carateristica">
                            <img src="./assets/iconos/procesador.png" alt="">
                            <span>Procesador</span>
                        </div>
                        <div class="dato-caracteristica">Cualcon snapdragon 850 plus bronce</div>
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

        </section>
        
    </div>
</header>



    <section class="conteiner">
        <div class="conteiner-img-cabecera">
            <div class="capa"></div>
            <img src="./assets/baner/cabeceraImagen.jpg" alt="" class="img-cabecera">
        </div>
    </section>
    

    <!--Categoria dispositivo-->
<section class="separador">
    <div class="title " id = "grupo_categorias">Categorias</div>
    <div class="box-categorias">
        <div class="conteiner-categorias">
            <?php $resultado = mysqli_query($conexion, $categorias); 
            
            while($row=mysqli_fetch_assoc($resultado)) {?>

            <div class="categoria" id="<?php echo $row["especifico"]; ?>">
                <div>
                    <img src="<?php echo $row["img_direccion"]; ?>" alt="" class="img-categoria">
                </div>
                <div class="name-categoria">
                    <div><?php echo $row["nombre_categoria"]; ?></div>
                    <div><?php echo $row["especifico"]; ?></div>
                </div>
            </div>

            <?php } mysqli_free_result($resultado);?>
        </div>
    </div>
</section>



    <!--contenedor de mostrador de categorias-->

    <section class="contendor-mostrador">
        <div class="encajador desactivador" >
                
                <div class="tipo-categoria-title">
                        
                        <p class='titulo'></p>
                        <span class="contenedor-img-cierre">
                            <img src="./assets/iconos/cerrar-ventana.png" alt="" class="salida-categoria">
                        </span>
                </div>

                <div class="conteiner-cards-smartphone">
                            
                </div>
        </div>
    </section>



<!--Celulares-->
<section class="separador">
    <div>
        <div class="title Smart-zone" id="Principal">Smart Zone</div>

            <div class="list-smarphone">
                    

            </div>

        </div>
    </div>
</section>

<!--seccion de dispositivos nuevos-->

<section class="separador">
    <div>
    <div class="title Smart-zone amarillo-claro" id = "equipos_nuevos">Nuevos Smartphone</div>
        <div class="nuevos-smarphones">
                
            </div>
        </div>
    </div>
</section>


<!--Footer-->
<footer>
    <div class="conteiner-footer">
        <div class="content-footer">
            <div>Conoce mas sobre nosotros</div>
            <div><span>Phone</span>Review</div>
            <div>2023</div>
        </div>
    </div>
</footer>

<script>   
    //celulares

    let celulares = <?php echo $celulares_json; ?>;
    
    //categorias
    let categorias = <?php echo $categorias_json; ?>;
    let camaraCategoria = <?php echo $camaras_json; ?>;
    let gamerCategoria = <?php echo $gamer_json; ?>;
    let almacenamientoCategoria = <?php echo $alamcenamiento_json; ?>;
    let resistentesCategoria = <?php echo $resistentes_json; ?>;
    let gamaAltaCategoria = <?php echo $gamaalta_json; ?>;
    let gamaMediaCategoria = <?php echo $gamaalta_json; ?>;
    let gamaBajaCategoria = <?php echo $gamabaja_json; ?>;
    let multimediaCategoria = <?php echo $multimedia_json; ?>;
    let nuevos = <?php echo $nuevo_json; ?>;

</script>
<script src="http://localhost/phonereview/main/code.js" ></script>

</body>
</html>