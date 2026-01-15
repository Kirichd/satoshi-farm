// Variable for score
let score = 3887500;

// Function to handle tap/click on hero
function handleTap(event) {
    event.preventDefault();
    // Increase score
    score += 10;
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
        scoreElement.innerText = score.toLocaleString();
    }

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
    }, 800);
}

// Function to switch screens
function handleMenuClick(event) {
    const button = event.currentTarget;
    const targetScreenId = button.getAttribute('data-screen');
    
    // 1. Update Menu Buttons visual state
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));
    button.classList.add('active');

    // 2. Switch Screens
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active-screen');
    });

    // Show target screen
    const targetScreen = document.getElementById(targetScreenId);
    if (targetScreen) {
        targetScreen.classList.add('active-screen');
    }

    console.log("Switched to:", targetScreenId);
}

// Initialization on DOM load
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.getElementById('hero');
    const menuItems = document.querySelectorAll('.menu-item');

    // Add handlers for hero
    if (hero) {
        hero.addEventListener('click', handleTap);
        hero.addEventListener('touchstart', handleTap, { passive: false }); // passive: false to allow preventDefault
    }

    // Add handlers for menu
    menuItems.forEach(item => {
        item.addEventListener('click', handleMenuClick);
        // We use click for logic, touchstart might be added for faster response if needed, 
        // but often click is enough for hybrid apps.
    });
});

// Error handling
window.addEventListener('error', (event) => {
    console.error('JS Error:', event.error);
});
