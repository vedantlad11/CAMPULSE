<?php
session_start();
require_once 'db.php';

if (!isset($_SESSION['student_id'])) {
    header("Location: ../student-login.html");
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $registration_id = intval($_POST['registration_id'] ?? 0);
    $student_id = $_SESSION['student_id'];

    $stmt = $pdo->prepare("DELETE FROM registrations WHERE registration_id = ? AND student_id = ?");
    $stmt->execute([$registration_id, $student_id]);

    if ($stmt->rowCount() > 0) {
        header("Location: ../student-dashboard.php?success=" . urlencode("Registration cancelled successfully."));
        exit;
    } else {
        header("Location: ../student-dashboard.php?error=" . urlencode("Unable to cancel. Record not found."));
        exit;
    }
}