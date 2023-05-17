<?php

$server = "localhost";
$user = "sebas";
$pass = "12345";
$database = "phonereview";

$conexion = new mysqli($server, $user, $pass, $database);

if ($conexion->connect_errno){
    die("conexion FALLIDA" . $conexion->connect_errno);
}

?>
