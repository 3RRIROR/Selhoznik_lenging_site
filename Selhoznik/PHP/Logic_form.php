<?php
$name = $_POST['username'];
$mail = $_POST['useremail'];
$phone = $_POST['userphone'];
$comment = $_POST['usercomment'];

$name = htmlspecialchars($name);
$mail = htmlspecialchars($mail);
$phone = htmlspecialchars($phone);
$comment = htmlspecialchars($comment);

$name = urlencode($name);
$mail = urlencode($mail);
$phone = urlencode($phone);
$comment = urlencode($comment);

$name = trim($name);
$mail = trim($mail);
$phone = trim($phone);
$comment = trim($comment);

if (mail("to_theartur555@mail.ru",
    "Имя: ".$name."\n".
    "Телефон ".$phone,
    "Почта: ".$mail,
    "Комментарий: ".$comment,)
)
    {
        header(
            "Location: /index.html");
        }
else{
    echo("Error");
}
?>