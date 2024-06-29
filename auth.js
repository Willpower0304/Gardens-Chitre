document.addEventListener('DOMContentLoaded', function() {
    const userData = JSON.parse(localStorage.getItem('user'));
    const profileLink = document.getElementById('profile-link');

    if (userData) {
        profileLink.style.display = '';
    } else {
        profileLink.style.display = 'none';
    }
});