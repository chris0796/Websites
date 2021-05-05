<?php
$name = $_POST['name'];
$email = $_POST['mail'];
$phone = $_POST['phone'];



{
$email="uyutnyy.dvorik.56@bk.ru"; // ----------------------------------------- почта, куда отправляем письмо
$headers  =  'MIME-Version: 1.0' . "\r\n";
$headers .=  'Content-type: text/html; charset=UTF-8' . "\r\n";
$headers .=  'From: f0465137.xsph.ru'.$_SERVER['HTTP_HOST'] . "\r\n"; // ---------------------- адрес отправителя, это заголовок письма, менять не обязательно
$subject    = "Новый заказ"; // ----------------------------------------- тема письма
$message    = "
<b>Клиент:</b>
<br>Имя: ".$name."
<br>Email: ".$email."
<br>Телефон: ".$phone."

<hr>
<br>Ссылка: ".@$_SERVER['HTTP_REFERER']."

";
$mail=mail($email, $subject, $message, $headers);
if($mail==true){
?>
<html>
Заявка отправлена!		
</html>
<?
}else{
    echo "no";
}
}
?>
