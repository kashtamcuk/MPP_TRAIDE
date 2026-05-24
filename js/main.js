/**
 * СИСТЕМА АВТОРИЗАЦІЇ ТА ПАМ'ЯТІ (localStorage)
 */

// Функція, яка запускається автоматично при завантаженні будь-якої сторінки
document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
    
    // Якщо ми на сторінці з калькулятором, додаємо обробник
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});

function checkLoginStatus() {
    const savedUser = localStorage.getItem('userName');
    const loginBtn = document.getElementById('loginHeaderBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const discountInfo = document.getElementById('discount-info');

    if (savedUser) {
        // Якщо в пам'яті є користувач — змінюємо кнопки
        loginBtn.innerHTML = `<i class="fas fa-user-check"></i> ${savedUser}`;
        loginBtn.style.background = '#28a745';
        loginBtn.onclick = null; // Вимикаємо відкриття вікна, бо ми вже всередині
        
        logoutBtn.style.display = 'inline-block'; // Показуємо кнопку Вихід
        if (discountInfo) discountInfo.style.display = 'block'; // Показуємо інфо про знижку
    } else {
        // Якщо користувача немає
        loginBtn.innerHTML = `<i class="fas fa-user"></i> ВХІД`;
        loginBtn.style.background = '#002147';
        loginBtn.onclick = openLogin;
        
        logoutBtn.style.display = 'none';
        if (discountInfo) discountInfo.style.display = 'none';
    }
}

function handleLogin(e) {
    e.preventDefault();
    const emailValue = document.getElementById('email').value;
    const name = emailValue.split('@')[0].toUpperCase();

    // Зберігаємо ім'я в пам'ять браузера
    localStorage.setItem('userName', name);
    
    alert(`Вітаємо, ${name}! Ви успішно увійшли.`);
    closeLogin();
    checkLoginStatus(); // Оновлюємо інтерфейс

    // Якщо на сторінці є калькулятор — перераховуємо ціну зі знижкою
    if (document.getElementById('distance')) {
        calculatePrice();
    }
}

function handleLogout() {
    if (confirm("Ви дійсно хочете вийти з акаунта?")) {
        localStorage.removeItem('userName'); // Видаляємо з пам'яті
        alert("Ви вийшли з системи.");
        checkLoginStatus(); // Оновлюємо інтерфейс
        
        // Перераховуємо ціну (прибираємо знижку)
        if (document.getElementById('distance')) {
            calculatePrice();
        }
    }
}

// Функції вікна
function openLogin() {
    document.getElementById('loginModal').style.display = 'flex';
}

function closeLogin() {
    document.getElementById('loginModal').style.display = 'none';
}

/**
 * ЛОГІКА КАЛЬКУЛЯТОРА
 */
function calculatePrice() {
    const distance = parseFloat(document.getElementById('distance').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const priceDisplay = document.getElementById('total-price');

    if (distance > 0 && weight > 0) {
        const baseRate = 25;
        const weightRate = 150;
        let total = (distance * baseRate) + (weight * weightRate);
        
        // Перевірка знижки через localStorage
        if (localStorage.getItem('userName')) {
            total = total * 0.9; // 10% знижка
        }

        // Анімація цифр
        animateValue(priceDisplay, 0, Math.round(total), 500);
    }
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString();
        if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
}