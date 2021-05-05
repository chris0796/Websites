<? 

if (isset($_POST['contact_name'])) {$contact_name = $_POST['contact_name'];}
if (isset($_POST['contact_email'])) {$contact_email = $_POST['contact_email'];}
if (isset($_POST['contact_phone'])) {$contact_phone = $_POST['contact_phone'];}
if (isset($_POST['contact_street'])) {$contact_street = $_POST['contact_street'];}
if (isset($_POST['contact_message'])) {$contact_message = $_POST['contact_message'];}


$contact_name = stripslashes($contact_name);
$contact_name = htmlspecialchars($contact_name);

$contact_email = stripslashes($contact_email);
$contact_email = htmlspecialchars($contact_email);

$contact_phone = stripslashes($contact_phone);
$contact_phone = htmlspecialchars($contact_phone);

$contact_street = stripslashes($contact_street);
$contact_street = htmlspecialchars($contact_street);

$contact_message = htmlspecialchars($contact_message);
$contact_message = stripslashes($contact_message);


$address = "plodogorko@gmail.com";

$subject = "Письмо с Вашего сайта";

$message = "Имя: ".$contact_name."\nМой контактный e-mail: ".$contact_email."\nМой контактный телефон: ".$contact_email."\nТема обращения: ".$contact_email."\nСообщение: ".$contact_message."";

$verify = mail($address,$subject,$message,"Content-type:text/plain; Charset=utf-8\r\n");


if ($verify == 'true')
{
	echo "OK";
}

?>