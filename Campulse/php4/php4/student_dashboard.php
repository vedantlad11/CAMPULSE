<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: student-login.html?error=unauthorized");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Dashboard - CAMPULSE</title>
    <link rel="stylesheet" href="style/style.css">
    <link rel="icon" type="image/png" href="images/f2-removebg-preview.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
</head>

<body>

    <nav>
        <a href="index.html" class="nav-brand">
            <img src="images/f6 - Copy.jpeg" alt="CAMPULSE Logo" class="nav-logo">
        </a>
        <ul>
            <li><a href="index.html#home">Home</a></li>
            <li><a href="index.html#events">Events</a></li>
            <li><a href="logout.php" class="logout-link">Logout</a></li>
        </ul>
    </nav>

    <header id="home" class="dash-hero">
        <h1>Welcome, <?php echo htmlspecialchars($_SESSION['user_name']); ?>! 👋</h1>
        <p>SAP ID: <?php echo htmlspecialchars($_SESSION['student_id']); ?> | Dept: <?php echo htmlspecialchars($_SESSION['department']); ?></p>
    </header>

    <section class="features-section">
        <h2>Your Activity Overview</h2>
        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">🎟️</div>
                <h3>2 Events</h3>
                <p>Upcoming sessions you are registered for this semester.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">📌</div>
                <h3>4 Total Registrations</h3>
                <p>All-time participation across workshops and fests.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">✅</div>
                <h3>75% Attendance</h3>
                <p>Verified campus check-ins for past registered events.</p>
            </div>
        </div>
    </section>

    <section id="events">
        <h2>Your Upcoming Registered Events</h2>
        <div>
            <div>
                <h3>Technical Workshop</h3>
                <p class="dash-event-meta">📅 Sept 20, 2026 | ⏰ 10:00 AM | 📍 MPSTME</p>
                <p>Learn cutting-edge skills and hands-on coding from industry experts.</p>
                <button class="event-btn">Registered</button>
            </div>
            <div>
                <h3>Cultural Fest</h3>
                <p class="dash-event-meta">📅 Oct 05, 2026 | ⏰ 02:00 PM | 📍 Auditorium</p>
                <p>Experience an amazing showcase of dance, music, and art performances.</p>
                <button class="event-btn">Registered</button>
            </div>
        </div>
    </section>

    <section class="features-section dash-attendance-section">
        <h2>Past Attendance Status</h2>
        <div class="features-grid">
            <div class="feature-card">
                <h3>Web Dev Bootcamp</h3>
                <p class="attendance-tag tag-present">Present</p>
                <p>Verified on Sept 10, 2026</p>
            </div>
            <div class="feature-card">
                <h3>AI Guest Lecture</h3>
                <p class="attendance-tag tag-present">Present</p>
                <p>Verified on Sept 04, 2026</p>
            </div>
            <div class="feature-card">
                <h3>Sports Orientation</h3>
                <p class="attendance-tag tag-absent">Absent</p>
                <p>Session held on Aug 28, 2026</p>
            </div>
        </div>
    </section>

    <footer>
        <p>&copy; 2026 CAMPULSE | NMIMS Event Platform</p>
    </footer>

    <script src="js/dashboard.js"></script>
</body>

</html>