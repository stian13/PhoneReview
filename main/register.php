
<?php
/*
    $nombre = $_POST['nombre'];
    $contraseña = $_POST['contraseña'];
    $respuesta = "gracias por registrarse usuario $nombre y su contraseña $contraseña";
*/
    #conexion a la base de datos 
    $server = "localhost";
    $user = "sebas";
    $pass = "12345";
    $database = "phonereview";

    $conn = mysqli_connect($server, $user, $pass, $database);

    if (!$conn) {
        die("La conexión falló: " . mysqli_connect_error());
    }
    #asegurar que los datos no esten vacios
    if (!empty($_POST['nombre']) && !empty($_POST['contraseña'])){

        $nombre = $_POST['nombre'];
        $contraseña = $_POST['contraseña'];

        #enviando datos a sql
        $sql = "INSERT INTO user (id_name_user, contraseña)
        VALUES ('$nombre', '$contraseña')";
            #cerrando conexion
        
        
        #respuesta si se enviaron los datos correctamente 

        if (mysqli_query($conn, $sql)) {
            $estado = "creado";
        }else{
            $estado = "error";
            /*
            $bienbenida_img = "";
            $mensaje = "<div class="mensaje"> </div>"
            $boton = "<button class="boton centrar"> </button>";
            */
        }
        mysqli_close($conn);
    }else{
        echo "por favor complete los datos pertinentes";
    };
    $inicio_Sesion = "sesion no iniciada";
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
    <style>
        *{
            box-sizing: border-box;
            padding: 0;
            margin: 0;
            font-family: var(--fuenteConten);
        }
        :root{
            --colorprincipal: #12CDD4;
            --zizetitulosgrandes: 30px;
            --zisetitulospequeños: 24px;
            --zisetexto: 17px;
            --fuente: 'Roboto Slab', serif;
            --fuenteConten: sans-serif;
            --grosorFuente1: 300;
            --grosorFuente2: 400;
            --grosorFuente3: 500;
            --grissuave: #D9D9D9;
            --grisnamesmartphone: #818181;
            --azulclarosuabe: #5ECDE0;
            --blanco: white;
            --lilaclaro: #B4ABEB;
            --amarilloclaro: #E3E084;
            --verdeclaroblanco:  #5EE0B1;
            --sombra: 0, 0, 0, 0.25;
        }
        .conteiner-mensaje-Bienvenida{
            display: flex;
            justify-content: center;
            margin-top: 100px;
        }
        .conteiner-mensaje-Bienvenida .bienvenida{
            display: grid;
            grid-template-columns: 400px;
            grid-template-rows: 300px 90px  70px;
        }
        .conteiner-mensaje-Bienvenida .conteiner-img-bienvenida{
            width: 400px;
            display: flex;
            justify-content: center;
        }
        .conteiner-mensaje-Bienvenida .img-bienvenida{
            width: 300px;
            height: 300px;
            
        }
        .conteiner-mensaje-Bienvenida .mensaje {
            text-align: center;
            font-size: var(--zisetitulospequeños);
            height: 20px;
        }
        .centrar{
            margin-left: 100px;

        }
        .boton{
            width: 200px;
            height: 60px;
            background: var(--azulclarosuabe);
            border-radius: 20px;
            color: var(--grisnamesmartphone);
            font-size: var(--zisetitulospequeños);
            cursor: pointer;
        }
    </style>
</head>
<body>
   <?php if($estado == "creado"): ?>
    <section class="conteiner-mensaje-Bienvenida">
        <div class="bienvenida">
            <div class="conteiner-img-bienvenida">
            <img src="https://i.gifer.com/Paz.gif" alt="" class="img-bienvenida">
            </div>
            <div class="mensaje" >Ya estas registrado y te damos la Bienvenida <?= $nombre ?></div>
            <button class="boton centrar" id ="redireccion"> Iniciar Sesion</button>
        </div>
   </section>
   
   <?php endif; ?>
   <?php if($estado == "error"): ?>
    <section class="conteiner-mensaje-Bienvenida">
        <div class="bienvenida">
            <div class="conteiner-img-bienvenida">
            <img src="https://i.gifer.com/Paz.gif" alt="" class="img-bienvenida">
            </div>
            <div class="mensaje">UPS😕 Ocurrio un error puede que el nombre de usurio ya exita intenta con otro</div>
            <button class="boton centrar"> Volver a intentar</button>
        </div>
   </section>
   <?php endif; ?>
   <script>
    
    let inicioSesion = "<?= $inicio_Sesion ?>";
    let nombre = "<?= $nombre ?>";

    let redireccion =  document.querySelector('#redireccion');
    redireccion.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href='./login.html'
        });
   </script>
   <script src="./index.js"></script>
</body>
</html>


