<?php
/*To Get All Items in the Table (list.php).*/
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
include("db.php");
$email=$_POST['email'];
$password=$_POST['password'];
$stmt = $db->prepare("SELECT * FROM users WHERE email= '$email' AND password='$password' ");
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);


if($result){
    echo json_encode([
    'code' => '201'
    ]);
} else{
    echo json_encode([
        'code' => '400'
        ]);
};

?>
