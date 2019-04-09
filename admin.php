<?php
//include_once 'main.php';
// Initialize the session
session_start();

// Check if the user is logged in, if not then redirect to login page

if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: login.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Admin</title>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="js/main.js" type="text/javascript"></script>
<!--    <script src="dataFromDb.js" type="text/javascript"></script>-->

</head>
<body>
<div class="page-header">
    <h1>Hi, <b><?php echo htmlspecialchars($_SESSION["username"]); ?></b>. Welcome! </h1>
</div>
<p>
    <a href="login_system/reset-password.php" class="btn btn-warning">Reset Your Password</a>
    <a href="login_system/logout.php" class="btn btn-danger">Sign Out of Your Account</a>
</p>

<br>
<br>



</body>
</html>