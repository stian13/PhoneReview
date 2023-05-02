<?php
$server = "localhost";
$user = "sebas";
$pass = "12345";
$database = "phonereview";

$user_iniciado=$_POST['usersesion'];
$clave=$_POST['contraseñasesion'];
session_start();
$_SESSION['usuario'] = $user_iniciado;

$conexion = new mysqli($server, $user, $pass, $database);

$consulta = "SELECT * FROM user WHERE id_name_user='$user_iniciado' and contraseña= '$clave'";

#ejecucion consulta 

$resultado = mysqli_query($conexion, $consulta);
$filas = mysqli_num_rows($resultado);
if ($filas>0){
    header("location:../main.php");
}else{
    echo "error en la autenticacion";
}
mysqli_free_result($resultado);
mysqli_close($conexion);
?>
