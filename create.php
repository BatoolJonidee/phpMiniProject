<?php
require("./connect.php");
header("Content-Type: application/json");


if($_SERVER["REQUEST_METHOD"]=="POST"){
    $data=json_decode(file_get_contents("php://input"),true);
    $firstName=$data['firstName'];
    $middleName=$data['middleName'];
    $lastName=$data['lastName'];
    $familyName=$data['familyName'];
    $email=$data['email'];
    $mobile=$data['mobile'];
    $password=$data['password'];
    // $bdate=$data['bdate'];
    // $createDate=$data['createDate'];
    // print_r($data);

    $sql="INSERT INTO `users`(`firstName`, `middleName`, `lastName`, `familyName`, `email`, `mobile`, `password` , `superUserFlag`) 
    VALUES ('$firstName','$middleName','$lastName','$familyName','$email','$mobile','$password',0)";

    $response=array();
    if($conn->query($sql)===true){
        $response['message']="Data stored successfully";
    }else{
        $response['message']="Error: ".$sql."<br".$conn->error;
    }
    echo json_encode($response);
}
$conn->close();
?>