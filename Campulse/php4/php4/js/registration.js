document.addEventListener("DOMContentLoaded", () => {
    // Current simulated student: John Doe
    // Already registered for an event on Sept 20, 2026 at 10:00 AM – 12:00 PM
    const studentSchedule = [
        { date: "20 September 2026", time: "10:00 AM – 12:00 PM" }
    ];

    const eventDatabase = {
        "coding-workshop": {
            title: "Coding Workshop",
            category: "TECHNICAL",
            date: "20 September 2026",
            time: "10:00 AM – 12:00 PM",
            venue: "MPSTME",
            availableSeats: 18,
            deadline: "18 September 2026",
            deadlinePassed: false
        },
        "robotics-competition": {
            title: "Robotics Competition",
            category: "TECHNICAL",
            date: "25 September 2026",
            time: "02:00 PM – 05:00 PM",
            venue: "MPSTME Lab",
            availableSeats: 6,
            deadline: "22 September 2026",
            deadlinePassed: false
        },
        "cultural-fest": {
            title: "Cultural Fest",
            category: "CULTURAL",
            date: "30 September 2026",
            time: "11:00 AM – 06:00 PM",
            venue: "NMIMS Auditorium",
            availableSeats: 112,
            deadline: "28 September 2026",
            deadlinePassed: false
        },
        "sports-day": {
            title: "Sports Day",
            category: "SPORTS",
            date: "04 October 2026",
            time: "08:30 AM – 04:00 PM",
            venue: "University Ground",
            availableSeats: 0, // Capacity test case
            deadline: "01 October 2026",
            deadlinePassed: false
        },
        "ai-seminar": {
            title: "AI Seminar",
            category: "SEMINAR",
            date: "10 October 2026",
            time: "03:00 PM – 05:00 PM",
            venue: "Seminar Hall 1",
            availableSeats: 24,
            deadline: "10 September 2026",
            deadlinePassed: true // Deadline test case
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get("event") || "coding-workshop";
    const eventData = eventDatabase[eventId] || eventDatabase["coding-workshop"];

    // Update Event Information
    document.getElementById("regCategoryBadge").textContent = eventData.category;
    document.getElementById("regEventTitle").textContent = eventData.title;
    document.getElementById("regEventMeta").textContent = `📅 ${eventData.date} | ⏰ ${eventData.time} | 📍 ${eventData.venue}`;
    document.getElementById("regAvailableSeats").textContent = eventData.availableSeats;
    document.getElementById("regDeadline").textContent = eventData.deadline;

    const alertBox = document.getElementById("systemAlertBox");
    const alertText = document.getElementById("systemAlertText");
    const confirmBtn = document.getElementById("confirmRegBtn");
    const confirmCheckbox = document.getElementById("confirmCheckbox");
    const regForm = document.getElementById("regForm");

    // Rule 1: Capacity Check
    if (eventData.availableSeats <= 0) {
        showError("⚠️ Registration Closed: No seats available.");
    }
    // Rule 2: Deadline Check
    else if (eventData.deadlinePassed) {
        showError("⏳ Registration Closed: The deadline has passed.");
    }
    // Rule 3: Schedule Conflict Check
    else {
        const hasConflict = studentSchedule.some(
            slot => slot.date === eventData.date && slot.time === eventData.time
        );
        if (hasConflict && eventId !== "coding-workshop") {
            showError("⚠️ Schedule Conflict: You already have an event at this time.");
        }
    }

    function showError(msg) {
        alertText.textContent = msg;
        alertBox.style.display = "block";
        confirmBtn.disabled = true;
        confirmBtn.style.opacity = "0.4";
        confirmBtn.style.cursor = "not-allowed";
        confirmCheckbox.disabled = true;
    }

    // Handle Confirmation
    regForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!confirmCheckbox.checked) return;

        document.getElementById("registrationFormCard").style.display = "none";
        document.getElementById("successEventName").textContent = eventData.title;
        document.getElementById("registrationSuccessCard").style.display = "block";
    });
});