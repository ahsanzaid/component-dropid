<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

    $sql = "SELECT * FROM distributor;";
    $result = $conn->query($sql);
    foreach ($result as $res) {
        echo('<option value="'.$res["dis_id"].'">'.$res["name"].'</option>');
    }




$conn->close();
?>

