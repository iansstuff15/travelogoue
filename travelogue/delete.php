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

$id = $_POST['id'];

$stmt = $db->prepare("DELETE FROM users WHERE id = '$id'");
$result = $stmt->execute();


if($result){
    setResponseCode(200);
    echo json_encode($result);
} else{
    setResponseCode(404);
    echo json_encode($result);
};

?>