<?php
session_start();
require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $identifier = trim($_POST['identifier'] ?? '');
    $password = $_POST['password'] ?? '';

    if (empty($identifier) || empty($password)) {
        header("Location: ../student-login.html?error=" . urlencode("Please fill in both fields."));
        exit;
    }

    $stmt = $pdo->prepare("SELECT * FROM students WHERE student_id = ? OR email = ? LIMIT 1");
    $stmt->execute([$identifier, $identifier]);
    $student = $stmt->fetch();

    if ($student && password_verify($password, $student['password_hash'])) {
      
        $_SESSION['student_id'] = $student['student_id'];
        $_SESSION['student_name'] = $student['name'];
        $_SESSION['student_dept'] = $student['department'];
        $_SESSION['student_email'] = $student['email'];

        header("Location: ../student-dashboard.php");
        exit;
    } else {
        header("Location: ../student-login.html?error=" . urlencode("Invalid Student ID/Email or Password."));
        exit;
    }
}