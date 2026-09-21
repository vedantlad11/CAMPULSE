document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const statusBanner = document.getElementById('status-banner');
    const identifierInput = document.getElementById('login-identifier');
    const passwordInput = document.getElementById('login-password');

    // Helper: Show input error
    function setError(input, message) {
        const formGroup = input.parentElement;
        const errorDisplay = formGroup.querySelector('.error-msg');
        input.classList.add('input-error');
        errorDisplay.innerText = message;
        errorDisplay.style.display = 'block';
    }

    // Helper: Clear input error
    function clearError(input) {
        const formGroup = input.parentElement;
        const errorDisplay = formGroup.querySelector('.error-msg');
        input.classList.remove('input-error');
        errorDisplay.innerText = '';
        errorDisplay.style.display = 'none';
    }

    // Clear validation messages as the user types
    [identifierInput, passwordInput].forEach(field => {
        field.addEventListener('input', () => clearError(field));
    });

    // Form Submission Handler
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        const identifierVal = identifierInput.value.trim();
        const passwordVal = passwordInput.value.trim();

        // 1. Validate Email / Student ID
        if (identifierVal === '') {
            setError(identifierInput, 'Please enter your Email or Student ID.');
            isValid = false;
        } else if (identifierVal.length < 4) {
            setError(identifierInput, 'Please enter a valid credential.');
            isValid = false;
        } else {
            clearError(identifierInput);
        }

        // 2. Validate Password
        if (passwordVal === '') {
            setError(passwordInput, 'Please enter your password.');
            isValid = false;
        } else {
            clearError(passwordInput);
        }

        // 3. Process Frontend Submission
        if (isValid) {
            statusBanner.className = 'status-banner success-banner';
            statusBanner.innerText = 'Login successful! Redirecting to Dashboard...';
            statusBanner.style.display = 'block';

            // Redirect to student-dashboard.html after 1.5 seconds
            setTimeout(() => {
                window.location.href = 'student-dashboard.html';
            }, 1500);
        } else {
            statusBanner.className = 'status-banner error-banner';
            statusBanner.innerText = 'Please check your inputs and try again.';
            statusBanner.style.display = 'block';
        }
    });
});