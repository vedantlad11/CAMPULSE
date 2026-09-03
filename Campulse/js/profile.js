document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logoutBtn');

    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const confirmLogout = confirm('Are you sure you want to log out of CAMPULSE?');
        if (confirmLogout) {
            alert('Logged out successfully. Redirecting to home...');
            window.location.href = 'index.html';
        }
    });
});