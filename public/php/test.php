<?php

$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE); //convert JSON into array

// send email
mail("mobilenik@aol.com",$input["subject"],$input["message"],"From: donot.reply@seasonssidcup.co.uk","-f donot.reply@seasonssidcup.co.uk");

$result_json = array('status' => 'ok');
echo json_encode($result_json);

?>