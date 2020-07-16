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

        if($categoria == "alimentos")
        {
            mysqli_query($con, "UPDATE gastos SET alimento = '$monto' WHERE idusuario = '$idusuario'");
        }
        if($categoria == "salud")
        {
            mysqli_query($con, "UPDATE gastos SET salud = '$monto' WHERE idusuario = '$idusuario'");
        }
        if($categoria == "servicios")
        {
            mysqli_query($con, "UPDATE gastos SET servicios = '$monto' WHERE idusuario = '$idusuario'");
        }
        if($categoria == "ocio")
        {
            mysqli_query($con, "UPDATE gastos SET ocio = '$monto' WHERE idusuario = '$idusuario'");
        }
        if($categoria == "otros")
        {
            mysqli_query($con, "UPDATE gastos SET otros = '$monto' WHERE idusuario = '$idusuario'");
        }

        $getBalance = mysqli_query($con, "SELECT * FROM gastos WHERE idusuario = '$idusuario'");
        $mostrar = mysqli_fetch_array($getBalance);
        $balanceActual = $mostrar['balance_general'];
        $gastosTotales = $mostrar['gastos_totales'];

        $balanceActual = $balanceActual - $monto; 
        $gastosTotales = $gastosTotales + $monto;
        mysqli_query($con, "UPDATE gastos SET balance_general = '$balanceActual', gastos_totales = '$gastosTotales' WHERE idusuario = '$idusuario'");

    }
    else{
    $message['status'] = "error"; 
    }
    echo json_encode($message); 
}
echo mysqli_error($con); 
?>