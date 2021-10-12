<?php
/*Create API*/
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
if($_SERVER["REQUEST_METHOD"] == "OPTIONS") exit();
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
include("db.php");

$email = $_POST['email'];
$flight_num = $_POST['flight_num'];
$passenger_name = $_POST['passenger_name'];
$fr_location = $_POST['fr_location'];
$to_location = $_POST['to_location'];
$classtype = $_POST['classtype'];
$flight_date = $_POST['flight_date'];
$flight_time = $_POST['flight_time'];
$gate_num = $_POST['gate_num'];
$board_time = $_POST['board_time'];
$resort_name = $_POST['resort_name'];

$stmt = $db->prepare("INSERT INTO receipt (email, flight_num, passenger_name, fr_location, to_location, classtype, flight_date, flight_time, gate_num, board_time, resort_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$result = $stmt->execute([$email,$flight_num,$passenger_name,$fr_location,$to_location,$classtype,$flight_date,$flight_time,$gate_num,$board_time,$resort_name]);

if($result){
    echo json_encode([
    'code' => '201'
    ]);
} else{
    echo json_encode([
        'code' => '400'
        ]);
}


?>