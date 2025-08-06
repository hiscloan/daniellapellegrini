<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "daniella@daniellapellegrini.com";
    $subject = "New Contact Form Submission";
    $body = "From: $name <$email>\n\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Message delivery failed.";
    }
}
?>
