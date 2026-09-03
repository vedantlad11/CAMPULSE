document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const studentIdInput = document.getElementById('studentId');
    const passwordInput = document.getElementById('password');
    const idError = document.getElementById('idError');
    const passError = document.getElementById('passError');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        idError.style.display = 'none';
        passError.style.display = 'none';

        const studentIdValue = studentIdInput.value.trim();
        if (studentIdValue === '') {
            idError.innerText = 'Student ID cannot be empty.';
            idError.style.display = 'block';
            isValid = false;
        }

        const passwordValue = passwordInput.value;
        if (passwordValue.length < 6) {
            passError.innerText = 'Password must be at least 6 characters long.';
            passError.style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            alert('Login successful! Redirecting to your CAMPULSE dashboard...');
            loginForm.reset();
        }
    });
});