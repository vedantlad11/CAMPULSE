document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a[href^="#"], header a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const eventCards = document.querySelectorAll('section#events > div > div');
    
    eventCards.forEach(card => {
        card.style.cursor = 'pointer';
        
        card.addEventListener('click', () => {
            const eventName = card.querySelector('h3').innerText;
            alert(`You clicked on "${eventName}". Log in to register for this event!`);
        });
    });

    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            nav.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.05)';
        }
    });

    const loginBtn = document.querySelector('nav ul li a[href="#login"]');
    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Login modal/page functionality coming soon!');
        });
    }
});