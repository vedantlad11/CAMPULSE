document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.getElementById('registerBtn');
    const successModal = document.getElementById('successModal');
    const closeModal = document.getElementById('closeModal');

    registerBtn.addEventListener('click', () => {
        successModal.style.display = 'flex';
    });

    closeModal.addEventListener('click', () => {
        successModal.style.display = 'none';
        registerBtn.textContent = 'Registered ✔';
        registerBtn.style.backgroundColor = '#28a745';
        registerBtn.disabled = true;
    });

    window.addEventListener('click', (event) => {
        if (event.target === successModal) {
            successModal.style.display = 'none';
        }
    });
});