<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
include "db.php"; 
$input = file_get_contents('php://input'); 
$data = json_decode($input, true); 
$message = array(); 
if($data['action'] == "insert"){
    $idusuario = $data['idusuario'];
    $q = mysqli_query($con, "SELECT * FROM `gastos` WHERE idusuario = '$idusuario'"); 
	
    $mostrar = mysqli_fetch_array($q);

    $message['alimento'] = $mostrar['alimento'];
    $message['salud'] = $mostrar['salud'];
    $message['servicios'] = $mostrar['servicios'];
    $message['ocio'] = $mostrar['ocio'];
    $message['otros'] = $mostrar['otros'];
    $message['balance_general'] = $mostrar['balance_general'];
    $message['gastos_totales'] = $mostrar['gastos_totales'];

    echo json_encode($message); 
}
echo mysqli_error($con); 
?>