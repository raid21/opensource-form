<?php
    require "dbConnect.php";
    
    $name = mysqli_real_escape_string($conn,$_POST["namee"]);
    $email = mysqli_real_escape_string($conn,$_POST["email"]);
    $filed = mysqli_real_escape_string($conn,$_POST["field"]);
    $year = mysqli_real_escape_string($conn,$_POST["select"]);
  
    $sql = "INSERT INTO membership_registrations (fullName, email, field, yearr)
    VALUES ('$name', '$email', '$filed', '$year')";

    if (mysqli_query($conn, $sql))
    {
        header("location: ../pages/completed.html");
    }
    else
    {
        echo "Error: " . $sql . "</br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
?>
