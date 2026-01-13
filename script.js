// Переменная для счета
let score = 3887500;

// --- ЛОГИКА ТАПА ПО ГЕРОЮ ---
function handleTap(event) {
    // Увеличиваем счет
    score += 10; // Допустим, +10 за клик
    document.getElementById('score').innerText = score.toLocaleString();

    // Создаем всплывающую цифру
    const floatingText = document.createElement('div');
    floatingText.innerText = '+10';
    floatingText.className = 'floating-text';
    
    // Позиционируем текст в месте клика
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    floatingText.style.left = `${event.clientX}px`;
    floatingText.style.top = `${event.clientY}px`;
    
    document.body.appendChild(floatingText);

    // Удаляем элемент после анимации (1 секунда)
    setTimeout(() => {
        floatingText.remove();
    }, 1000);
}

// --- ЛОГИКА ПЕРЕКЛЮЧЕНИЯ ВКЛАДОК МЕНЮ ---
document.addEventListener('DOMContentLoaded', () => {
    // Находим все кнопки меню
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // 1. Убираем класс 'active' у всех кнопок
            menuItems.forEach(el => el.classList.remove('active'));
            
            // 2. Добавляем класс 'active' той кнопке, на которую нажали
            item.classList.add('active');
            
            // Здесь можно добавить логику перехода на другие экраны
            console.log("Выбрана вкладка:", item.querySelector('span').innerText);
        });
    });
});
