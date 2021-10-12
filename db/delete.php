<?php
header('Content-Type: application/json');
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
if($_SERVER["REQUEST_METHOD"] == "OPTIONS") exit();
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
include("db.php");

$email = $_POST['email'];
$stmt = $db->prepare("DELETE FROM receipt WHERE email = ?");
$result = $stmt->execute([$email]);

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
