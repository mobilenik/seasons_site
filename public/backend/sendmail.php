<?php
error_log('start');

// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
//if($_SERVER["REQUEST_METHOD"] == "OPTIONS") exit();

//error_log("Location: https://www.seasonssidcup.co.uk/".$_GET["page"]);
//header("Location: https://www.seasonssidcup.co.uk/".$_GET["page"], true, 301);
$success="true";
header("Location: /".$_GET["page"]."?success=$success", true, 301);
header('Content-Type: text/html');

// error handler function
function customError($errno, $errstr) {
    error_log($errstr);
    http_response_code(500);
    $success="false";
}

http_response_code(200);

// set error handler
set_error_handler("customError");

// Set content-type header for sending HTML email 
//$headers = "MIME-Version: 1.0" . "\r\n"; 
//$headers .= "Content-type:text/html; charset=UTF-8" . "\r\n"; 
$headers = 'From: donot.reply@seasonssidcup.co.uk<Seasons Art Class Sidcup>' . "\r\n"; 

// send email
mail($_GET["to"],$_GET["subject"],$_GET["msg"],$headers);
error_log($_GET["subject"].":\n".$_GET["msg"], 0);
?>
