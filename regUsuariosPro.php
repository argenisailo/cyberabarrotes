<?php
//Recibir las variables
$usuario = $_GET['usuario'];
$contra = $_GET['contraseña'];
$nombre = $_GET['nombre'];
$domicilio = $_GET['domicilio'];
$telefono = $_GET['telefono'];

//Credenciales
$server = "localhost";
$user = "id19574656_argenis";
$password = "C|W2k=(&Reeazx+Z";
$db = "id19574656_proyecto";

//Conexion db
$conn = mysqli_connect($server, $user, $password, $db);
if(!$conn){
    echo "Error de conexión con el servidor".mysqli_connect_error();
}

//Ejecución de la inserción
if($usuario != null && $contra != null){
    $sql = "INSERT INTO Usuarios(usuario, contraseña, nombre, domicilio, telefono) VALUES ('$usuario', '$contra', '$nombre', '$domicilio', '$telefono')";
}
else{
    echo "ERROR";
}

if(mysqli_query($conn, $sql)){
    echo "1";
}
else{
    echo "0";
}

mysqli_close($conn);
?>