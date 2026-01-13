let score = 3887500;
const scoreElement = document.getElementById('score');

function handleTap(event) {
    // 1. Увеличиваем счет
    score += 100;
    scoreElement.innerText = score.toLocaleString();

    // 2. Создаем всплывающую цифру
    const floatText = document.createElement('div');
    floatText.className = 'floating-text';
    floatText.innerText = '+100';
    
    // Позиция клика
    const x = event.clientX;
    const y = event.clientY;
    
    floatText.style.left = `${x}px`;
    floatText.style.top = `${y}px`;

    document.body.appendChild(floatText);

    // 3. Удаляем цифру через 1 секунду
    setTimeout(() => {
        floatText.remove();
    }, 1000);

    // 4. Вибрация (если на телефоне)
    if (window.navigator.vibrate) {
        window.navigator.vibrate(10);
    }
}