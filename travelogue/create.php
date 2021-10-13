<?php
/*Create API*/
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Accept: application/json");
if($_SERVER["REQUEST_METHOD"] == "OPTIONS") exit();
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
include("db.php");

function setResponseCode($code) {
    if($_SERVER["REQUEST_METHOD"] == "GET" || $_SERVER["REQUEST_METHOD"] == "POST") {
        http_response_code($code);
    }
}

$fname = $_POST['first_name'];
$lname = $_POST['last_name'];
$email = $_POST['email'];
$password = $_POST['password'];

$validate = $db->prepare("SELECT * FROM users WHERE email='$email'");
$validate->execute();
$v_res = $validate->fetchAll(PDO::FETCH_ASSOC);

if($v_res){
    http_response_code(400);
    echo json_encode([
        'errorMessage' => 'Email already exists'
    ]);
}else{
    $stmt = $db->prepare("INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)");
    $result = $stmt->execute([$fname, $lname, $email, $password]);

    if($result){
        setResponseCode(201);
        echo json_encode([
        'code' => '201'
        ]);
    } else{
        setResponseCode(404);
        echo json_encode([
            'code' => '400'
            ]);
    }
}

?>