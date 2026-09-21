document.addEventListener("DOMContentLoaded", () => {
    const eventDatabase = {
        "coding-workshop": {
            title: "Coding Workshop",
            category: "TECHNICAL",
            meta: "📅 20 September 2026 | ⏰ 10:00 AM – 12:00 PM | 📍 MPSTME",
            capacity: "50",
            seats: "18",
            deadline: "18 September 2026",
            description: "Learn the basics of programming through a hands-on workshop led by industry mentors. Covering problem decomposition, syntax standards, and core algorithmic problem solving."
        },
        "robotics-competition": {
            title: "Robotics Competition",
            category: "TECHNICAL",
            meta: "📅 25 September 2026 | ⏰ 02:00 PM – 05:00 PM | 📍 MPSTME Lab",
            capacity: "30 Teams",
            seats: "6",
            deadline: "22 September 2026",
            description: "An arena-based line-follower and autonomous bot challenge testing speed, sensor accuracy, obstacle clearance, and circuit design."
        },
        "cultural-fest": {
            title: "Cultural Fest",
            category: "CULTURAL",
            meta: "📅 30 September 2026 | ⏰ 11:00 AM – 06:00 PM | 📍 NMIMS Auditorium",
            capacity: "400",
            seats: "112",
            deadline: "28 September 2026",
            description: "Annual flagship campus festival featuring live acoustic sets, street drama, art exhibits, and classical dance performances."
        },
        "sports-day": {
            title: "Sports Day",
            category: "SPORTS",
            meta: "📅 04 October 2026 | ⏰ 08:30 AM – 04:00 PM | 📍 University Ground",
            capacity: "200",
            seats: "45",
            deadline: "01 October 2026",
            description: "Track sprint qualifiers, football playoffs, and inter-department table tennis championships. Bring sports kit and university ID."
        },
        "ai-seminar": {
            title: "AI Seminar",
            category: "SEMINAR",
            meta: "📅 10 October 2026 | ⏰ 03:00 PM – 05:00 PM | 📍 Seminar Hall 1",
            capacity: "120",
            seats: "24",
            deadline: "08 October 2026",
            description: "Keynote presentation exploring Large Language Models, agentic automation, edge AI inference, and ethics in software engineering."
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get("id") || "coding-workshop";
    const data = eventDatabase[eventId] || eventDatabase["coding-workshop"];

    document.title = `${data.title} - CAMPULSE`;
    document.getElementById("eventDetailTitle").textContent = data.title;
    document.getElementById("eventDetailBadge").textContent = data.category;
    document.getElementById("eventDetailMeta").textContent = data.meta;
    document.getElementById("eventDetailCapacity").textContent = data.capacity;
    document.getElementById("eventDetailSeats").textContent = data.seats;
    document.getElementById("eventDetailDeadline").textContent = data.deadline;
    document.getElementById("eventDetailDescription").textContent = data.description;

    const registerLink = document.getElementById("registerCtaBtn");
    if (registerLink) {
        registerLink.href = `register.html?event=${eventId}`;
    }
});