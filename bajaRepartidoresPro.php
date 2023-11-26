<?php
//Recibir las variables
$ID = $_GET['id'];

//Datos de conexión
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
$sql = "DELETE FROM Repartidores WHERE id = ('$ID')";

if(mysqli_query($conn, $sql)){
    echo "1";
}
else{
    echo "0";
}

mysqli_close($conn);
?>