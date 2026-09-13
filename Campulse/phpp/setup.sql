CREATE DATABASE IF NOT EXISTS campulse_db;
USE campulse_db;

CREATE TABLE IF NOT EXISTS students (
    student_id VARCHAR(20) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(120) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    department VARCHAR(80) NOT NULL,
    year_of_study VARCHAR(30) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS events (
    event_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(120) NOT NULL,
    description TEXT NOT NULL,
    event_date DATE NOT NULL,
    venue VARCHAR(120) NOT NULL,
    category VARCHAR(50) DEFAULT 'General',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS registrations (
    registration_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id VARCHAR(20) NOT NULL,
    event_id INT NOT NULL,
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'Confirmed',
    UNIQUE KEY unique_registration (student_id, event_id),
    FOREIGN KEY (student_id) REFERENCES students(student_id) ON DELETE CASCADE,
    FOREIGN KEY (event_id) REFERENCES events(event_id) ON DELETE CASCADE
);


INSERT INTO events (title, description, event_date, venue, category) VALUES
('Technical Workshop', 'Learn cutting-edge skills and hands-on coding from industry experts.', '2026-10-15', 'Seminar Hall 1', 'Technical'),
('Cultural Fest', 'Experience an amazing showcase of dance, music, and art performances.', '2026-11-02', 'Main Auditorium', 'Cultural'),
('Sports Competition', 'Compete in inter-departmental tournaments and show your athletic prowess.', '2026-11-20', 'University Sports Ground', 'Sports');