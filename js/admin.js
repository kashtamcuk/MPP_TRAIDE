// ==========================================
// МОДУЛЬ КЕРУВАННЯ ТАРИФАМИ (CMS / ADMIN)
// ==========================================

document.addEventListener("DOMContentLoaded", function() {
    // 1. ЗАХИСТ ВХОДУ: Запитуємо пароль перед тим, як показати сторінку
    const password = prompt("Введіть секретний пароль адміністратора:");
    
    // Якщо пароль неправильний або користувач натиснув "Скасувати"
    if (password !== "admin123") {
        alert("Доступ заборонено! Невірний пароль.");
        window.location.href = "index.html"; // Викидаємо зловмисника на головну сторінку
        return; // Зупиняємо виконання коду сторінки
    }

    // Елементи форми (виконуються тільки якщо пароль вірний)
    const form = document.getElementById('admin-tariffs-form');
    const inputUkraine = document.getElementById('admin-ukraine');
    const inputEurope = document.getElementById('admin-europe');
    const inputWeight = document.getElementById('admin-weight');
    const successAlert = document.getElementById('success-alert');

    // 2. Завантажуємо поточні тарифи з пам'яті в інпути форми
    inputUkraine.value = localStorage.getItem('tariff_ukraine') || '25';
    inputEurope.value = localStorage.getItem('tariff_europe') || '45';
    inputWeight.value = localStorage.getItem('tariff_weight') || '12';

    // 3. Обробка збереження нових тарифів
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Зупиняємо перезавантаження сторінки

            // Зберігаємо нові значення в localStorage
            localStorage.setItem('tariff_ukraine', inputUkraine.value);
            localStorage.setItem('tariff_europe', inputEurope.value);
            localStorage.setItem('tariff_weight', inputWeight.value);

            // Показуємо повідомлення про успіх
            successAlert.style.display = 'block';

            // Ховаємо сповіщення через 4 секунди
            setTimeout(() => {
                successAlert.style.display = 'none';
            }, 4000);
        });
    }
});