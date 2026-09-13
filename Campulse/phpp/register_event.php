<?php
session_start();
require_once 'db.php';


if (!isset($_SESSION['student_id'])) {
    header("Location: ../student-login.html?error=" . urlencode("You must log in to register for events."));
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $event_id = intval($_POST['event_id'] ?? 0);
    $student_id = $_SESSION['student_id'];

    if ($event_id <= 0) {
        header("Location: ../index.php?error=" . urlencode("Invalid event chosen."));
        exit;
    }

   
    $checkEvent = $pdo->prepare("SELECT event_id FROM events WHERE event_id = ?");
    $checkEvent->execute([$event_id]);
    if (!$checkEvent->fetch()) {
        header("Location: ../index.php?error=" . urlencode("Event not found."));
        exit;
    }

    $checkReg = $pdo->prepare("SELECT registration_id FROM registrations WHERE student_id = ? AND event_id = ?");
    $checkReg->execute([$student_id, $event_id]);
    if ($checkReg->fetch()) {
        header("Location: ../student-dashboard.php?info=" . urlencode("You are already registered for this event."));
        exit;
    }

    $stmt = $pdo->prepare("INSERT INTO registrations (student_id, event_id, status) VALUES (?, ?, 'Confirmed')");
    if ($stmt->execute([$student_id, $event_id])) {
        header("Location: ../student-dashboard.php?success=" . urlencode("Registration confirmed successfully."));
        exit;
    } else {
        header("Location: ../index.php?error=" . urlencode("Could not complete registration."));
        exit;
    }
}