// Variable for score
let score = 3887500;

// Function to handle tap/click on hero
function handleTap(event) {
    event.preventDefault();
    // Increase score
    score += 10;
    document.getElementById('score').innerText = score.toLocaleString();

    // Create floating number
    const floatingText = document.createElement('div');
    floatingText.innerText = '+10';
    floatingText.className = 'floating-text';

    // Position text at click/tap location
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX || (rect.left + rect.width / 2);
    const y = event.clientY || (rect.top + rect.height / 2);

    floatingText.style.left = `${x}px`;
    floatingText.style.top = `${y}px`;

    document.body.appendChild(floatingText);

    // Remove element after animation
    setTimeout(() => {
        if (floatingText.parentNode) {
            floatingText.parentNode.removeChild(floatingText);
        }
    }, 1000);
}

// Function to switch menu tabs
function handleMenuClick(event) {
    const item = event.currentTarget;
    // Remove 'active' class from all buttons
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));

    // Add 'active' class to clicked button
    item.classList.add('active');

    // Log selection (can be replaced with navigation)
    const label = item.querySelector('span').innerText;
    console.log("Selected tab:", label);

    // Here you can add logic for navigating to other screens or calling functions
}

// Initialization on DOM load
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.getElementById('hero');
    const menuItems = document.querySelectorAll('.menu-item');

    // Add handlers for hero
    hero.addEventListener('click', handleTap);
    hero.addEventListener('touchstart', handleTap, { passive: true });

    // Add handlers for menu
    menuItems.forEach(item => {
        item.addEventListener('click', handleMenuClick);
        item.addEventListener('touchstart', handleMenuClick, { passive: true });

        // Keyboard support
        item.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                handleMenuClick({ currentTarget: item });
            }
        });
    });

    // Set first tab active by default
    if (menuItems.length > 0) {
        menuItems[0].classList.add('active');
    }
});

// Error handling (optional)
window.addEventListener('error', (event) => {
    console.error('Error:', event.error);
});

// PWA support (if needed)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Register service worker (if sw.js file exists)
        // navigator.serviceWorker.register('/sw.js');
    });
}