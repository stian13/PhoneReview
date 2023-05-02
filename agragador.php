<?php

$server = "localhost";
$user = "sebas";
$pass = "12345";
$database = "phonereview";

$conn = mysqli_connect($server, $user, $pass, $database);

if (!$conn) {
    die("La conexión falló: " . mysqli_connect_error());
}
$nombre = $_POST['nombre'];
$nombre_marca = $_POST['nombre_marca'];
$almacenamiento = $_POST['almacenamiento'];
$procesador = $_POST['procesador'];
$camara_frontal = $_POST['camara_frontal'];
$camara_trasera = $_POST['camara_trasera'];
$ram = $_POST['ram'];
$bateria = $_POST['bateria'];
$puntaje_antuntu = $_POST['puntaje_antuntu'];
$link_img = $_POST['link_img'];
$link_tienda = $_POST['link_tienda'];
$categoria_id = $_POST['categoria_id'];
$sistema_operativo = $_POST['sistema_operativo'];

$sql = "INSERT INTO celulares (nombre, nombre_marca, almacenamiento, procesador, camara_frontal, camara_trasera, ram, bateria, puntaje_antuntu, link_img, link_tienda, categoria_id, sistema_operativo) 
        VALUES ('$nombre', '$nombre_marca', '$almacenamiento', '$procesador', '$camara_frontal', '$camara_trasera', '$ram', '$bateria', '$puntaje_antuntu', '$link_img', '$link_tienda', '$categoria_id', '$sistema_operativo')";

if (mysqli_query($conn, $sql)) {
    echo "Datos insertados correctamente en la tabla 'celulares'";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            background-color: black;
        }
        .formulario{
            display: flex;
            flex-direction: column;
            color: white;
        }
    </style>
</head>
<body>
    <form action="./agragador.php" method="post" class="formulario">
 <div>
 <label for="nombre">nombre</label>
    <input type="text" name = "nombre">
 </div>
    
<div>
<label for="nombre_marca">nombre_marca</label>
    <input type="text" name = "nombre_marca">
</div>
   
<div>
<label for="almacenamiento">almacenamiento</label>
    <input type="text" name = "almacenamiento">
</div>
    
<div>
    <label for="procesador">Procesador</label>
    <input type="text" name="procesador" id="procesador">
</div>
<div>
    <label for="camara_frontal">Cámara frontal</label>
    <input type="text" name="camara_frontal" id="camara_frontal">
</div>
<div>
    <label for="camara_trasera">Cámara trasera</label>
    <input type="text" name="camara_trasera" id="camara_trasera">
</div>
<div>
    <label for="ram">RAM</label>
    <input type="text" name="ram" id="ram">
</div>
<div>
    <label for="bateria">Batería</label>
    <input type="text" name="bateria" id="bateria">
</div>
<div>
    <label for="puntaje_antuntu">Puntaje Antutu</label>
    <input type="text" name="puntaje_antuntu" id="puntaje_antuntu">
</div>
<div>
    <label for="link_img">Link de imagen</label>
    <input type="text" name="link_img" id="link_img">
</div>
<div>
    <label for="link_tienda">Link de tienda</label>
    <input type="text" name="link_tienda" id="link_tienda">
</div>
<div>
    <label for="categoria_id">ID de categoría</label>
    <input type="text" name="categoria_id" id="categoria_id">
</div>
<div>
    <label for="sistema_operativo">Sistema operativo</label>
    <input type="text" name="sistema_operativo" id="sistema_operativo">
</div>


    <input type="submit">
    </form>
</body>
</html>