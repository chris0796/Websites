<?php
$to = "hello@veora-bio.ru";
$sitename  = "veora-bio.ru";
$title = 'Заявка с сайта от ' . date('Y-m-d\ H:i:s');
$subject   = " $title:  \"$sitename\"";
$headers = 'From: no-reply@veora-bio.ru' . "\r\n" .
    'Reply-To: no-reply@veora-bio.ru' . "\r\n" .
    'Content-Type: text/html;charset=UTF-8' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

function clean($value = "") {
    $value = trim($value);
    $value = stripslashes($value);
    $value = strip_tags($value);
    $value = htmlspecialchars($value);
    
    return $value;
}

$name = clean($_POST["name"]);
$mail = clean($_POST["mail"]);
$phone = clean($_POST["phone"]);
$city = clean($_POST["city"]);

$message = "
<h3>Станьте представителем</h3><br>
Имя: $name <br><br>
E-mail: $mail <br><br>
Телефон: $phone <br><br>
Город: $city <br><br>
";

//return mail($to, $subject, $message, $headers);
if( mail($to, $subject, $message, $headers) ) {
    echo true;
} else{
    echo false;
}
