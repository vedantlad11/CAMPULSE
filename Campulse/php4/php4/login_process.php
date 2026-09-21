<?php
session_start();
require_once 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $identifier = trim($_POST['login_identifier']);
    $password   = trim($_POST['login_password']);

    if (empty($identifier) || empty($password)) {
        header("Location: student-login.html?error=empty_fields");
        exit();
    }

    $stmt = $conn->prepare("SELECT id, student_id, name, email, department, password FROM students WHERE student_id = ? OR email = ?");
    $stmt->bind_param("ss", $identifier, $identifier);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($row = $result->fetch_assoc()) {
        if (password_verify($password, $row['password'])) {
            $_SESSION['user_id']    = $row['id'];
            $_SESSION['student_id'] = $row['student_id'];
            $_SESSION['user_name']  = $row['name'];
            $_SESSION['department'] = $row['department'];

            header("Location: student-dashboard.php");
            exit();
        } else {
            header("Location: student-login.html?error=wrong_credentials");
            exit();
        }
    } else {
        header("Location: student-login.html?error=user_not_found");
        exit();
    }

    $stmt->close();
    $conn->close();
}
?>