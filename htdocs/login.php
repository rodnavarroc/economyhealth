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
    $q = mysqli_query($con, "SELECT * FROM `usuarios` WHERE nombre_usuario = '$nombre_usuario' AND clave = '$clave'"); 
	$row_cnt = mysqli_num_rows($q);
    if($row_cnt == 0)
    {
    	$message['status'] = "error";
    }
    else
    {
    	$message['status'] = "success"; 
    	$mostrar=mysqli_fetch_array($q);
    	$message['username'] = $mostrar['idusuario'];
    }
    echo json_encode($message); 
}
echo mysqli_error($con); 
?>