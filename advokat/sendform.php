<?php
$name = $_POST['name'];
$phone = $_POST['phone'];


{
$email="advokat_ramil@mail.ru"; // ----------------------------------------- почта, куда отправляем письмо
$headers  =  'MIME-Version: 1.0' . "\r\n";
$headers .=  'Content-type: text/html; charset=UTF-8' . "\r\n";
$headers .=  'From: '.$_SERVER['HTTP_HOST'] . "\r\n"; // ---------------------- адрес отправителя, это заголовок письма, менять не обязательно
$subject    = "Новый заказ"; // ----------------------------------------- тема письма
$message    = "
<b>Клиент:</b>
<br>Имя: ".$name."
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
