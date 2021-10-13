<?php
/*To Get All Items in the Table (list.php).*/
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');


$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

include("db.php");

function setResponseCode($code) {
    if($_SERVER["REQUEST_METHOD"] == "GET" || $_SERVER["REQUEST_METHOD"] == "POST") {
        http_response_code($code);
    }
}

$email=$_POST['email'];
$password=$_POST['password'];

$stmt = $db->prepare("SELECT * FROM users WHERE email= '$email' AND password='$password' ");
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);


if($result){
    setResponseCode(201);
    echo json_encode($result);
} else{
    setResponseCode(404);
    echo json_encode($result);
};

?>