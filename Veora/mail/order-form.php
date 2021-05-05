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

$total_price = clean($_POST["total_price"]);
$sale_price = clean($_POST["sale_price"]);
$promocod = clean($_POST["promocod"]);

$count_bifidumbakterin = clean($_POST["count_bifidumbakterin"]);
$price_bifidumbakterin = clean($_POST["price_bifidumbakterin"]);
$count_laktobakterin = clean($_POST["count_laktobakterin"]);
$price_laktobakterin = clean($_POST["price_laktobakterin"]);


$message = "
<h3>Заказать симбиотик</h3><br>
Имя: $name <br><br>
E-mail: $mail <br><br>
Телефон: $phone <br><br>
<hr>
Цена: $total_price <br><br>
Цена с учетом скидки: $sale_price <br><br>
ПРОМОКОД: $promocod <br><br>
<hr>
Бифидумбактерин кол-во: $count_bifidumbakterin <br><br>
Бифидумбактерин цена: $price_bifidumbakterin <br><br>
Лактобактерин кол-во: $count_laktobakterin <br><br>
Лактобактерин цена: $price_laktobakterin <br><br>
";

//return mail($to, $subject, $message, $headers);
if( mail($to, $subject, $message, $headers) ) {
    echo true;
} else{
    echo false;
}
