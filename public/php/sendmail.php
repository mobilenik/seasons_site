<?php
header("Access-Control-Allow-Origin: *");
// error handler function
function customError($errno, $errstr) {
    error_log($errstr);
    http_response_code(500);
}

// set error handler
set_error_handler("customError");


http_response_code(200);

// process the input
//$inputJSON = file_get_contents('php://input');
//$input = json_decode($inputJSON,TRUE); //convert JSON into array

// send email
//mail($input["to"],$input["subject"],$input["msg"],"From: donot.reply@seasonssidcup.co.uk","-f donot.reply@seasonssidcup.co.uk");
mail($_GET["to"],$_GET["subject"],$_GET["msg"],"From: donot.reply@seasonssidcup.co.uk","-f donot.reply@seasonssidcup.co.uk");
error_log($_GET["subject"].":\n".$_GET["msg"], 0);

?>
