// ==========================================
// МОДУЛЬ АВТОРИЗАЦІЇ ТА КОНТРОЛЮ ДОСТУПУ
// ==========================================

document.addEventListener("DOMContentLoaded", function() {
    checkAuthState();
});

function checkAuthState() {
    const userName = localStorage.getItem('userName');
    const userRole = localStorage.getItem('userRole');
    
    const loginBtn = document.getElementById('loginHeaderBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    if (userName) {
        if (loginBtn) {
            loginBtn.innerHTML = `<i class="fas fa-user-circle"></i> ${userName} ${userRole === 'admin' ? '(АДМІН)' : ''}`;
            loginBtn.style.background = "#002147";
            loginBtn.onclick = null; 
        }
        if (logoutBtn) logoutBtn.style.display = "inline-block";
        
        // Якщо зайшов адмін і на сторінці є функція активації CMS — вмикаємо її
        if (userRole === 'admin' && typeof showAdminFeatures === 'function') {
            showAdminFeatures();
        }
    } else {
        if (loginBtn) {
            loginBtn.innerHTML = `<i class="fas fa-user"></i> ВХІД`;
            loginBtn.style.background = "";
            loginBtn.onclick = openLogin;
        }
        if (logoutBtn) logoutBtn.style.display = "none";
    }
}

function openLogin() {
    const modal = document.getElementById('loginModal');
    if (modal) modal.style.display = 'flex';
}

function closeLogin() {
    const modal = document.getElementById('loginModal');
    if (modal) modal.style.display = 'none';
}

// Обробка форми авторизації
document.addEventListener('submit', function(e) {
    if (e.target && e.target.id === 'loginForm') {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Перевірка на адміністратора (Керівник МПП ТРЕЙД)
        if (email === 'admin@mpp-trade.com' && password === 'admin2026') {
            localStorage.setItem('userName', 'Олександр Казимирович'); 
            localStorage.setItem('userRole', 'admin');
            alert('Успішний вхід в CMS панель адміністратора МПП «ТРЕЙД»!');
        } else {
            // Звичайний клієнт
            localStorage.setItem('userName', email.split('@')[0]);
            localStorage.setItem('userRole', 'client');
            alert('Успішна реєстрація в кабінеті клієнта! Нараховано знижку 10%.');
        }
        
        closeLogin();
        checkAuthState();
        window.location.reload();
    }
});

function handleLogout() {
    localStorage.removeItem('userName');
    localStorage.removeItem('userRole');
    alert('Ви вийшли з системи.');
    window.location.reload();
}