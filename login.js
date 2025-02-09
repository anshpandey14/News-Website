// JavaScript for Popup Login
const openLogin = document.getElementById('login');
const loginPopup = document.getElementById('login-popup');
const closeLogin = document.getElementById('close-login');

// Open the popup
openLogin.addEventListener('click', () => {
    loginPopup.style.display = 'flex';
});

// Close the popup
closeLogin.addEventListener('click', () => {
    loginPopup.style.display = 'none';
});

// Close popup on clicking outside the container
window.addEventListener('click', (event) => {
    if (event.target === loginPopup) {
        loginPopup.style.display = 'none';
    }
});
