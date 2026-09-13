<?php
session_start();
require_once 'php/db.php';

$events = $pdo->query("SELECT * FROM events ORDER BY event_date ASC")->fetchAll();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CAMPULSE - NMIMS Event Platform</title>
    <link rel="stylesheet" href="style/style.css">
    <link rel="icon" type="image/png" href="images/f2-removebg-preview.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
</head>
<body>

    <nav>
        <a href="#home" class="nav-brand">
            <img src="images/f6 - Copy.jpeg" alt="CAMPULSE Logo" class="nav-logo">
        </a>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#events">Events</a></li>
            <?php if (isset($_SESSION['student_id'])): ?>
                <li><a href="student-dashboard.php">Dashboard</a></li>
                <li><a href="php/logout.php">Logout</a></li>
            <?php else: ?>
                <li><a href="student-login.html">Login</a></li>
            <?php endif; ?>
        </ul>
    </nav>

    <header id="home">
        <h1>Every NMIMS Event, One Platform.</h1>
        <p>Connect with clubs, join competitions, and track your registrations.</p>
        <p>Built by students, for students.</p>
        <a href="#events"><button>Explore Events</button></a>
    </header>

    <section id="events">
        <h2>Upcoming Events</h2>
        <div>
            <?php foreach ($events as $event): ?>
                <div>
                    <h3><?= htmlspecialchars($event['title']) ?></h3>
                    <p><?= htmlspecialchars($event['description']) ?></p>
                    <form action="php/register_event.php" method="POST">
                        <input type="hidden" name="event_id" value="<?= htmlspecialchars($event['event_id']) ?>">
                        <button type="submit" class="event-btn">Register Now</button>
                    </form>
                </div>
            <?php endforeach; ?>
        </div>
    </section>

    <section class="features-section">
        <h2>Why CAMPULSE?</h2>
        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">🔍</div>
                <h3>Discover Events</h3>
                <p>Find every workshop, competition, and fest happening across campus in one place.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">⚡</div>
                <h3>Register Instantly</h3>
                <p>Sign up for your favorite activities with a single click using your student ID.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">📅</div>
                <h3>Manage Schedule</h3>
                <p>Keep track of your registered events, venues, and schedules effortlessly.</p>
            </div>
        </div>
    </section>

    <footer>
        <p>&copy; 2026 CAMPULSE | NMIMS Event Platform</p>
    </footer>
</body>
</html>