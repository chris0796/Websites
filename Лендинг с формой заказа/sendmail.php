<?php
require("modules/phpmailer.php");
$send_email = "plprse@gmail.com";
$send_name = "olkukla-site.ru"; 
$from_name  = "olkukla-site.ru";
$from_address = "form@olkukla-site.ru";

$name = $_POST['your-name'];
$phone = $_POST['your-tel'];
$delivery = $_POST['delivery'];
$cart = $_POST['your-order'];

if ($_POST) {
	$subject = "Новый заказ";
	//$message = $_POST['subject'];
	$message .= "\n<br>Имя: ".  $name;
	$message .= "\n<br>Телефон: " . $phone;
	$message .= "\n<br>Доставка: " . $delivery;
	$message .= "\n<br>Заказ: " . $cart;

	$message .= "\n<br>";
	
		
	$mail = new PHPMailer();

	$mail->From      = $from_address;
	$mail->CharSet   = 'UTF-8';
	$mail->ContentType = 'text/html';
	$mail->FromName  = $from_name;
	$mail->Subject   = $subject;
	$mail->Body      = $message;
	$mail->AddAddress( $send_email, $send_name);
	$mail->IsHTML(true);
	$mail->send();
}


$botApiToken = '1218385310:AAHvTwaMor_5viDZWE-tmClndh1sNfwmOM'; // токен бота
$data = [
    'chat_id' => '-32435143', // название канала
    'text' => "Имя: $name\nТелефон: $phone\nДоставка: $delivery\nЗаказ: $cart"
];
file_get_contents("https://api.telegram.org/bot{$botApiToken}/sendMessage?" . http_build_query($data) );

?>