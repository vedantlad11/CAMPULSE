<?php
session_start();
require_once 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $student_id = trim($_POST['student_id']);
    $name       = trim($_POST['student_name']);
    $email      = trim($_POST['student_email']);
    $department = trim($_POST['department']);
    $year       = trim($_POST['year']);
    $phone      = trim($_POST['phone']);
    $password   = trim($_POST['password']);

    if (empty($student_id) || empty($email) || empty($password)) {
        header("Location: student-signup.html?error=empty_fields");
        exit();
    }

    $check_stmt = $conn->prepare("SELECT id FROM students WHERE student_id = ? OR email = ?");
    $check_stmt->bind_param("ss", $student_id, $email);
    $check_stmt->execute();
    $check_stmt->store_result();

    if ($check_stmt->num_rows > 0) {
        $check_stmt->close();
        header("Location: student-signup.html?error=user_exists");
        exit();
    }
    $check_stmt->close();

    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    $insert_stmt = $conn->prepare("INSERT INTO students (student_id, name, email, department, year, phone, password) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $insert_stmt->bind_param("sssssss", $student_id, $name, $email, $department, $year, $phone, $hashed_password);

    if ($insert_stmt->execute()) {
        header("Location: student-login.html?signup=success");
    } else {
        header("Location: student-signup.html?error=db_error");
    }

    $insert_stmt->close();
    $conn->close();
}
?>