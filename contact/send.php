<?php

// 文字コード設定（日本語対策）
mb_language("Japanese");
mb_internal_encoding("UTF-8");

// POSTデータ取得（安全に）
$name       = isset($_POST['name']) ? $_POST['name'] : '';
$tel        = isset($_POST['tel']) ? $_POST['tel'] : '';
$email      = isset($_POST['email']) ? $_POST['email'] : '';
$tournament = isset($_POST['tournament']) ? $_POST['tournament'] : '';
$event      = isset($_POST['event']) ? $_POST['event'] : '';
$message    = isset($_POST['message']) ? $_POST['message'] : '';

// 送信先メールアドレス
$to = "info@runlab.online";

// 件名
$subject = "【お問い合わせ】" . $name . " 様";

// 本文
$body  = "氏名（チーム名）: " . $name . "\n";
$body .= "連絡先電話番号: " . $tel . "\n";
$body .= "メールアドレス: " . $email . "\n";
$body .= "参加大会名: " . $tournament . "\n";
$body .= "参加種目名: " . $event . "\n\n";
$body .= "【問い合わせ内容】\n" . $message;

// ヘッダー
$headers = "From: " . $email;

// メール送信
if (mb_send_mail($to, $subject, $body, $headers)) {
    // 成功したらサンクスページへ
    header("Location: thanks.html");
    exit;
} else {
    echo "送信に失敗しました。";
}

?>