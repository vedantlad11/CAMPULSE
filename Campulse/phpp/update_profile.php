<?php
session_start();
require_once 'db.php';

if (!isset($_SESSION['student_id'])) {
    header("Location: ../student-login.html");
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $student_id = $_SESSION['student_id'];
    $department = trim($_POST['department'] ?? '');
    $year = trim($_POST['year'] ?? '');
    $phone = trim($_POST['phone'] ?? '');

    if (empty($department) || empty($year) || empty($phone)) {
        header("Location: ../student-dashboard.php?error=" . urlencode("All profile fields are required."));
        exit;
    }


    $stmt = $pdo->prepare("UPDATE students SET department = ?, year_of_study = ?, phone = ? WHERE student_id = ?");
    if ($stmt->execute([$department, $year, $phone, $student_id])) {
        $_SESSION['student_dept'] = $department;
        header("Location: ../student-dashboard.php?success=" . urlencode("Profile updated successfully."));
        exit;
    } else {
        header("Location: ../student-dashboard.php?error=" . urlencode("Profile update failed."));
        exit;
    }
}