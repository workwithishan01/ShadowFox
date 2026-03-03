// Punjab Kings Fanpage - Minimal JavaScript

// Mobile Menu Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link (smooth scroll handles navigation)
    navMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
        });
    });
}

// Simple form submit - prevents page reload, shows message
const joinForm = document.querySelector('.join-form');
if (joinForm) {
    joinForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thanks for joining! You are now part of the Punjab Kings fan family. #SaddaPunjab');
    });
}
