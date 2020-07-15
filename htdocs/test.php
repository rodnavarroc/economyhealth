<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
include "db.php"; 
$input = file_get_contents('php://input'); 
$data = json_decode($input, true); 
$message = array(); 
if($data['action'] == "insert"){
    $monto = $data['monto']; 
    $concepto = $data['concepto']; 
    $categoria = $data['categoria'];
    $q = mysqli_query($con, "INSERT INTO `gastos` ( `idusuario` , `monto` , `concepto` , `categoria` ) VALUES ('1', '$monto', '$concepto', '$categoria')"); 
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