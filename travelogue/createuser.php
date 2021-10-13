<?php
/*Create API*/
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
if($_SERVER["REQUEST_METHOD"] == "OPTIONS") exit();
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
include("db.php");

$fname = $_POST['first_name'];
$lname = $_POST['last_name'];
$email = $_POST['email'];
$password = $_POST['password'];

$stmt = $db->prepare("INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)");
$result = $stmt->execute([$fname, $lname, $email, $password]);

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