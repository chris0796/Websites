<?php
require 'class.phpmailer.php';
require 'class.smtp.php';
$mail = new PHPMailer;

// Настройки
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$mail->isSMTP(); 
$mail->Host = 'ssl://server204.hosting.reg.ru';  
$mail->SMTPAuth = true;                      
$mail->Username = 'pochta@xn----7sbkfcqd3amjc2b1d.xn--p1ai';
$mail->Password = '4O2o4G5w';
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;
$mail->setFrom('pochta@xn----7sbkfcqd3amjc2b1d.xn--p1ai');
$mail->FromName = "Печати-Мегион.рф";
$mail->addAddress('zakaz@pechati-megion.ru'); // Email получателя
$mail->addAddress('pochta@xn----7sbkfcqd3amjc2b1d.xn--p1ai'); // Email получателя2





// заказ продукта по карточке
if (isset($_POST['Phone']) && !empty($_POST['Phone']) && isset($_POST['Name']) && !empty($_POST['Name']) && isset($_POST['Email']) && !empty($_POST['Email']) && isset($_POST['form_name']) && !empty($_POST['form_name']) && isset($_POST['prod_name']) && !empty($_POST['prod_name']) && !isset($_POST['Code']) && empty($_POST['Code'])) {
    $allowed_filetypes = array('.jpg', '.png', '.jpeg'); // Здесь мы перечисляем допустимые типы файлов
    $max_filesize = 524288; // Максимальный размер загружаемого файла в байтах (в данном случае он равен 0.5 Мб).
    $upload_path = './files/'; // Место, куда будут загружаться файлы (в данном случае это папка 'files').
    $filename = $_FILES['fileforsending']['name']; // В переменную $filename заносим точное имя файла (включая расширение).
    $ext = substr($filename, strpos($filename, '.'), strlen($filename) - 1); // В переменную $ext заносим расширение загруженного файла.
    $sitename = "xn----7sbkfcqd3amjc2b1d.xn--p1ai";
    $path = '/files/';
    // Загружаем фаил в указанную папку.
    if (move_uploaded_file($_FILES['fileforsending']['tmp_name'], $upload_path . $filename)) {
        $Phone = $_POST['Phone'];
        $Name = $_POST['Name'];
        $Email = $_POST['Email'];
        $form_name = $_POST['form_name'];
        $prod_name = $_POST['prod_name'];
        $sitename = "xn----7sbkfcqd3amjc2b1d.xn--p1ai";
        // Формирование заголовка письма
        $subject = "Заявка с сайта " . $sitename . "";
        $headers = "From: <mail@xn----7sbkfcqd3amjc2b1d.xn--p1ai>\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
        // Формирование тела письма
        $msg = "<html><body style='font-family:Arial,sans-serif;'>";
        $msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Новая заявка: «" . $form_name . "»</h2>\r\n";
        $msg .= "<p><strong>Имя:</strong> " . $Name . "</p>\r\n";
        $msg .= "<p><strong>Телефон:</strong> " . $Phone . "</p>\r\n";
        $msg .= "<p><strong>E-mail:</strong> " . $Email . "</p>\r\n";
        $msg .= "<p><strong>Продукт:</strong> " . $prod_name . "</p>\r\n";
        $msg .= "<p><strong>Загруженный файл:</strong> <a href=\"http://" . $sitename . $path . $filename . "\">смотреть</a></p>\r\n";
        $msg .= "</body></html>";
        // отправка сообщения
	// Письмо
	$mail->isHTML(true); 
	$mail->Subject = "Заявка с сайта печати-мегион.рф"; // Заголовок письма
	$mail->Body    = "$msg"; // Текст письма

	// Результат
	if(!$mail->send()) {
		echo 'Message could not be sent.';
		echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
		echo 'ok';
	}
    } else {
        $Phone = $_POST['Phone'];
        $Name = $_POST['Name'];
        $Email = $_POST['Email'];
        $form_name = $_POST['form_name'];
        $prod_name = $_POST['prod_name'];
        $sitename = "xn----7sbkfcqd3amjc2b1d.xn--p1ai";
        // Формирование заголовка письма
        $subject = "Заявка с сайта " . $sitename . "";
        $headers = "From: <mail@xn----7sbkfcqd3amjc2b1d.xn--p1ai>\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
        // Формирование тела письма
        $msg = "<html><body style='font-family:Arial,sans-serif;'>";
        $msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Новая заявка: «" . $form_name . "»</h2>\r\n";
        $msg .= "<p><strong>Имя:</strong> " . $Name . "</p>\r\n";
        $msg .= "<p><strong>Телефон:</strong> " . $Phone . "</p>\r\n";
        $msg .= "<p><strong>E-mail:</strong> " . $Email . "</p>\r\n";
        $msg .= "<p><strong>Продукт:</strong> " . $prod_name . "</p>\r\n";
        $msg .= "</body></html>";
        // отправка сообщения
	// Письмо
	$mail->isHTML(true); 
	$mail->Subject = "Заявка с сайта печати-мегион.рф"; // Заголовок письма
	$mail->Body    = "$msg"; // Текст письма

	// Результат
	if(!$mail->send()) {
		echo 'Message could not be sent.';
		echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
		echo 'ok';
	}
    }
}

// форма заказ онлайн
elseif (isset($_POST['Phone']) && !empty($_POST['Phone']) && isset($_POST['Name']) && !empty($_POST['Name']) && isset($_POST['Email']) && !empty($_POST['Email']) && isset($_POST['form_name']) && !empty($_POST['form_name']) && !isset($_POST['prod_name']) && empty($_POST['prod_name']) && !isset($_POST['Code']) && empty($_POST['Code'])) {
    $allowed_filetypes = array('.jpg', '.png', '.jpeg'); // Здесь мы перечисляем допустимые типы файлов
    $max_filesize = 524288; // Максимальный размер загружаемого файла в байтах (в данном случае он равен 0.5 Мб).
    $upload_path = './files/'; // Место, куда будут загружаться файлы (в данном случае это папка 'files').
    $filename = $_FILES['fileforsending']['name']; // В переменную $filename заносим точное имя файла (включая расширение).
    $ext = substr($filename, strpos($filename, '.'), strlen($filename) - 1); // В переменную $ext заносим расширение загруженного файла.
    $sitename = "xn----7sbkfcqd3amjc2b1d.xn--p1ai";
    $path = '/files/';
    // Загружаем фаил в указанную папку.
    if (move_uploaded_file($_FILES['fileforsending']['tmp_name'], $upload_path . $filename)) {
        $Phone = $_POST['Phone'];
        $Name = $_POST['Name'];
        $Email = $_POST['Email'];
        $form_name = $_POST['form_name'];
        $sitename = "xn----7sbkfcqd3amjc2b1d.xn--p1ai";
        // Формирование заголовка письма
        $subject = "Заявка с сайта " . $sitename . "";
        $headers = "From: <mail@xn----7sbkfcqd3amjc2b1d.xn--p1ai>\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
        // Формирование тела письма
        $msg = "<html><body style='font-family:Arial,sans-serif;'>";
        $msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Новая заявка: «" . $form_name . "»</h2>\r\n";
        $msg .= "<p><strong>Имя:</strong> " . $Name . "</p>\r\n";
        $msg .= "<p><strong>Телефон:</strong> " . $Phone . "</p>\r\n";
        $msg .= "<p><strong>E-mail:</strong> " . $Email . "</p>\r\n";
        $msg .= "<p><strong>Загруженный файл:</strong> <a href=\"http://" . $sitename . $path . $filename . "\">смотреть</a></p>\r\n";
        $msg .= "</body></html>";
        // отправка сообщения
	// Письмо
	$mail->isHTML(true); 
	$mail->Subject = "Заявка с сайта печати-мегион.рф"; // Заголовок письма
	$mail->Body    = "$msg"; // Текст письма

	// Результат
	if(!$mail->send()) {
		echo 'Message could not be sent.';
		echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
		echo 'ok';
	}
    } else {
        $Phone = $_POST['Phone'];
        $Name = $_POST['Name'];
        $Email = $_POST['Email'];
        $form_name = $_POST['form_name'];
        $sitename = "xn----7sbkfcqd3amjc2b1d.xn--p1ai";
        // Формирование заголовка письма
        $subject = "Заявка с сайта " . $sitename . "";
        $headers = "From: <mail@xn----7sbkfcqd3amjc2b1d.xn--p1ai>\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
        // Формирование тела письма
        $msg = "<html><body style='font-family:Arial,sans-serif;'>";
        $msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Новая заявка: «" . $form_name . "»</h2>\r\n";
        $msg .= "<p><strong>Имя:</strong> " . $Name . "</p>\r\n";
        $msg .= "<p><strong>Телефон:</strong> " . $Phone . "</p>\r\n";
        $msg .= "<p><strong>E-mail:</strong> " . $Email . "</p>\r\n";
        $msg .= "</body></html>";
        // отправка сообщения
	// Письмо
	$mail->isHTML(true); 
	$mail->Subject = "Заявка с сайта печати-мегион.рф"; // Заголовок письма
	$mail->Body    = "$msg"; // Текст письма

	// Результат
	if(!$mail->send()) {
		echo 'Message could not be sent.';
		echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
		echo 'ok';
	}
    }
}

// форма с выбором образца
elseif (isset($_POST['Phone']) && !empty($_POST['Phone']) && isset($_POST['Name']) && !empty($_POST['Name']) && isset($_POST['Email']) && !empty($_POST['Email']) && isset($_POST['form_name']) && !empty($_POST['form_name']) && isset($_POST['Code']) && !empty($_POST['Code'])) {
    $Name = $_POST['Name'];
    $Phone = $_POST['Phone'];
    $Email = $_POST['Email'];
    $form_name = $_POST['form_name'];
    $Code = $_POST['Code'];
    $sitename = "xn----7sbkfcqd3amjc2b1d.xn--p1ai";
    // Формирование заголовка письма
    $subject = "Заявка с сайта " . $sitename . "";
    $headers = "From: <mail@xn----7sbkfcqd3amjc2b1d.xn--p1ai>\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    // Формирование тела письма
    $msg = "<html><body style='font-family:Arial,sans-serif;'>";
    $msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Новая заявка: «" . $form_name . "»</h2>\r\n";
    $msg .= "<p><strong>Имя:</strong> " . $Name . "</p>\r\n";
    $msg .= "<p><strong>Телефон:</strong> " . $Phone . "</p>\r\n";
    $msg .= "<p><strong>Email:</strong> " . $Email . "</p>\r\n";
    $msg .= "<p><strong>Номер образца:</strong> " . $Code . "</p>\r\n";
    $msg .= "</body></html>";
    // отправка сообщения
	// Письмо
	$mail->isHTML(true); 
	$mail->Subject = "Заявка с сайта печати-мегион.рф"; // Заголовок письма
	$mail->Body    = "$msg"; // Текст письма

	// Результат
	if(!$mail->send()) {
		echo 'Message could not be sent.';
		echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
		echo 'ok';
	}
}

// заказ обратного звонка
elseif (isset($_POST['Phone']) && !empty($_POST['Phone']) && isset($_POST['Name']) && !empty($_POST['Name']) && !isset($_POST['Email']) && empty($_POST['Email']) && isset($_POST['form_name']) && !empty($_POST['form_name']) && !isset($_POST['prod_name']) && empty($_POST['prod_name'])) {
    $Name = $_POST['Name'];
    $Phone = $_POST['Phone'];
    $form_name = $_POST['form_name'];
    $sitename = "xn----7sbkfcqd3amjc2b1d.xn--p1ai";
    // Формирование заголовка письма
    $subject = "Заявка с сайта " . $sitename . "";
    $headers = "From: <mail@xn----7sbkfcqd3amjc2b1d.xn--p1ai>\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    // Формирование тела письма
    $msg = "<html><body style='font-family:Arial,sans-serif;'>";
    $msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Новая заявка: «" . $form_name . "»</h2>\r\n";
    $msg .= "<p><strong>Имя:</strong> " . $Name . "</p>\r\n";
    $msg .= "<p><strong>Телефон:</strong> " . $Phone . "</p>\r\n";
    $msg .= "</body></html>";
    // отправка сообщения

	// Письмо
	$mail->isHTML(true); 
	$mail->Subject = "Заявка с сайта печати-мегион.рф"; // Заголовок письма
	$mail->Body    = "$msg"; // Текст письма

	// Результат
	if(!$mail->send()) {
		echo 'Message could not be sent.';
		echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
		echo 'ok';
	}	
	}

// подписка по email
elseif (isset($_POST['Email']) && !empty($_POST['Email']) && isset($_POST['form_name']) && !empty($_POST['form_name']) && !isset($_POST['Name']) && empty($_POST['Name']) && !isset($_POST['Phone']) && empty($_POST['Phone'])) {
    $Email = $_POST['Email'];
    $form_name = $_POST['form_name'];
    $sitename = "xn----7sbkfcqd3amjc2b1d.xn--p1ai";
    // Формирование заголовка письма
    $subject = "Заявка с сайта " . $sitename . "";
    $headers = "From: <mail@xn----7sbkfcqd3amjc2b1d.xn--p1ai>\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    // Формирование тела письма
    $msg = "<html><body style='font-family:Arial,sans-serif;'>";
    $msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Новая заявка: «" . $form_name . "»</h2>\r\n";
    $msg .= "<p><strong>E-mail:</strong> " . $Email . "</p>\r\n";
    $msg .= "</body></html>";
    // отправка сообщения
	// Письмо
	$mail->isHTML(true); 
	$mail->Subject = "Заявка с сайта печати-мегион.рф"; // Заголовок письма
	$mail->Body    = "$msg"; // Текст письма

	// Результат
	if(!$mail->send()) {
		echo 'Message could not be sent.';
		echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
		echo 'ok';
	}
} else {
        echo "Die robots! Die!";
}
?>