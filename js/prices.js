// ==========================================
// МОДУЛЬ ДИНАМІЧНОГО ПРЕЙСКУРАНТА ТА CMS
// ==========================================

let currentCurrency = 'UAH'; 
const EUR_RATE = 45.0; // Фіксований курс для перерахунку цін в євро

document.addEventListener("DOMContentLoaded", function() {
    // Якщо ми перебуваємо на сторінці прайсу, виставляємо початкову валюту (UAH)
    if (document.getElementById('currency-label')) {
        switchCurrency('UAH');
    }
});

// Функція динамічного перемикання валют (Вимога №3 ТЗ)
function switchCurrency(currency) {
    currentCurrency = currency;
    const prices = document.querySelectorAll('.price-val');
    const symbols = document.querySelectorAll('.curr-symbol');
    const label = document.getElementById('currency-label');
    
    const btnUah = document.getElementById('btn-uah');
    const btnEur = document.getElementById('btn-eur');

    prices.forEach((price, index) => {
        let uahPrice = parseFloat(price.getAttribute('data-uah'));
        
        // Синхронізація з кастомною CMS: якщо адмін оновив базові тарифи, беремо нові значення
        if (index === 0 && localStorage.getItem('tariff_ukraine')) uahPrice = parseFloat(localStorage.getItem('tariff_ukraine'));
        if (index === 1 && localStorage.getItem('tariff_europe')) uahPrice = parseFloat(localStorage.getItem('tariff_europe'));

        if (currency === 'EUR') {
            let eurPrice = (uahPrice / EUR_RATE).toFixed(2);
            price.innerText = eurPrice;
            if (symbols[index]) symbols[index].innerText = '€';
        } else {
            price.innerText = Math.round(uahPrice);
            if (symbols[index]) symbols[index].innerText = 'грн';
        }
    });

    if (label) label.innerText = currency;
    
    // Візуальне підсвічування активної кнопки валюти
    if (currency === 'EUR') {
        if (btnEur) btnEur.className = 'btn-orange';
        if (btnUah) btnUah.className = 'btn-outline';
    } else {
        if (btnUah) btnUah.className = 'btn-orange';
        if (btnEur) btnEur.className = 'btn-outline';
    }
}

// Функція активації елементів керування вмістом (CMS Панель)
function showAdminFeatures() {
    const cmsContainer = document.getElementById('cms-admin-panel');
    if (cmsContainer) {
        cmsContainer.style.display = 'block';
        // Автоматично підставляємо поточні збережені тарифи в поля інпутів
        document.getElementById('cms-tariff-ua').value = localStorage.getItem('tariff_ukraine');
        document.getElementById('cms-tariff-eu').value = localStorage.getItem('tariff_europe');
    }
}

// Збереження змін через CMS панель безпосередньо в браузері (Вимога №5 ТЗ)
function saveCmsChanges() {
    const uaTariff = document.getElementById('cms-tariff-ua').value;
    const euTariff = document.getElementById('cms-tariff-eu').value;
    
    if (!uaTariff || !euTariff) {
        alert('Будь ласка, заповніть усі поля тарифів!');
        return;
    }

    localStorage.setItem('tariff_ukraine', uaTariff);
    localStorage.setItem('tariff_europe', euTariff);
    
    alert('Дані в СMS успішно оновлено! Сторінку буде перезавантажено для оновлення прайс-листа.');
    window.location.reload();
}