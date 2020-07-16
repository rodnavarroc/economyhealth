<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
include "db.php"; 
$input = file_get_contents('php://input'); 
$data = json_decode($input, true); 
$message = array(); 
if($data['action'] == "insert"){
    $categoria = $data['categoria']; 
    $concepto = $data['concepto']; 
    $monto = $data['monto'];
    $idusuario = $data['idusuario'];
    $q = mysqli_query($con, "INSERT INTO `historial_gastos` (`idusuario`, `categoria` , `concepto` , `monto`) VALUES ('$idusuario', '$categoria', '$concepto', '$monto')"); 
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