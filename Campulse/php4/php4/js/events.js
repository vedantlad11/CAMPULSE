document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("eventSearchInput");
    const eventCards = document.querySelectorAll(".event-card");
    const noResultsMsg = document.getElementById("noResultsMsg");

    if (!searchInput) return;

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        let visibleCount = 0;

        eventCards.forEach((card) => {
            const cardText = card.textContent.toLowerCase();
            const isMatch = cardText.includes(query);

            if (isMatch) {
                card.style.display = "flex";
                visibleCount++;
            } else {
                card.style.display = "none";
            }
        });

        if (visibleCount === 0) {
            noResultsMsg.style.display = "block";
        } else {
            noResultsMsg.style.display = "none";
        }
    });
});