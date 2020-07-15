<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
include "db.php"; 
$input = file_get_contents('php://input'); 
$data = json_decode($input, true); 
$message = array(); 
if($data['action'] == "insert"){
    $nombre_usuario = $data['nombreUsuario']; 
    $clave = $data['clave']; 
    $correo_electronico = $data['correoElectronico'];
    $q = mysqli_query($con, "INSERT INTO `usuarios` (`nombre_usuario` , `clave` , `correo_electronico`) VALUES ('$nombre_usuario', '$clave', '$correo_electronico')"); 
    if($q){
    $message['status'] = "success"; 
    }
    else{
    $message['status'] = "error"; 
    }
    echo json_encode($message); 
}
echo mysqli_error($con); 
?>