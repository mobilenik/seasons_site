<?php

function customError($errno, $errstr, $errfile, $errline) {
    $result_json = array('error' => $errno, 'message' => $errstr, 'line' => $errline);
    echo json_encode($result_json);
    die();
  }

  //set error handler
set_error_handler("customError");

$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE); //convert JSON into array

// the message
//$msg = "Name: "+ $input["nameFirst"] + " " $input["nameLast"] + "\n";
//$msg=$msg+ "Email: " + $input["email"] + "\n";
//$msg=$msg+"Comment: " + $input["comment"]+ "\n";

// send email
mail($input["to"],$input["subject"],$input["msg"],'From: donot.reply@seasonssidcup.co.uk','-f donot.reply@seasonssidcup.co.uk');

$result_json = array('status' => 'ok');
echo json_encode($result_json);

?>