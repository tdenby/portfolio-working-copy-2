<?php

$fname = $_POST[firstname];
$lname = $_POST[lastname];
$email = $_POST[email];
$message = $_POST[message];

$email_from = 'taylordenby@gmail.com';

$email_subject = "Message from Portfolio.";

$email_body = "From: $name.\n".
                "Email: $email.\n";

$to = "tdenby@umich.edu";

$headers = "From $email_from \r\n";
$headers .= "Reply-to: $email"

?>