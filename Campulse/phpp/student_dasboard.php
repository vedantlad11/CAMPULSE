<?php
session_start();
require_once 'php/db.php';

if (!isset($_SESSION['student_id'])) {
    header("Location: student-login.html?error=" . urlencode("Please log in first."));
    exit;
}

$student_id = $_SESSION['student_id'];


$sql = "SELECT r.registration_id, r.status, e.title, e.description, e.event_date, e.venue 
        FROM registrations r
        JOIN events e ON r.event_id = e.event_id
        WHERE r.student_id = ?
        ORDER BY e.event_date ASC";

$stmt = $pdo->prepare($sql);
$stmt->execute([$student_id]);
$registrations = $stmt->fetchAll();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Dashboard - CAMPULSE</title>
    <link rel="stylesheet" href="style/style2.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
</head>
<body class="dashboard-body">

    <nav class="dashboard-nav">
        <a href="index.php" class="nav-brand">
            <img src="images/f6 - Copy.jpeg" alt="CAMPULSE Logo" class="nav-logo">
        </a>
        <ul class="nav-links">
            <li><a href="index.php#events">Browse Events</a></li>
            <li><a href="php/logout.php" class="logout-link">Logout</a></li>
        </ul>
    </nav>

    <main class="dashboard-container">
        <header class="dashboard-header">
            <div>
                <h1>Welcome, <?= htmlspecialchars($_SESSION['student_name']) ?>!</h1>
                <p>SAP ID: <?= htmlspecialchars($_SESSION['student_id']) ?> | Department: <?= htmlspecialchars($_SESSION['student_dept']) ?></p>
            </div>
            <a href="index.php#events" class="explore-btn">+ Register for Events</a>
        </header>

        <!-- Feedback banners from redirects -->
        <?php if (!empty($_GET['success'])): ?>
            <div class="status-banner success-banner"><?= htmlspecialchars($_GET['success']) ?></div>
        <?php endif; ?>
        <?php if (!empty($_GET['error'])): ?>
            <div class="status-banner error-banner"><?= htmlspecialchars($_GET['error']) ?></div>
        <?php endif; ?>

        <section class="dashboard-section">
            <h2>Your Registered Events</h2>
            
            <?php if (count($registrations) > 0): ?>
                <div class="dashboard-grid">
                    <?php foreach ($registrations as $reg): ?>
                        <div class="dash-card">
                            <div class="card-status status-confirmed"><?= htmlspecialchars($reg['status']) ?></div>
                            <h3><?= htmlspecialchars($reg['title']) ?></h3>
                            <p class="event-meta">📅 <?= htmlspecialchars($reg['event_date']) ?> • 📍 <?= htmlspecialchars($reg['venue']) ?></p>
                            <p class="event-desc"><?= htmlspecialchars($reg['description']) ?></p>
                            
                            <!-- DELETE Form -->
                            <form action="php/cancel_registration.php" method="POST" onsubmit="return confirm('Cancel registration for this event?');">
                                <input type="hidden" name="registration_id" value="<?= htmlspecialchars($reg['registration_id']) ?>">
                                <button type="submit" class="cancel-btn">Cancel Registration</button>
                            </form>
                        </div>
                    <?php endforeach; ?>
                </div>
            <?php else: ?>
                <div class="empty-state">
                    <p>You haven't registered for any events yet.</p>
                    <a href="index.php#events">Explore campus events</a>
                </div>
            <?php endif; ?>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 CAMPULSE | NMIMS Event Platform</p>
    </footer>
</body>
</html>