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

if (isset($_POST['name'])){
    $name = $_POST['name'];
    $sql = "INSERT INTO distributor (name)VALUES ('".$name."')";
    $conn->query($sql);
    $sql = "select LAST_INSERT_ID()";
    
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo($row['LAST_INSERT_ID()']);
    }
    }

}


$conn->close();
?>

