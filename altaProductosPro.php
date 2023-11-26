<?php
//Recibir las variables
$nombre = $_GET['nombre'];
$precio = $_GET['precio'];
$imagen = $_GET['imagen'];

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
if($nombre != null && $precio != null && $imagen != null){
    $sql = "INSERT INTO Productos(nombre, precio, imagen) VALUES ('$nombre', '$precio', '$imagen')";
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