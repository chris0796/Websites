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
$phone = clean($_POST["phone"]);
$range_age = clean($_POST["range_age"]);
$range_kurs = clean($_POST["range_kurs"]);
$count_bootles = clean($_POST["count_bootles"]);

$message = "
<h3>Рассчитайте необходимый объем раствора</h3><br>
Имя: $name <br><br>
Телефон: $phone <br><br>
Возраст: $range_age <br><br>
Курс (дней): $range_kurs <br><br>
Количество упаковок: $count_bootles <br><br>
";

//return mail($to, $subject, $message, $headers);
if( mail($to, $subject, $message, $headers) ) {
    echo true;
} else{
    echo false;
}
