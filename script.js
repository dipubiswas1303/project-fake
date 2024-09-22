const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// JavaScript to handle Dark Mode Toggle
const toggleSwitch = document.getElementById('toggle-switch');
const currentTheme = localStorage.getItem('theme');

// Check for saved theme in localStorage and apply it
if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === 'dark-mode') {
        toggleSwitch.checked = true;
    }
}

// Toggle between dark and light mode
toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    // Save user preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme');
    }
});
