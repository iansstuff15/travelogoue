<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
include("db.php");
$email=$_POST['email'];
$stmt = $db->prepare("SELECT * FROM receipt WHERE email= '$email'");
$stmt->execute();
$result = $stmt->fetch(PDO::FETCH_ASSOC);


if($result){
    echo json_encode([
        'code' => '200'
    ]);
    echo json_encode($result);
} else{
    echo json_encode([
        'code' => '400'
        ]);
};

?>
