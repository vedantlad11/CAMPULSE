document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profileForm');
    const successBanner = document.getElementById('successBanner');

    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        successBanner.style.display = 'block';
        
        setTimeout(() => {
            successBanner.style.display = 'none';
        }, 3000);
    });
});