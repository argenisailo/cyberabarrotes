<?php
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

//Sentencia de ejecución
$sql = "SELECT id, nombre, precio, imagen from Productos";
$result = mysqli_query($conn, $sql);
$array = array();
if(mysqli_num_rows($result)>0){
    while($row = mysqli_fetch_assoc($result)){
        $array[] = $row;
    }
}
else{
    echo "No hay datos en el sevidor";
}
echo json_encode($array);

//Cerrar conexión
mysqli_close($conn);
?>