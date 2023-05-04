<?php
    session_start();
    $varsesion = $_SESSION['usuario'];
    if ($varsesion == null || $varsesion = '') {
        echo 'no existe este usuario';
        die;
    }
    include("./main/conexion.php");
    #creando consulta
    $categorias = "SELECT nombre_categoria, especifico, img_direccion FROM categoria";
    $celulares = "SELECT nombre, link_img FROM celulares";
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
    <link rel="stylesheet" href="http://localhost/phonereview/assets/styles/style.css">
</head>
<body>
<!--Cabecera !-->
    <header>
        <div class="cabecera">
            <section class="section-cabecera">
                <div class="title-principal"><span>Phone</span>Review</div>
            </section>
            <section class="section-pagina ">
                <ul class="lista-secciones">
                    <li class="li">
                        Principal
                    </li>
                    <li>
                        Categorias
                    </li>
                    <li>
                        Nuevos Equipos
                    </li>
                </ul>
            </section>
            <section class="section-login" id="sistem-login">
                <div>
                    <a href="./main/close.php">cerra sesion</a>
                </div>
                <div>
                        <?= $_SESSION['usuario'] ?>
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
    <div class="title ">Categorias</div>
    <div class="box-categorias">
    <div class="conteiner-categorias">

            <?php $resultado = mysqli_query($conexion, $categorias); 
            
            while($row=mysqli_fetch_assoc($resultado)) {?>

                <div class="categoria">
                    <div>
                        <img src="<?php echo $row["img_direccion"]; ?>" alt="" class="img-categoria">
                    </div>
                    <div class="name-categoria">
                        <div><?php echo $row["nombre_categoria"]; ?></div>
                        <div><?php echo $row["especifico"]; ?></div>
                    </div>
                </div>

            <?php }?>

        </div>
    </div>
</section>

<section class="total-detail">
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
        <div class="titulo-pequeño">Caracteristicas</div>
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
            <from class="conteiner-input">
                <input type="text" placeholder="    Comenta" class="input-comentario">
            </from>
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

<!--Celulares-->
<section class="separador">
    <div>
    <div class="title Smart-zone">Smart Zone</div>

        <div class="conteiner-cards-smartphone">

        <?php $resultado = mysqli_query($conexion, $celulares);

        while($row=mysqli_fetch_assoc($resultado)) {?>


            <div class="cards">
                <img src="<?php echo $row["link_img"]; ?>" alt="" class="img-smartphone">
                <div class="name-smartphone"><?php echo $row["nombre"]; ?></div>
                <div class="conteiner-puntuacion">
                    <div>5</div>
                    <span>⭐</span>
                </div>
            </div>

            <?php }?>


            </div>
        </div>
    </div>
</section>

<!--seccion de dispositivos nuevos-->

<section class="separador">
    <div>
    <div class="title Smart-zone amarillo-claro">Nuevos Smartphone</div>
        <div class="conteiner-cards-smartphone">
            <div class="cards color-fondo">
                <img src="./assets/image 20smartphone.png" alt="" class="img-smartphone">
                <div class="name-smartphone">Samsung
                Galaxy A52</div>
                <div class="conteiner-puntuacion">
                    <div>5</div>
                    <span>⭐</span>
                </div>
            </div>

            <div class="cards color-fondo">
                <img src="./assets/image 20smartphone.png" alt="" class="img-smartphone">
                <div class="name-smartphone">Samsung
                Galaxy A52</div>
                <div class="conteiner-puntuacion">
                    <div>5</div>
                    <span>⭐</span>
                </div>
            </div>

            <div class="cards color-fondo">
                <img src="./assets/image 20smartphone.png" alt="" class="img-smartphone">
                <div class="name-smartphone">Samsung
                Galaxy A52</div>
                <div class="conteiner-puntuacion">
                    <div>5</div>
                    <span>⭐</span>
                </div>
            </div>

            <div class="cards color-fondo">
                <img src="./assets/image 20smartphone.png" alt="" class="img-smartphone">
                <div class="name-smartphone">Samsung
                Galaxy A52</div>
                <div class="conteiner-puntuacion">
                    <div>5</div>
                    <span>⭐</span>
                </div>
            </div>

            <div class="cards color-fondo">
                <img src="./assets/image 20smartphone.png" alt="" class="img-smartphone">
                <div class="name-smartphone">Samsung
                Galaxy A52</div>
                <div class="conteiner-puntuacion">
                    <div>5</div>
                    <span>⭐</span>
                </div>
            </div>

            <div class="cards color-fondo">
                <img src="./assets/image 20smartphone.png" alt="" class="img-smartphone">
                <div class="name-smartphone">Samsung
                Galaxy A52</div>
                <div class="conteiner-puntuacion">
                    <div>5</div>
                    <span>⭐</span>
                </div>
            </div>

            <div class="cards color-fondo">
                <img src="./assets/image 20smartphone.png" alt="" class="img-smartphone">
                <div class="name-smartphone">Samsung
                Galaxy A52</div>
                <div class="conteiner-puntuacion">
                    <div>5</div>
                    <span>⭐</span>
                </div>
            </div>
            
            <div class="cards color-fondo">
                <img src="./assets/image 20smartphone.png" alt="" class="img-smartphone">
                <div class="name-smartphone">Samsung
                Galaxy A52</div>
                <div class="conteiner-puntuacion">
                    <div>5</div>
                    <span>⭐</span>
                </div>
            </div>
            </div>
        </div>
    </div>
</section>
<!--detail-smartphone-->


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
<script src ="./main/funciones.js" type="modules"></script>
<script src="./main/maincode.js" type="module"></script>

</body>
</html>