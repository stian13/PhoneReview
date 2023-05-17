<?php


#conexion a la base de datos 
$server = "localhost";
$user = "sebas";
$pass = "12345";
$database = "phonereview";

$conn = mysqli_connect($server, $user, $pass, $database);

$user = $_POST['user'];
$comentario = $_POST['texto'];
$puntos = $_POST['numero'];
$idphone = $_POST['movilid'];

echo json_encode('<div class="comentario-user-other">
<div class="name-use User">'.$user.'</div>
<div class="parrafo">'.$comentario.'</div>
<div class="caja-puntos">
<div>'.$puntos.'</div>
<span>⭐</span>
</div>
</div>');



if (!$conn) {
    die("La conexión falló: " . mysqli_connect_error());
}
$sql = "INSERT INTO `comentarios`( `contenido`, `puntaje`, `name_user_id`, `id_celular`) VALUES ('$comentario',$puntos,'$user',$idphone)";
mysqli_query($conn, $sql);
mysqli_close($conn);
?>