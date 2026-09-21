document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const statusBanner = document.getElementById('status-banner');

    // Form inputs
    const studentId = document.getElementById('student-id');
    const studentName = document.getElementById('student-name');
    const studentEmail = document.getElementById('student-email');
    const department = document.getElementById('department');
    const year = document.getElementById('year');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');

    // Helper: Display error under input
    function setError(input, message) {
        const formGroup = input.parentElement;
        const errorDisplay = formGroup.querySelector('.error-msg');
        input.classList.add('input-error');
        errorDisplay.innerText = message;
        errorDisplay.style.display = 'block';
    }

    // Helper: Clear error state
    function clearError(input) {
        const formGroup = input.parentElement;
        const errorDisplay = formGroup.querySelector('.error-msg');
        input.classList.remove('input-error');
        errorDisplay.innerText = '';
        errorDisplay.style.display = 'none';
    }

    // Clear errors when the user begins typing/selecting
    [studentId, studentName, studentEmail, department, year, phone, password].forEach(field => {
        field.addEventListener('input', () => clearError(field));
        field.addEventListener('change', () => clearError(field));
    });

    // Form Validation logic
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // 1. Student ID
        if (studentId.value.trim() === '') {
            setError(studentId, 'Please enter your SAP / Student ID.');
            isValid = false;
        } else if (studentId.value.trim().length < 6) {
            setError(studentId, 'Student ID must be at least 6 characters.');
            isValid = false;
        } else {
            clearError(studentId);
        }

        // 2. Full Name
        if (studentName.value.trim() === '') {
            setError(studentName, 'Please enter your full name.');
            isValid = false;
        } else {
            clearError(studentName);
        }

        // 3. Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (studentEmail.value.trim() === '') {
            setError(studentEmail, 'Please enter your email address.');
            isValid = false;
        } else if (!emailPattern.test(studentEmail.value.trim())) {
            setError(studentEmail, 'Please enter a valid email format.');
            isValid = false;
        } else {
            clearError(studentEmail);
        }

        // 4. Department
        if (department.value === '') {
            setError(department, 'Please select your department.');
            isValid = false;
        } else {
            clearError(department);
        }

        // 5. Year
        if (year.value === '') {
            setError(year, 'Please select your current year.');
            isValid = false;
        } else {
            clearError(year);
        }

        // 6. Phone Number (10 digits)
        const phonePattern = /^[0-9]{10}$/;
        const cleanPhone = phone.value.trim().replace(/\D/g, '');
        if (phone.value.trim() === '') {
            setError(phone, 'Please enter your phone number.');
            isValid = false;
        } else if (!phonePattern.test(cleanPhone)) {
            setError(phone, 'Please enter a valid 10-digit mobile number.');
            isValid = false;
        } else {
            clearError(phone);
        }

        // 7. Password
        if (password.value.trim() === '') {
            setError(password, 'Please create a password.');
            isValid = false;
        } else if (password.value.length < 6) {
            setError(password, 'Password must be at least 6 characters long.');
            isValid = false;
        } else {
            clearError(password);
        }

        // Final feedback
        if (isValid) {
            statusBanner.className = 'status-banner success-banner';
            statusBanner.innerText = `Account created successfully for ${studentName.value.trim()}! Redirecting to Home...`;
            statusBanner.style.display = 'block';

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        } else {
            statusBanner.className = 'status-banner error-banner';
            statusBanner.innerText = 'Please correct the highlighted fields above.';
            statusBanner.style.display = 'block';
        }
    });
});