// ==========================================
// МОДУЛЬ ІНТЕРАКТИВНОЇ КАРТИ (LEAFLET.JS)
// ==========================================

document.addEventListener("DOMContentLoaded", function() {
    // Перевіряємо, чи є елемент карти на цій сторінці (щоб не було помилок на інших сторінках)
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    // 1. Координати ключових точок
    const novyiRozdil = [49.467, 24.133]; // Головний офіс МПП "ТРЕЙД" (Новий Розділ)
    const rome = [41.902, 12.496];        // Пріоритетний напрямок Італія (Рим)
    const centerEurope = [46.000, 18.000]; // Центр для початкового фокусу карти

    // 2. Ініціалізація карти та встановлення початкового масштабу
    const map = L.map('map').setView(centerEurope, 5);

    // 3. Підключаємо безкоштовний шар карти OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);

    // 4. Створюємо кастомні іконки для маркерів (щоб виглядало дорого-багато для диплома)
    const officeIcon = L.divIcon({
        html: '<i class="fas fa-building" style="color: #002147; font-size: 24px; text-shadow: 0 2px 5px rgba(0,0,0,0.3);"></i>',
        iconSize: [24, 24],
        iconAnchor: [12, 12],
        className: 'custom-map-icon'
    });

    const destinationIcon = L.divIcon({
        html: '<i class="fas fa-truck" style="color: #ff5722; font-size: 24px; text-shadow: 0 2px 5px rgba(0,0,0,0.3);"></i>',
        iconSize: [24, 24],
        iconAnchor: [12, 12],
        className: 'custom-map-icon'
    });

    // 5. Додаємо маркер Головного офісу (Новий Розділ)
    const markerOffice = L.marker(novyiRozdil, { icon: officeIcon }).addTo(map);
    markerOffice.bindPopup(`
        <div style="font-family: Arial, sans-serif; direction: ltr;">
            <strong style="color: #002147; font-size: 14px;">МПП «ТРЕЙД»</strong><br>
            <span style="color: #ff5722; font-weight: bold; font-size: 11px;">ГОЛОВНИЙ ОФІС ТА АТП</span><br>
            <small>Львівська обл., м. Новий Розділ,<br>проспект Шевченка, 25</small>
        </div>
    `);

    // 6. Додаємо маркер Кінцевої точки в Італії (Рим)
    const markerItaly = L.marker(rome, { icon: destinationIcon }).addTo(map);
    markerItaly.bindPopup(`
        <div style="font-family: Arial, sans-serif;">
            <strong style="color: #002147; font-size: 14px;">Логістичний хаб ЄС</strong><br>
            <span style="color: #28a745; font-weight: bold; font-size: 11px;">КЛЮЧОВИЙ НАПРЯМОК</span><br>
            <small>Італія, м. Рим (Центральний склад доставки)</small>
        </div>
    `);

    // 7. Малюємо лінію маршруту (пунктирну логістичну лінію)
    const routeCoordinates = [novyiRozdil, rome];
    const routeLine = L.polyline(routeCoordinates, {
        color: '#ff5722',       // Помаранчевий колір компанії
        weight: 4,              // Товщина лінії
        opacity: 0.8,           // Прозорість
        dashArray: '10, 10',    // Шаблон пунктиру (10px лінія, 10px пропуск)
        lineJoin: 'round'
    }).addTo(map);

    // Автоматично відкриваємо підказку над головним офісом при завантаженні сторінки
    markerOffice.openPopup();
});