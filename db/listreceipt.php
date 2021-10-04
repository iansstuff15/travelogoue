<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin:*");
include("db.php");
/*$id = $_POST['id'];
// Only display logged in user's receipt
$stmt = $db->prepare("SELECT * FROM receipt WHERE id=?");
$stmt->execute($id);*/
$stmt = $db->prepare("SELECT * FROM receipt");
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($result);

?>