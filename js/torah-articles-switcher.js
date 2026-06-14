
const torahArticlesData = {
    bereshit: {
        title: "Недельные главы",
        parashot: [
            { id: "bereshit", label: "Берешит 1:1–6:8" },
            { id: "noach", label: "Ноах 6:9–11:32" },
            { id: "lech-lecha", label: "Лех-Леха 12:1–17:27" },
            { id: "vayera", label: "Ваера 18:1–22:24" },
            { id: "chayei-sarah", label: "Хаей Сара 23:1–25:18" },
            { id: "toledot", label: "Толдот 25:19–28:9" },
            { id: "vayetze", label: "Вайеце 28:10–32:3" },
            { id: "vayishlach", label: "Вайишлах 32:4–36:43" },
            { id: "vayeshev", label: "Вайешев 37:1–40:23" },
            { id: "miketz", label: "Микец 41:1–44:17" },
            { id: "vayigash", label: "Вайигаш 44:18–47:27" },
            { id: "vayechi", label: "Вайехи 47:28–50:26" }
        ],
        articles: {
            bereshit: [
                {
                    parasha: "Берешит",
                    title: "Сотворение мира: первая версия",
                    text: "Берешит 1:1–2:4а как жреческий рассказ о возникновении космического порядка и сакрального времени.",
                    image: "../images/bereshit-p-creation.png",
                    link: "articles/bereshit-p-creation.html"
                },
                {
                    parasha: "Берешит",
                    title: "Сотворение человека и сада Эден",
                    text: "Берешит 2:4б–25 как яхвистский J-рассказ о возникновении человеческой жизни, труда, брака и сакрального пространства сада.",
                    image: "../images/eden-j-creation.png",
                    link: "articles/eden-j-creation.html"
                }
            ],
            noach: [
                {
                    parasha: "Ноах",
                    title: "Потоп в двух версиях",
                    text: "Как рассказ о потопе раскрывает швы между жреческой и непжреческой традициями.",
                    image: "../images/flood-two-sources.png",
                    link: "articles/flood-two-sources.html"
                }
            ]
        }
    },

    shmot: {
        title: "Недельные главы",
        parashot: [
            { id: "shemot", label: "Шмот 1:1–6:1" },
            { id: "vaera", label: "Ваэра 6:2–9:35" },
            { id: "bo", label: "Бо 10:1–13:16" },
            { id: "beshalach", label: "Бешалах 13:17–17:16" },
            { id: "yitro", label: "Итро 18:1–20:23" },
            { id: "mishpatim", label: "Мишпатим 21:1–24:18" },
            { id: "terumah", label: "Трума 25:1-27:19" },
            { id: "tetzaveh", label: "Тецаве 27:20-30:10" },
            { id: "ki-tisa", label: "Ки-Тиса 30:11–34:35" },
            { id: "vayakhel", label: "Ваякгель 35:1-38:20"},
            { id: "pekudei", label: "Пкудей 38:21-40:38"}
        ],
        articles: {
            bo: [
                {
                    parasha: "Бо",
                    title: "Так варим или жарим Пасхального ягнёнка?",
                    text: "Противоречие между текстами Шмот 12:9 и Дварим 16:7 о приготовлении пасхального ягнёнка.",
                    image: "../images/passover-lamb.png",
                    link: "articles/passover-lamb.html"
                }
            ],
            yitro: [
                {
                    parasha: "Итро",
                    title: "Декалог в двух редакциях: как Шмот 20 и Дварим 5 раскрывают разных авторов",
                    text: "Как поздние редакторы видели Декалог?",
                    image: "../images/two-decalogues-two-sources.png",
                    link: "articles/two-decalogues-two-sources.html"
                }
            ],
            mishpatim: [
                {
                    parasha: "Мишпатим",
                    title: "Трансформация молока матери: как древний анти-угаритский запрет стал кашрутом",
                    text: "Запрет варки ягнёнка в молоке матери в Шмот 23:19 и 34:26 не равен такому же запрету в Дварим 14:21.",
                    image: "../images/anti-ugaritic-taboo.png",
                    link: "articles/anti-ugaritic-taboo.html"
                }
            ],
            "ki-tisa": [
                {
                    parasha: "Ки-Тиса",
                    title: "«Ритуальный Декалог», как иной Заветный текст от P-источника (Шмот 34:10–26)",
                    text: "Как разные источники видели главный Заветный текст между Яхве и Израилем.",
                    image: "../images/ritual-decalogue.png",
                    link: "articles/ritual-decalogue.html"
                }
            ]
        }
    },

    vaikra: {
        title: "Недельные главы",
        parashot: [
            { id: "vayikra", label: "Ваикра 1:1–5:26" },
            { id: "tzav", label: "Цав 6:1–8:36" },
            { id: "shemini", label: "Шмини 9:1–11:47" },
            { id: "tazria", label: "Тазрия 12:1-13:59" },
            { id: "metzora", label: "Мецора 14:1–15:33" },
            { id: "acharei-mot", label: "Ахарей-Мот 16:1–18:30" },
            { id: "kedoshim", label: "Кдошим 19:1-20:27" },
            { id: "emor", label: "Эмор 21:1-24:23" },
            { id: "behar", label: "Бегар 25:1–26:2" },
            { id: "bechukotai", label: "Бехукотай 26:3–27:34" }
        ],
        articles: {
            shemini: [
                {
                    parasha: "Шмини",
                    title: "У жрецов кровь в двух состояниях одновременно: противоречие или неверный вывод?",
                    text: "У нас есть тексты, которые представляют кровь источником нечистоты и средством очищения от нечистоты.",
                    image: "../images/blood-paradox.png",
                    link: "articles/blood-paradox.html"
                }
            ]
        }
    },

    bemidbar: {
        title: "Недельные главы",
        parashot: [
            { id: "bemidbar", label: "Бемидбар 1:1–4:20" },
            { id: "naso", label: "Насо 4:21–7:89" },
            { id: "behaalotecha", label: "Беhaалотха 8:1–12:16" },
            { id: "shelach", label: "Шлах 13:1–15:41" },
            { id: "korach", label: "Корах 16:1-18:32" },
            { id: "chukat", label: "Хукат 19:1–22:1" },
            { id: "balak", label: "Балак 22:2-25:9" },
            { id: "pinchas", label: "Пинхас 25:10-30:1" },
            { id: "matot", label: "Матот 30:2-32:42" },
            { id: "masei", label: "Маасей 33:1-36:13" }
        ],
        articles: {
            naso: [
                {
                    parasha: "Насо",
                    title: "Шавуот в книге Юбилеев",
                    text: "Какое ключевое изменение внёс автор книги Юбилеев в Шавуот?",
                    image: "../images/shavuot-in-jubilees.png",
                    link: "articles/shavuot-in-jubilees.html"
                }
            ]
        }
    },

    dvarim: {
        title: "Недельные главы",
        parashot: [
            { id: "devarim", label: "Дварим 1:1–3:22" },
            { id: "vaetchanan", label: "Ваэтханан 3:23–7:11" },
            { id: "eikev", label: "Экев 7:12-11:25" },
            { id: "reeh", label: "Рээ 11:26–16:17" },
            { id: "shoftim", label: "Шофтим 16:18-21:9" },
            { id: "ki-teitzei", label: "Ки-Теце 21:10-25:19" },
            { id: "ki-tavo", label: "Ки-Таво 26:1–29:8" },
            { id: "nitzavim", label: "Ницавим 29:9-30:20" },
            { id: "vayeilech", label: "Вайелех 31:1-31:30" },
            { id: "ha’azinu", label: "Гаазину 32:1-32:52" },
            { id: "vezot-haberachah", label: "Браха 33:1-34:12" }
        ],
        articles: {
            reeh: [
                {
                    parasha: "Рээ",
                    title: "Что тексты Торы подразумевают под Шавуотом?!",
                    text: "Как уже источники Торы меняли изначально аграрный смысл Шавуота.",
                    image: "../images/shavuot-in-torah.png",
                    link: "articles/shavuot-in-torah.html"
                }
            ],
            vaetchanan: [
                {
                    parasha: "Ваэтханан",
                    title: "Шмот 19:1 и попытка связать Шавуот с Синаем",
                    text: "Как поздний редактор Торы пытается найти Шавуоту иное назначение.",
                    image: "../images/shavuot-and-sinai.png",
                    link: "articles/shavuot-and-sinai.html"
                },
                {
                    parasha: "Ваэтханан",
                    title: "В каком источнике Шавуот стал днём Синайского откровения?",
                    text: "Почему только через 500 лет Шавуот стал Синаем?",
                    image: "../images/shavuot-and-torah.png",
                    link: "articles/shavuot-and-torah.html"
                }
            ]
        }
    },

    holidays: {
        title: "Основные праздники",
        parashot: [
            { id: "rosh-chodesh", label: "Рош-ходеш" },
            { id: "shabbat", label: "Шаббат" },
            { id: "pesach", label: "Песах" },
            { id: "shavuot", label: "Шавуот" },
            { id: "sukkot", label: "Суккот" },
            { id: "rosh-hashanah", label: "Рош га-Шана" },
            { id: "yom-kippur", label: "Йом-Кипур" },
            { id: "hanukkah", label: "Ханука" },
            { id: "purim", label: "Пурим" }
        ],
        articles: {
            "rosh-chodesh": [
                {
                    parasha: "Рош-ходеш",
                    title: "Рош-ходеш — древний еврейский праздник, который Тора превратила в храмовый регламент",
                    text: "Почему народный праздник новолуния потерял своё значение?",
                    image: "../images/newmoon.png",
                    link: "articles/newmoon.html"
                }

            ],
            "shabbat": [
                {
                    parasha: "Шаббат",
                    title: "Шаббат. От полнолуния к седьмому дню",
                    text: "Эволюция Шаббата во времени.",
                    image: "../images/shabbat.png",
                    link: "articles/shabbat-chodesh.html"
                }
            ],

            pesach: [
                {
                    parasha: "Песах",
                    title: "Так варим или жарим Пасхального ягнёнка?",
                    text: "Противоречие между текстами Шмот 12:9 и Дварим 16:7 о приготовлении пасхального ягнёнка.",
                    image: "../images/passover-lamb.png",
                    link: "articles/passover-lamb.html"
                },
                {
                    parasha: "Песах",
                    title: "Трансформация молока матери: как древний анти-угаритский запрет стал кашрутом",
                    text: "Запрет варки ягнёнка в молоке матери в Шмот 23:19 и 34:26 не равен такому же запрету в Дварим 14:21.",
                    image: "../images/anti-ugaritic-taboo.png",
                    link: "articles/anti-ugaritic-taboo.html"
                }
            ],
            shavuot: [
                {
                    parasha: "Шавуот",
                    title: "Что тексты Торы подразумевают под Шавуотом?!",
                    text: "Как уже источники Торы меняли изначально аграрный смысл Шавуота.",
                    image: "../images/shavuot-in-torah.png",
                    link: "articles/shavuot-in-torah.html"
                },
                {
                    parasha: "Шавуот",
                    title: "Шмот 19:1 и попытка связать Шавуот с Синаем",
                    text: "Как поздний редактор Торы пытается найти Шавуоту иное назначение.",
                    image: "../images/shavuot-and-sinai.png",
                    link: "articles/shavuot-and-sinai.html"
                },
                {
                    parasha: "Шавуот",
                    title: "Шавуот в книге Юбилеев",
                    text: "Какое ключевое изменение внёс автор книги Юбилеев в Шавуот?",
                    image: "../images/shavuot-in-jubilees.png",
                    link: "articles/shavuot-in-jubilees.html"
                },
                {
                    parasha: "Шавуот",
                    title: "В каком источнике Шавуот стал днём Синайского откровения?",
                    text: "Почему только через 500 лет Шавуот стал Синаем?",
                    image: "../images/shavuot-and-torah.png",
                    link: "articles/shavuot-and-torah.html"
                }
            ],
            sukkot: [],
            "rosh-hashanah": [],
            "yom-kippur": [],
            hanukkah: [],
            purim: []
        }
    }
};

const bookTabs = document.querySelectorAll(".torah-book-tab");
const mainBox = document.getElementById("torahArticlesMain");
const sidebar = document.getElementById("torahParashaSidebar");

let activeBook = "bereshit";
let activeParasha = "bereshit";

function renderParashot(bookKey) {
    const book = torahArticlesData[bookKey];

    sidebar.innerHTML = `
        <h3 class="torah-parasha-title">${book.title}</h3>
        <div class="torah-parasha-list">
            ${book.parashot.map(item => `
                <button class="torah-parasha-btn ${item.id === activeParasha ? "active" : ""}" data-parasha="${item.id}">
                    ${item.label}
                </button>
            `).join("")}
        </div>
    `;

    sidebar.querySelectorAll(".torah-parasha-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            activeParasha = btn.dataset.parasha;
            renderParashot(activeBook);
            renderArticles(activeBook, activeParasha);
        });
    });
}

function renderArticles(bookKey, parashaKey) {
    const book = torahArticlesData[bookKey];
    const items = book.articles[parashaKey] || [];

    if (!items.length) {
        mainBox.innerHTML = `
            <div class="torah-article-item">
                <div class="torah-article-meta">
                    <p class="torah-article-parasha">Пока пусто</p>
                    <h3 class="torah-article-title">Для этой недельной главы статьи ещё не добавлены</h3>
                    <p class="torah-article-text">Когда ты добавишь материалы по этой главе, они будут показываться здесь.</p>
                </div>
            </div>
        `;
        return;
    }

    mainBox.innerHTML = items.map(item => `
        <article class="torah-article-item">
            <img src="${item.image}" alt="${item.title}" class="torah-article-image">

            <div class="torah-article-meta">
                <p class="torah-article-parasha">${item.parasha}</p>
                <h3 class="torah-article-title">${item.title}</h3>
                <p class="torah-article-text">${item.text}</p>
                <a href="${item.link}" class="torah-article-link">Открыть статью</a>
            </div>
        </article>
    `).join("");
}

bookTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        bookTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        activeBook = tab.dataset.book;
        activeParasha = torahArticlesData[activeBook].parashot[0].id;

        renderParashot(activeBook);
        renderArticles(activeBook, activeParasha);
    });
});

renderParashot(activeBook);
renderArticles(activeBook, activeParasha);