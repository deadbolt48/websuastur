<?php

if (isset($_POST['submit'])){
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    $mailTo = "abrahamsuarezolay@gmail.com"
    $headers = "From: ".$mailFrom;
    $txt = "Has recibido un e-mail de: ".$name.".\n\n".$mensaje;

    mail($mailTo, $asunto, $txt, $headers);
    header("Location: index.php?mailsend");
}

?>