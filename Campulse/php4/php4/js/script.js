document.addEventListener("DOMContentLoaded", function () {

    // 1. Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            let section = document.querySelector(this.getAttribute("href"));

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });


    // 2. Get the popup elements
    let modal = document.getElementById("modal-overlay");
    let closeButton = document.getElementById("modal-close");
    let title = document.getElementById("modal-title");
    let description = document.getElementById("modal-desc");
    let form = document.getElementById("modal-form");


    // 3. Open popup when Register Now is clicked
    document.querySelectorAll(".event-btn").forEach(function (button) {

        button.addEventListener("click", function () {

            let eventName = button.parentElement.querySelector("h3").innerText;

            title.innerText = "Register for " + eventName;
            description.innerText = "Enter your details to confirm your attendance.";

            modal.style.display = "flex";
        });

    });


    // 4. Close popup
    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });


    // 5. Submit registration form
    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let name = document.getElementById("student-name").value;

        title.innerText = "You're Registered!";
        description.innerText = "See you there, " + name + "!";

        form.style.display = "none";

        setTimeout(function () {
            modal.style.display = "none";
            form.reset();
            form.style.display = "block";
        }, 2000);

    });

});