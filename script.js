// Начальное значение дохода (убираем знак $ и запятую для расчетов)
let income = 8500;

function handleTap() {
    // 1. Увеличиваем доход на 10 при каждом тапе
    income += 10;

    // 2. Находим элемент на экране и обновляем его текст
    // Мы используем .toLocaleString(), чтобы цифры разделялись запятыми (8,510)
    const incomeElement = document.querySelector('.value.gold');
    if (incomeElement) {
        incomeElement.innerText = "$" + income.toLocaleString();
    }

    // 3. Эффект вибрации для телефона
    if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.HapticFeedback.impactOccurred('medium');
    }
}

// Инициализация Telegram WebApp
if (window.Telegram && window.Telegram.WebApp) {
    window.Telegram.WebApp.expand(); // Развернуть на весь экран
    window.Telegram.WebApp.ready();
}