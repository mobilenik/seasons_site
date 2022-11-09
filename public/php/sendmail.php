<?php

//error_log("Sending mail", 0);

//error handler function
function customError($errno, $errstr) {
    error_log($errstr);
    http_response_code(500);
  }
  
//set error handler
set_error_handler("customError");

//error_log(" -> getting input", 0);
$inputJSON = file_get_contents('php://input');
//error_log($inputJSON, 0);

//error_log(" -> decoding input", 0);
$input = json_decode($inputJSON,TRUE); //convert JSON into array

// send email
mail($input["to"],$input["subject"],$input["msg"],"From: donot.reply@seasonssidcup.co.uk","-f donot.reply@seasonssidcup.co.uk");
error_log("Booking: ", 0);
error_log(input["msg"],0)

//$result_json = array('status' => 'ok');
//echo json_encode($result_json);
//echo("{'status':'OK'}")
?>