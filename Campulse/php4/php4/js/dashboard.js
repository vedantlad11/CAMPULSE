document.addEventListener('DOMContentLoaded', () => {
    // 1. Logout flow
    const logoutBtn = document.querySelector('.logout-link');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const confirmed = confirm('Are you sure you want to log out of CAMPULSE?');
            if (confirmed) {
                // Clear any mock session items if you use localStorage later
                // localStorage.removeItem('studentLoggedIn');
                window.location.href = 'student-login.html';
            }
        });
    }

    // 2. Interactive "Registered" Buttons (Cancellation / Status toggle)
    const registeredButtons = document.querySelectorAll('#events .event-btn');
    registeredButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('div');
            const eventTitle = card.querySelector('h3').innerText;

            const confirmCancel = confirm(`Do you want to withdraw your registration for "${eventTitle}"?`);
            if (confirmCancel) {
                // Animate removal smoothly
                card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';

                setTimeout(() => {
                    card.remove();
                    updateEventCount();
                }, 300);
            }
        });
    });

    // 3. Helper to keep the summary card counter updated dynamically
    function updateEventCount() {
        const remainingEvents = document.querySelectorAll('#events > div > div').length;
        const countOverview = document.querySelector('.features-grid .feature-card:first-child h3');
        
        if (countOverview) {
            countOverview.innerText = `${remainingEvents} Event${remainingEvents === 1 ? '' : 's'}`;
        }

        // Display a clean empty note if no events remain
        const eventsContainer = document.querySelector('#events > div');
        if (remainingEvents === 0 && eventsContainer) {
            eventsContainer.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; background: #fff; border-radius: 8px; border-top: 4px solid #800000;">
                    <p style="color: #6c757d; margin-bottom: 12px;">You currently have no registered upcoming events.</p>
                    <a href="index.html#events" style="color: #800000; font-weight: 600; text-decoration: none;">Browse campus events &rarr;</a>
                </div>
            `;
        }
    }
});