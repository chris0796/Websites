<?php
$marka = $_POST['marka'];
$form_model = $_POST['form_model'];
$form_capacity = $_POST['form_capacity'];
$form_date = $_POST['form_date'];
$form_year = $_POST['form_year'];
$form_phone = $_POST['form_phone'];

{
$email="3199697@mail.ru"; // ----------------------------------------- почта, куда отправляем письмо
$headers  =  'MIME-Version: 1.0' . "\r\n";
$headers .=  'Content-type: text/html; charset=UTF-8' . "\r\n";
$headers .=  'From: f0465137.xsph.ru'.$_SERVER['HTTP_HOST'] . "\r\n"; // ---------------------- адрес отправителя, это заголовок письма, менять не обязательно
$subject    = "Новый заказ"; // ----------------------------------------- тема письма
$message    = "
<b>Клиент:</b>
<br>Марка: ".$marka."
<br>Модель автомобиля : ".$form_model."
<br>Объем двигателя : ".$form_capacity."
<br>Дата выпуска : ".$form_date."
<br>Год выпуска : ".$form_year."
<br>Телефон : ".$form_phone."

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
