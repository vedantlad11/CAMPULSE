document.addEventListener("DOMContentLoaded", () => {
    const cancelButtons = document.querySelectorAll(".cancel-btn");
    const notification = document.getElementById("cancelNotification");
    const notificationText = document.getElementById("notificationText");
    const grid = document.getElementById("registeredEventsGrid");
    const emptyState = document.getElementById("noEventsRegisteredMsg");

    cancelButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const eventId = e.currentTarget.getAttribute("data-id");
            const eventTitle = e.currentTarget.getAttribute("data-title");

            const confirmed = confirm(`Are you sure you want to cancel your registration for "${eventTitle}"?`);

            if (confirmed) {
                const targetCard = document.getElementById(`card-${eventId}`);
                if (targetCard) {
                    targetCard.remove();
                }

                // Show confirmation toast
                notificationText.textContent = `Registration for "${eventTitle}" has been cancelled.`;
                notification.style.display = "block";

                setTimeout(() => {
                    notification.style.display = "none";
                }, 3500);

                // Show empty message if all registered events are cancelled
                if (grid.children.length === 0) {
                    grid.style.display = "none";
                    emptyState.style.display = "block";
                }
            }
        });
    });
});