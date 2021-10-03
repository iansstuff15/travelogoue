<?php
/*Create API*/
header('Content-Type: application/json');

include("db.php");

$name = $_POST['name'];
$age = (int) $_POST['age'];
$address = $_POST['address'];
$section = $_POST['section'];

$stmt = $db->prepare("INSERT INTO users (name, age, address, section) VALUES (?, ?, ?, ?)");
$result = $stmt->execute([$name, $age, $address, $section]);

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