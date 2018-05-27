<?php
    $name = $_GET['username'];
    $phone = $_GET['phone'];
    $street = $_GET['street'];
    $building = $_GET['building'];
    $housing = $_GET['housing'];
    $appartment = $_GET['appartment'];
    $floor = $_GET['floor'];

    $comment = $_GET['comment'];
    
    $pay = $_GET['pay-type'];
    $disturb = $_GET['do-not-disturb'];
    $disturb = isset($disturb) ? 'НЕТ' : 'ДА';

    $mail_message = '
    <html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            <li>Телефон:' . $phone . '</li>
            <li>Улица:' . $street . '</li>
            <li>Дом:' . $building . '</li>
            <li>Корпус: ' . $housing . '</li>
            <li>Квартира: ' . $appartment . '</li>
            <li>Этаж: ' . $floor . '</li>
            <li>Комментарий к заказу: ' . $comment . '</li>
            <li>Способ оплаты: ' . $pay . '</li>
            <li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
        </ul>
    </body>
    </html>';

    $headers = "From: Сайфутдинов Марат\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('saymon.161@gmail.com', 'Заказ', $mail_message, $headers);

    $data = [];
    
    if ($mail) {
        $data['status'] = "OK";
    }else{
        $data['status'] = "NO";
    }

    echo json_encode($data);

?>