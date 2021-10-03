<?php
/*To Get All Items in the Table (list.php).*/
header('Content-Type: application/json');
header("Access-Control-Allow-Origin:*");

include("db.php");

$stmt = $db->prepare("SELECT * FROM users");
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);


echo json_encode($result);

?>
