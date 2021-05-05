<? 

if (isset($_POST['quick_name'])) {$quick_name = $_POST['quick_name'];}
if (isset($_POST['quick_email'])) {$quick_email = $_POST['quick_email'];}
if (isset($_POST['quick_phone'])) {$quick_phone = $_POST['quick_phone'];}
if (isset($_POST['quick_message'])) {$quick_message = $_POST['quick_message'];}


$quick_name = stripslashes($quick_name);
$quick_name = htmlspecialchars($quick_name);

$quick_email = stripslashes($quick_email);
$quick_email = htmlspecialchars($quick_email);

$quick_phone = stripslashes($quick_phone);
$quick_phone = htmlspecialchars($quick_phone);

$quick_message = htmlspecialchars($quick_message);
$quick_message = stripslashes($quick_message);


$address = "plodogorko@gmail.com";

$subject = "Письмо с Вашего сайта";

$message = "Имя: ".$quick_name."\nМой контактный e-mail: ".$quick_email."\nМой контактный телефон: ".$quick_phone."\nСообщение: ".$quick_message."";

$verify = mail($address,$subject,$message,"Content-type:text/plain; Charset=utf-8\r\n");


if ($verify == 'true')
{
	echo "OK";
}

?>