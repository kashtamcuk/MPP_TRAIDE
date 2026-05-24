// ==========================================
// МОДУЛЬ ІНТЕРАКТИВНОГО КАЛЬКУЛЯТОРА ТА РАХУНКІВ
// ==========================================

// Ініціалізація базових тарифів у пам'яті, якщо вони ще не задані
if (!localStorage.getItem('tariff_ukraine')) localStorage.setItem('tariff_ukraine', '25');
if (!localStorage.getItem('tariff_europe')) localStorage.setItem('tariff_europe', '45');
if (!localStorage.getItem('tariff_weight')) localStorage.setItem('tariff_weight', '12');

document.addEventListener("DOMContentLoaded", function() {
    const calcForm = document.getElementById('logistics-calc');
    if (calcForm) {
        // Автоматично перераховувати вартість при будь-якій зміні у формі
        calcForm.addEventListener('input', calculateCost);
        
        // Робимо первинний розрахунок при завантаженні сторінки
        calculateCost();
    }
});

function calculateCost() {
    const distance = parseFloat(document.getElementById('distance').value) || 0;
    const weight = parseFloat(document.getElementById('weight').value) || 0;
    const type = document.getElementById('route-type').value; 
    const ecoStandard = document.getElementById('eco-standard') ? document.getElementById('eco-standard').value : 'euro6';

    if (distance === 0 || weight === 0) {
        document.getElementById('total-price').innerText = '0';
        return;
    }

    // Беремо актуальні тарифи з нашої CMS (localStorage)
    let baseTariff = type === 'ukraine' 
        ? parseFloat(localStorage.getItem('tariff_ukraine')) 
        : parseFloat(localStorage.getItem('tariff_europe'));

    // Якщо рейс міжнародний (в Італію/ЄС) і тягач старішого стандарту Euro 5, 
    // додаємо +5 грн/км через вищі європейські збори за дороги. Euro 6 — екологічний і дешевший.
    if (type === 'europe' && ecoStandard === 'euro5') {
        baseTariff += 5; 
    }

    let cost = distance * baseTariff;
    
    // Додаємо вартість за тоннаж вантажу
    const weightTariff = parseFloat(localStorage.getItem('tariff_weight'));
    cost += weight * weightTariff;

    // Автоматична знижка 10% для авторизованих користувачів (Вимога №4 ТЗ)
    const discountInfo = document.getElementById('discount-info');
    if (localStorage.getItem('userName')) {
        cost = cost * 0.9;
        if (discountInfo) discountInfo.style.display = 'block';
    } else {
        if (discountInfo) discountInfo.style.display = 'none';
    }

    // Вивід результату з красивим форматуванням чисел
    document.getElementById('total-price').innerText = Math.round(cost).toLocaleString();
}

// Формування друкованого бланку рахунку-фактури в Окремому Вікні з підтримкою html2pdf.js
function generateInvoice() {
    const distance = document.getElementById('distance').value;
    const weight = document.getElementById('weight').value;
    const totalPrice = document.getElementById('total-price').innerText;
    const routeType = document.getElementById('route-type').value === 'ukraine' ? 'Внутрішнє перевезення по Україні' : 'Міжнародний рейс (Україна — Італія / ЄС)';
    const user = localStorage.getItem('userName') || "Приватна особа (Гість)";
    const eco = document.getElementById('eco-standard') ? document.getElementById('eco-standard').options[document.getElementById('eco-standard').selectedIndex].text : 'Магістральний тягач Euro 6';

    if (!distance || !weight || totalPrice == "0" || totalPrice == "0 ₴") {
        alert("Будь ласка, заповніть параметри калькулятора для формування рахунку!");
        return;
    }

    // Створюємо унікальний номер рахунку
    const invoiceNumber = Math.floor(Math.random() * 9000) + 1000;
    const currentDate = new Date().toLocaleDateString('uk-UA');

    // Відкриваємо нову вкладку браузера
    const invoiceWindow = window.open('', '_blank');
    
    if (!invoiceWindow) {
        alert("Браузер заблокував спливаюче вікно! Будь ласка, дозвольте спливаючі вікна для цього сайту.");
        return;
    }

    // Записуємо структуру сторінки рахунку в нове вікно
    invoiceWindow.document.write(`
        <!DOCTYPE html>
        <html lang="uk">
        <head>
            <meta charset="UTF-8">
            <title>Рахунок-фактура № ТР-${invoiceNumber}</title>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
            <style>
                body { font-family: 'Arial', sans-serif; background-color: #f4f6f9; padding: 20px; margin: 0; color: #333; }
                .actions-panel { max-width: 800px; margin: 0 auto 15px auto; display: flex; gap: 10px; justify-content: flex-end; }
                .btn { padding: 12px 25px; font-weight: bold; font-size: 14px; border: none; border-radius: 5px; cursor: pointer; transition: 0.2s; }
                .btn-pdf { background-color: #ff5722; color: white; }
                .btn-pdf:hover { background-color: #e64a19; }
                .btn-close { background-color: #777; color: white; }
                .btn-close:hover { background-color: #555; }
                
                /* Стиль контейнера рахунку, який піде в PDF */
                #invoice-container { max-width: 800px; margin: 0 auto; background: #ffffff; padding: 40px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border-radius: 4px; }
                table { width: 100%; border-collapse: collapse; }
                td { color: #333333; }
                th { background-color: #002147; color: #ffffff; padding: 12px; font-size: 13px; text-align: left; }
                .border-table td { padding: 12px; border: 1px solid #dddddd; font-size: 13px; }
                
                /* Приховуємо панель кнопок під час друку або сканування бібліотекою */
                @media print { .actions-panel { display: none; } body { background: #fff; padding: 0; } #invoice-container { box-shadow: none; padding: 0; } }
            </style>
        </head>
        <body>

            <div class="actions-panel">
                <button class="btn btn-pdf" onclick="downloadPDF()">Завантажити як PDF-файл</button>
                <button class="btn btn-close" onclick="window.close()">Закрити сторінку</button>
            </div>

            <div id="invoice-container">
                <table style="margin-bottom: 25px;">
                    <tr>
                        <td style="font-size: 26px; font-weight: bold; color: #002147; vertical-align: top; line-height: 1.2;">
                            МПП «ТРЕЙД»<br>
                            <span style="font-size:11px; color:#ff5722; font-weight:bold; text-transform: uppercase; letter-spacing: 1px;">Надійний партнер у логістиці</span>
                        </td>
                        <td style="text-align: right; font-size: 24px; color: #002147; font-weight: bold; vertical-align: top; line-height: 1.2;">
                            РАХУНОК-ФАКТУРА<br>
                            <span style="font-size:14px; color:#555555; font-weight:normal;">№ ТР-${invoiceNumber} від ${currentDate}</span>
                        </td>
                    </tr>
                </table>

                <table style="margin: 20px 0; border-top: 2px solid #002147; padding-top: 15px;">
                    <tr>
                        <td style="width: 50%; vertical-align: top; font-size: 13px; padding-right: 15px; line-height: 1.6;">
                            <strong style="color: #002147; font-size: 14px;">ПОСТАЧАЛЬНИК (ВИКОНАВЕЦЬ):</strong><br>
                            МАЛЕ ПРИВАТНЕ ПІДПРИЄМСТВО "ТРЕЙД"<br>
                            Код ЄДРПОУ: 23953760 | ІПН: 239537613214<br>
                            Адреса: Львівська обл., м. Новий Розділ, проспект Шевченка, 25<br>
                            Розрахунковий рахунок: UA23300001000002600123456789<br>
                            Email: info@mpp-trade.com.ua
                        </td>
                        <td style="width: 50%; vertical-align: top; font-size: 13px; padding-left: 15px; line-height: 1.6; border-left: 1px solid #eee;">
                            <strong style="color: #002147; font-size: 14px;">ЗАМОВНИК:</strong><br>
                            Контрагент: <strong>${user}</strong><br>
                            Статус користувача: Зареєстрований клієнт<br>
                            Договір-підстава: Публічна оферта про надання транспортно-експедиторських послуг
                        </td>
                    </tr>
                </table>

                <table class="border-table" style="margin-top: 35px;">
                    <thead>
                        <tr>
                            <th>Найменування послуги / Опис логістичного маршруту</th>
                            <th style="width: 110px; text-align: center;">Відстань</th>
                            <th style="width: 110px; text-align: center;">Вага вантажу</th>
                            <th style="width: 130px; text-align: right;">Всього (UAH)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="background: #fafafa; line-height: 1.5;">
                                <strong>${routeType}</strong><br>
                                <span style="font-size: 12px; color: #666666;">Специфікація тягача: ${eco} (Тип кузова: Тентований напівпричіп)</span>
                            </td>
                            <td style="text-align: center; background: #ffffff;">${distance} км</td>
                            <td style="text-align: center; background: #ffffff;">${weight} тонн</td>
                            <td style="text-align: right; font-weight: bold; color: #002147; background: #fafafa; font-size: 14px;">${totalPrice} ₴</td>
                        </tr>
                    </tbody>
                </table>

                <div style="text-align: right; margin-top: 35px; font-size: 22px; font-weight: bold; color: #002147;">
                    Разом до сплати: <span style="color: #ff5722;">${totalPrice} грн.</span>
                </div>
                
                <table style="width: 100%; margin-top: 60px; font-size: 13px;">
                    <tr>
                        <td style="width: 45%; border-top: 1px solid #333333; text-align: center; padding-top: 8px; font-weight: bold;">
                            Виконавець: Томченко О. В.
                        </td>
                        <td style="width: 10%;"></td>
                        <td style="width: 45%; border-top: 1px solid #333333; text-align: center; padding-top: 8px; font-weight: bold; color: #777;">
                            М.П. / Відмітка диспетчерської служби
                        </td>
                    </tr>
                </table>

                <div style="margin-top: 80px; font-size: 11px; color: #777777; text-align: center; border-top: 1px dashed #dddddd; padding-top: 15px;">
                    Рахунок є первинним документом і дійсний до оплати протягом 3-х банківських днів. <br>
                    МПП «ТРЕЙД» — 28 років бездоганної репутації на ринку міжнародних перевезень.
                </div>
            </div>

            <script>
                function downloadPDF() {
                    const element = document.getElementById('invoice-container');
                    const opt = {
                        margin:       15,
                        filename:     'Rakhunok_TRADE_No_${invoiceNumber}.pdf',
                        image:        { type: 'jpeg', quality: 0.98 },
                        html2canvas:  { scale: 2, backgroundColor: '#ffffff', useCORS: true },
                        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
                    };
                    
                    // Генеруємо файл
                    html2pdf().set(opt).from(element).save();
                }

                // Запускаємо автоматичне скачування через 600мс після завантаження сторінки сторінки,
                // щоб клієнту навіть не довелося обов'язково тиснути на кнопку вручну!
                window.onload = function() {
                    setTimeout(downloadPDF, 600);
                };
            </script>
        </body>
        </html>
    `);
    
    // Закриваємо потік запису в документ
    invoiceWindow.document.close();
}