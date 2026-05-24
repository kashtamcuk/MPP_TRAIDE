// 1. Спільна база перекладів для ВСІХ сторінок
const translations = {
    uk: {
        // Заголовки та описи сторінки
        contacts_title: "Зв'яжіться з нами",
        contacts_subtitle: "Логістичний центр МПП «ТРЕЙД» — регулярні вантажні рейси Україна ↔ Італія",
        
        // Картки з інформацією
        addr_title: "Юридична адреса",
        addr_text: "Львівська обл., м. Новий Розділ, проспект Шевченка, 25",
        route_title: "Основний напрямок рейсів",
        route_text: "Італія (Мілан, Турин, Рим, Верона, Болонья, Неаполь)",
        phones_title: "Телефони диспетчерської",
        email_title: "Електронна пошта для заявок",
        
        // Форма зворотного зв'язку
        form_title: "Розрахунок індивідуального рейсу в Італію",
        form_name: "Ваше ім'я або Назва компанії",
        form_email: "Ваш Email для отримання кошторису",
        form_message: "Опишіть вантаж (вага, об'єм, місто доставки в Італії...)",
        form_btn: "НАДІСЛАТИ ЗАЯВКУ В ДИСПЕТЧЕРСЬКУ",

        // Дані сторінки Про компанію
        about_page_title: "Про компанію | МПП «ТРЕЙД»",
        about_hero_title: "МПП «ТРЕЙД» — Експерти італійської логістики",
        about_hero_desc: "Понад 28 років надійного та стабільного виконання регулярних міжнародних рейсів",
        about_main_title: "Наша історія та моно-спеціалізація",
        about_p1: "Приватне підприємство МПП «ТРЕЙД» розпочало свій шлях у далекому 1998 році в місті Новий Розділ. Завдяки чітко обраній стратегії розвитку та високим стандартам якості, ми трансформувалися у стабільного логістичного оператора з унікальною та глибокою спеціалізацією.",
        about_p2: "Сьогодні ключова відмінність нашого підприємства — фокус виключно на магістральних вантажоперевезеннях між Україною та Італією. Ми не розпорошуємо ресурси на інші напрямки, що дозволяє нам забезпечувати бездоганний сервіс, ідеальне знання маршрутів, швидке проходження європейських митниць та найвигідніші тарифи для наших постійних партнерів.",
        stat1_num: "28 років",
        stat1_desc: "Досвіду на ринку",
        stat2_num: "8 одиниць",
        stat2_desc: "Сучасних євро-тягачів",
        stat3_desc: "Успішних рейсів в Італію",
        adv_main_title: "Чому довіряють МПП «ТРЕЙД»?",
        adv1_title: "Екологічність та Надійність",
        adv1_desc: "Власний автопарк складається з магістральних тягачів високих стандартів Euro 5 та Euro 6, що дозволяє безперешкодно працювати в екологічних зонах Італії.",
        adv2_title: "Офіційні ліцензії (ADR)",
        adv2_desc: "Володіємо всіма необхідними міжнародними ліцензіями та дозволами, включаючи перевезення небезпечних вантажів класу ADR.",
        adv3_title: "Досконалість маршрутів",
        adv3_desc: "Регулярні рейси до провідних промислових та торговельних хабів: Україна, Італія.",
        modal_title: "Авторизація",
        modal_desc: "Увійдіть в систему МПП «ТРЕЙД»",
        modal_email: "Ваш Email",
        modal_pass: "Пароль",
        modal_btn: "УВІЙТИ В АКАУНТ",

        // Дані Головної сторінки
        home_page_title: "МПП «ТРЕЙД» | Вантажні перевезення",
        hero_title: "ВАНТАЖНІ ПЕРЕВЕЗЕННЯ\nПО УКРАЇНІ ТА ІТАЛІЇ",
        hero_desc: "Швидко, надійно, вчасно. Доставка збірних та повних вантажів автомобільним транспортом. Пріоритетний напрямок — Італія.",
        feat_reliability: "НАДІЙНІСТЬ",
        feat_speed: "ШВИДКІСТЬ",
        feat_geography: "ГЕОГРАФІЯ",
        btn_services: "НАШІ ПОСЛУГИ",
        btn_calc: "РОЗРАХУВАТИ ВАРТІСТЬ",
        stat_park_num: "8 одиниць",
        stat_park_desc: "СУЧАСНИЙ АВТОПАРК",
        stat_exp_num: "28 РОКІВ",
        stat_exp_desc: "БЕЗДОГАННОГО ДОСВІДУ",
        stat_support: "ПІДТРИМКА КЛІЄНТІВ",
        services_title: "Наші послуги",
        services_subtitle: "Ми пропонуємо повний спектр логістичних послуг для бізнесу.",
        btn_all_services: "ВСІ ПОСЛУГИ",
        ser1_title: "Міжнародні перевезення",
        ser1_desc: "Доставка вантажів по Україні та Італії",
        ser2_title: "Збірні вантажі",
        ser2_desc: "Економічне перевезення невеликих вантажів (LTL)",
        ser3_title: "Експрес-доставка",
        ser3_desc: "Термінова доставка від дверей до дверей",
        ser4_title: "Логістичні рішення",
        ser4_desc: "Індивідуальні рішення під ваш бізнес та ліцензійні ADR вантажі",
        calc_title: "Онлайн-калькулятор перевезення",
        calc_subtitle: "Розрахуйте орієнтовну вартість доставки за лічені секунди та випишіть рахунок",
        calc_route_label: "Напрямок рейсу",
        calc_route_ukr: "Внутрішні перевезення (по Україні)",
        calc_route_eu: "Міжнародні рейси (Україна — Італія)",
        calc_eco_label: "Екологічний клас автомобіля",
        calc_eco_6: "Euro 6 (Магістральні тягачі DAF / Volvo)",
        calc_eco_5: "Euro 5 (Вантажні автомобілі Renault)",
        calc_dist_label: "Відстань (км)",
        calc_dist_ph: "Наприклад: 500",
        calc_weight_label: "Вага вантажу (тонни)",
        calc_weight_ph: "Наприклад: 5",
        calc_res_title: "Попередня вартість:",
        currency: "грн",
        calc_discount: "Активовано знижку клієнта 10%!",
        btn_invoice: "СФОРМУВАТИ РАХУНОК (PDF)",
        calc_note: "*Розрахунок базується на тарифах підприємства в системі CMS",
        modal_promo: "Увійдіть, щоб отримати персональну знижку",
        footer_rights: "© 2026 МПП «ТРЕЙД». Всі права захищені.",

        // Дані сторінки Прайс/Тарифи
        prices_page_title: "Тарифи та Ціни | МПП «ТРЕЙД»",
        prices_main_title: "Тарифи на перевезення МПП «ТРЕЙД»",
        prices_subtitle: "Актуальні ціни на логістичні послуги станом на травень 2026 року",
        btn_currency_uah: "Гривня (грн)",
        btn_currency_eur: "Євро (€)",
        cms_title: "Вбудована система керування вмістом (Custom CMS)",
        cms_desc: "Ви авторизувалися як Адміністратор (Керівник фірми — Олександр Томченко). Ви можете динамічно оновити базові тарифи в базі даних (localStorage) безпосередньо через інтерфейс:",
        cms_label_ua: "Рейси по Україні (грн/км):",
        cms_label_eu: "Рейси до ЄС/Італії (грн/км):",
        cms_btn_save: "ЗБЕРЕГТИ ЗМІНИ В CMS",
        th_service: "Напрямок та тип послуги",
        th_unit: "Одиниця виміру",
        th_cost: "Вартість",
        row_ua_title: "Вантажні перевезення по Україні (Магістральні тягачі)",
        row_eu_title: "Міжнародні рейси (Україна — Італія: Мілан, Рим, Турин)",
        row_ltl_title: "Доставка збірних вантажів (LTL з консолідацією)",
        row_wh_title: "Тимчасове складське зберігання вантажів",
        unit_km: "за 1 км",
        unit_kg: "за 1 кг",
        unit_day: "за добу",
        
        // Виправлений підвал (Footer) для відображення повного імені
        footer_text: "© 2026 МПП «ТРЕЙД». Всі права захищені. Дипломний проєкт студента Олександр Томченко.",

        // Дані сторінки Послуг
        services_page_title: "Послуги | МПП «ТРЕЙД»",
        s_hero_title: "Наші логістичні рішення",
        s_hero_desc: "Професійне забезпечення регулярного вантажного сполучення між Україною та Італією",
        s_card1_title: "Внутрішні перевезення (Подача під завантаження)",
        s_card1_desc: "Забезпечуємо швидкий підхід та подачу магістральних тентованих напівпричепів об'ємом 92 м³ у будь-який регіон України для подальшого експорту або внутрішнього розподілу вантажів.",
        s_card1_li1: "Чітке дотримання тайм-слотів завантаження",
        s_card1_li2: "Постоянний GPS-моніторинг локації автомобіля",
        s_card1_li3: "Обов'язкове страхування відповідальності перевізника (CMR страхування)",
        s_card2_title: "Регулярні рейси до Італії (FTL)",
        s_card2_desc: "Спеціалізовані прямі перевезення повних вантажів (експорт/імпорт) власними тягачами екологічних класів Euro 5 та Euro 6. Ключові хаби доставки: Україна, Італія.",
        s_card2_li1: "Досвідчені водії з багаторічним досвідом на італійських серпантинах та автострадах",
        s_card2_li2: "Повний супровід та контроль митних документів (TIR Carnet, CMR, T1, EX-1)",
        s_card2_li3: "Оптимальні логістичні коридори безпосередньо до отримувача в Італії",
        s_card3_title: "Збірні вантажі з Італії та України (LTL)",
        s_card3_desc: "Вигідне рішення для перевезення невеликих партій товарів або палетних вантажів. Формуємо збірні лінії, що дозволяє клієнтам суттєво економити бюджет, сплачуючи виключно за фактично зайняте місце.",
        s_card3_li1: "Консолідація та надійне пакування вантажів",
        s_card3_li2: "Стабільний графік виїздів за затвердженим італійським маршрутом",
        s_card3_li3: "Зменшення витрат на логістику малого та середнього бізнесу до 40%"
    },
    en: {
        // Заголовки та описи сторінки
        contacts_title: "Contact Us",
        contacts_subtitle: "Logistics Center MPP 'TRADE' — regular cargo flights Ukraine ↔ Italy",
        
        // Картки з інформацією
        addr_title: "Legal Address",
        addr_text: "25 Shevchenko Avenue, Novyi Rozdil, Lviv Region",
        route_title: "Main Route Directions",
        route_text: "Italy (Milan, Turin, Rome, Verona, Bologna, Naples)",
        phones_title: "Dispatch Office Phones",
        email_title: "Email for Requests",
        
        // Форма зворотного зв'язку
        form_title: "Calculation of an Individual Flight to Italy",
        form_name: "Your Name or Company Name",
        form_email: "Your Email for Estimates",
        form_message: "Describe the cargo (weight, volume, delivery city in Italy...)",
        form_btn: "SEND REQUEST TO DISPATCHER",

        // Дані сторінки Про компанію
        about_page_title: "About Us | MPP 'TRADE'",
        about_hero_title: "MPP 'TRADE' — Experts in Italian Logistics",
        about_hero_desc: "Over 28 years of reliable and stable execution of regular international flights",
        about_main_title: "Our History and Mono-Specialization",
        about_p1: "Private Enterprise MPP 'TRADE' started its journey back in 1998 in the city of Novyi Rozdil. Thanks to a clearly chosen development strategy and high quality standards, we have transformed into a stable logistics operator with a unique and deep specialization.",
        about_p2: "Today, the key difference of our enterprise is its exclusive focus on main-line cargo transportation between Ukraine and Italy. We do not scatter resources on other destinations, which allows us to provide impeccable service, perfect route knowledge, fast European customs clearance, and the most competitive rates for our regular partners.",
        stat1_num: "28 years",
        stat1_desc: "Market experience",
        stat2_num: "8 units",
        stat2_desc: "Modern Euro-trucks",
        stat3_desc: "Successful trips to Italy",
        adv_main_title: "Why Do Clients Trust MPP 'TRADE'?",
        adv1_title: "Eco-friendliness and Reliability",
        adv1_desc: "Our own fleet consists of long-haul trucks meeting high Euro 5 and Euro 6 standards, allowing smooth operations within Italy's low-emission zones.",
        adv2_title: "Official Licenses (ADR)",
        adv2_desc: "We possess all necessary international licenses and permits, including the transport of ADR class hazardous goods.",
        adv3_title: "Route Excellence",
        adv3_desc: "Regular flights to leading industrial and trade hubs: Ukraine, Italy.",
        modal_title: "Authorization",
        modal_desc: "Log in to the MPP 'TRADE' system",
        modal_email: "Your Email",
        modal_pass: "Password",
        modal_btn: "LOG IN TO ACCOUNT",

        // Дані Головної сторінки
        home_page_title: "MPP 'TRADE' | Freight Forwarding",
        hero_title: "CARGO TRANSPORTATION\nIN UKRAINE AND ITALY",
        hero_desc: "Fast, reliable, on time. Delivery of groupage and full cargoes by road transport. Priority direction — Italy.",
        feat_reliability: "RELIABILITY",
        feat_speed: "SPEED",
        feat_geography: "GEOGRAPHY",
        btn_services: "OUR SERVICES",
        btn_calc: "CALCULATE COST",
        stat_park_num: "8 units",
        stat_park_desc: "MODERN FLEET",
        stat_exp_num: "28 YEARS",
        stat_exp_desc: "IMPECCABLE EXPERIENCE",
        stat_support: "CUSTOMER SUPPORT",
        services_title: "Our Services",
        services_subtitle: "We offer a full range of logistics services for business.",
        btn_all_services: "ALL SERVICES",
        ser1_title: "International Transportation",
        ser1_desc: "Cargo delivery across Ukraine and Italy",
        ser2_title: "Groupage Cargo",
        ser2_desc: "Cost-effective transportation of small cargoes (LTL)",
        ser3_title: "Express Delivery",
        ser3_desc: "Urgent door-to-door delivery",
        ser4_title: "Logistics Solutions",
        ser4_desc: "Individual solutions for your business and licensed ADR cargo",
        calc_title: "Online Transportation Calculator",
        calc_subtitle: "Calculate the approximate cost of delivery in seconds and issue an invoice",
        calc_route_label: "Flight Direction",
        calc_route_ukr: "Domestic transportation (around Ukraine)",
        calc_route_eu: "International flights (Ukraine — Italy)",
        calc_eco_label: "Environmental Class of the Vehicle",
        calc_eco_6: "Euro 6 (DAF / Volvo long-haul trucks)",
        calc_eco_5: "Euro 5 (Renault trucks)",
        calc_dist_label: "Distance (km)",
        calc_dist_ph: "Example: 500",
        calc_weight_label: "Cargo Weight (tons)",
        calc_weight_ph: "Example: 5",
        calc_res_title: "Estimated Cost:",
        currency: "UAH",
        calc_discount: "10% client discount activated!",
        btn_invoice: "GENERATE INVOICE (PDF)",
        calc_note: "*Calculation is based on enterprise rates in the CMS system",
        modal_promo: "Log in to get a personal discount",
        footer_rights: "© 2026 MPP 'TRADE'. All rights reserved.",

        // Дані сторінки Прайс/Тарифи
        prices_page_title: "Tariffs & Prices | MPP 'TRADE'",
        prices_main_title: "MPP 'TRADE' Transportation Tariffs",
        prices_subtitle: "Current prices for logistics services as of May 2026",
        btn_currency_uah: "Hryvnia (UAH)",
        btn_currency_eur: "Euro (€)",
        cms_title: "Built-in Content Management System (Custom CMS)",
        cms_desc: "You are logged in as Administrator (Head of Company — Oleksandr Tomchenko). You can dynamically update base tariffs in the database (localStorage) directly through the interface:",
        cms_label_ua: "Domestic flights within Ukraine (UAH/km):",
        cms_label_eu: "International flights to EU/Italy (UAH/km):",
        cms_btn_save: "SAVE CHANGES IN CMS",
        th_service: "Direction and Service Type",
        th_unit: "Unit of Measure",
        th_cost: "Cost",
        row_ua_title: "Freight transportation within Ukraine (Long-haul trucks)",
        row_eu_title: "International flights (Ukraine — Italy: Milan, Rome, Turin)",
        row_ltl_title: "Groupage cargo delivery (LTL with consolidation)",
        row_wh_title: "Temporary warehouse cargo storage",
        unit_km: "per 1 km",
        unit_kg: "per 1 kg",
        unit_day: "per day",
        modal_title: "Authorization",
        modal_email: "Your Email",
        modal_pass: "Password",
        modal_btn: "LOG IN TO ACCOUNT",
        
        // Виправлений англійський підвал з повним ім'ям
        footer_text: "© 2026 MPP 'TRADE'. All rights reserved. Graduation project of student Oleksandr Tomchenko.",

        // Дані сторінки Послуг
        services_page_title: "Services | MPP 'TRADE'",
        s_hero_title: "Our Logistics Solutions",
        s_hero_desc: "Professional provision of regular freight connection between Ukraine and Italy",
        s_card1_title: "Domestic Transportation (Loading Positioning)",
        s_card1_desc: "We ensure fast approach and positioning of long-haul curtain-sided semi-trailers with a volume of 92 m³ to any region of Ukraine for further export or domestic cargo distribution.",
        s_card1_li1: "Strict adherence to loading time slots",
        s_card1_li2: "Continuous GPS monitoring of vehicle location",
        s_card1_li3: "Mandatory carrier liability insurance (CMR insurance)",
        s_card2_title: "Regular Flights to Italy (FTL)",
        s_card2_desc: "Specialized direct transportation of full loads (export/import) by our own Euro 5 and Euro 6 environmental class trucks. Key delivery hubs: Ukraine, Italy.",
        s_card2_li1: "Experienced drivers with many years of experience on Italian serpentines and highways",
        s_card2_li2: "Full support and control of customs documents (TIR Carnet, CMR, T1, EX-1)",
        s_card2_li3: "Optimal logistical corridors directly to the consignee in Italy",
        s_card3_title: "Groupage Cargo from Italy and Ukraine (LTL)",
        s_card3_desc: "A cost-effective solution for transporting small shipments or palletized cargo. We form consolidated lines, which allows clients to significantly save budgets by paying exclusively for the actually occupied space.",
        s_card3_li1: "Consolidation and reliable packaging of goods",
        s_card3_li2: "Stable departure schedule according to the approved Italian route",
        s_card3_li3: "Reduction of logistics costs for small and medium enterprises up to 40%"
    },
};

// 2. Функція, яка виконує сам переклад на сторінці
function changeLanguage(lang) {
    // Шукаємо всі елементи з атрибутом data-lang-key
    const elements = document.querySelectorAll('[data-lang-key]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        
        if (translations[lang] && translations[lang][key]) {
            // Якщо це поле вводу (input або textarea), міняємо placeholder
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                // Для всіх інших тегів (h1, p, a, span) міняємо текст
                element.innerText = translations[lang][key];
            }
        }
    });

    // КРИТИЧНО ДЛЯ СИНХРОНІЗАЦІЇ: Записуємо обрану мову в пам'ять браузера
    localStorage.setItem('selectedLanguage', lang);

    // Також міняємо значення самого селектора на поточній сторінці, щоб візуально показувало UA чи EN
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.value = lang;
    }
}

// 3. Цей код спрацьовує автоматично, ЩОРАЗУ коли завантажується БУДЬ-ЯКА сторінка
document.addEventListener("DOMContentLoaded", () => {
    // Перевіряємо, чи є в пам'яті збережена мова. Якщо немає — ставимо за замовчуванням 'uk'
    const savedLang = localStorage.getItem('selectedLanguage') || 'uk';
    
    // Запускаємо переклад для цієї сторінки
    changeLanguage(savedLang);
});