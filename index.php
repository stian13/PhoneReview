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
        #consulta comentarios
        $comentarios = "SELECT * FROM comentarios";
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

    $resultado_consulta_comentarios = $conexion->query($comentarios);

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

        #comentarios

        $comentarios_arrays = array();

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

    $comentarios_arrays =ciclo_agregador($resultado_consulta_comentarios, $comentarios_arrays);

    
    

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
    $comentarios_json = json_encode($comentarios_arrays);

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

        <section class="total-detail">
            
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
            <div>
                <a href="./PhoneReview.html" class="enlases colorgris">Conoce mas sobre nosotros</a>
            </div>
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

    //comentarios
        
    let comentariosTotales = <?php echo $comentarios_json; ?>;
    console.log(comentariosTotales);
</script>
<script src="http://localhost/phonereview/main/code.js" ></script>

</body>
</html>