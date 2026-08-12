const books = {
    bereshit: {
        name: "Берешит",
        heName: "בראשית",
        chapters: 50,
        folder: "01_bereshit"
    },

    shemot: {
        name: "Шмот",
        heName: "שמות",
        chapters: 40,
        folder: "02_shemot"
    },

    vayikra: {
        name: "Ваикра",
        heName: "ויקרא",
        chapters: 27,
        folder: "03_vayikra"
    },

    bemidbar: {
        name: "Бемидбар",
        heName: "במדבר",
        chapters: 36,
        folder: "04_bemidbar"
    },

    devarim: {
        name: "Дварим",
        heName: "דברים",
        chapters: 34,
        folder: "05_devarim"
    }
};


/* =========================================================
   ЭЛЕМЕНТЫ СТРАНИЦЫ
   ========================================================= */

const bookLinks = document.querySelectorAll("[data-book]");
const chapterList = document.getElementById("chapterList");
const chapterTitle = document.getElementById("chapterTitle");
const chapterText = document.getElementById("chapterText");

let currentBook = "bereshit";
let currentChapter = 1;


/* =========================================================
   ИВРИТСКИЙ НОМЕР ГЛАВЫ
   ========================================================= */

function toHebrewNumber(number) {

    const ones = [
        "",
        "א",
        "ב",
        "ג",
        "ד",
        "ה",
        "ו",
        "ז",
        "ח",
        "ט"
    ];

    const tens = [
        "",
        "י",
        "כ",
        "ל",
        "מ",
        "נ"
    ];

    if (number === 15) {
        return "טו";
    }

    if (number === 16) {
        return "טז";
    }

    const ten = Math.floor(number / 10);
    const one = number % 10;

    return (tens[ten] || "") + (ones[one] || "");
}


/* =========================================================
   ДВУХЗНАЧНЫЙ НОМЕР ФАЙЛА
   ========================================================= */

function formatChapterFileNumber(chapter) {

    return String(chapter).padStart(2, "0");

}


/* =========================================================
   ПАРАМЕТРЫ URL
   ========================================================= */

function getParams() {

    const params = new URLSearchParams(window.location.search);

    let book = params.get("book") || "bereshit";
    let chapter = parseInt(params.get("chapter"), 10) || 1;


    if (!books[book]) {
        book = "bereshit";
    }


    if (
        chapter < 1 ||
        chapter > books[book].chapters
    ) {
        chapter = 1;
    }


    return {
        book,
        chapter
    };
}


/* =========================================================
   ПУТЬ К ФАЙЛУ ГЛАВЫ
   Берешит 1:
   chapters/01_bereshit/bereshit-01.html
   ========================================================= */

function getChapterFilePath(book, chapter) {

    const bookData = books[book];

    const chapterNumber =
        formatChapterFileNumber(chapter);


    /*
       Получаем папку, где находится reader.html.

       Например:

       https://.../TorahSources/ru/torah/
    */

    const readerFolder =
        new URL("./", window.location.href);


    /*
       Добавляем путь главы.
    */

    const chapterUrl =
        new URL(
            `chapters/${bookData.folder}/${book}-${chapterNumber}.html`,
            readerFolder
        );


    return chapterUrl.href;
}


/* =========================================================
   ЗАГОЛОВОК
   ========================================================= */

function renderChapterTitle(book, chapter) {

    const bookData = books[book];

    chapterTitle.innerHTML = "";


    const titleRu =
        document.createElement("span");

    titleRu.className = "title-ru";

    titleRu.textContent =
        `${bookData.name} ${chapter}`;


    const separator =
        document.createElement("span");

    separator.className = "title-separator";

    separator.textContent = " | ";


    const titleHe =
        document.createElement("span");

    titleHe.className = "title-he";

    titleHe.lang = "he";

    titleHe.dir = "rtl";

    titleHe.textContent =
        `${bookData.heName} ${toHebrewNumber(chapter)}`;


    chapterTitle.appendChild(titleRu);

    chapterTitle.appendChild(separator);

    chapterTitle.appendChild(titleHe);


    document.title =
        `${bookData.name} ${chapter} | ` +
        `${bookData.heName} ${toHebrewNumber(chapter)} | ` +
        `TorahSources`;
}


/* =========================================================
   АКТИВНАЯ КНИГА
   ========================================================= */

function setActiveBook(book) {

    bookLinks.forEach(link => {

        if (link.dataset.book === book) {

            link.classList.add("active-book");

        } else {

            link.classList.remove("active-book");

        }

    });
}


/* =========================================================
   СПИСОК ГЛАВ
   ========================================================= */

function renderChapters(book) {

    chapterList.innerHTML = "";

    const totalChapters =
        books[book].chapters;


    for (
        let chapter = 1;
        chapter <= totalChapters;
        chapter++
    ) {

        const link =
            document.createElement("a");


        link.href =
            `?book=${book}&chapter=${chapter}`;


        link.textContent = chapter;

        link.dataset.chapter = chapter;


        if (chapter === currentChapter) {

            link.classList.add("active-chapter");

        }


        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                loadChapter(
                    book,
                    chapter,
                    true
                );
            }
        );


        chapterList.appendChild(link);
    }
}


/* =========================================================
   ЗАГРУЗКА ГЛАВЫ
   ========================================================= */

async function loadChapter(
    book,
    chapter,
    pushState = false
) {

    if (!books[book]) {

        book = "bereshit";

    }


    if (
        chapter < 1 ||
        chapter > books[book].chapters
    ) {

        chapter = 1;

    }


    currentBook = book;
    currentChapter = chapter;


    setActiveBook(book);

    renderChapters(book);

    renderChapterTitle(
        book,
        chapter
    );


    const filePath =
        getChapterFilePath(
            book,
            chapter
        );


    console.log(
        "ЗАГРУЖАЮ ФАЙЛ:",
        filePath
    );


    chapterText.innerHTML = `
        <p class="empty-chapter">
            Загрузка главы...
        </p>
    `;


    try {

        const response =
            await fetch(
                filePath,
                {
                    cache: "no-store"
                }
            );


        console.log(
            "HTTP STATUS:",
            response.status
        );


        if (!response.ok) {

            throw new Error(
                `HTTP ${response.status}: ${filePath}`
            );

        }


        const html =
            await response.text();


        chapterText.innerHTML = html;


        /*
           Если внутри файла главы есть
           старый заголовок .chapter-heading,
           удаляем его.
        */

        const oldChapterHeading =
            chapterText.querySelector(
                ".chapter-heading"
            );


        if (oldChapterHeading) {

            oldChapterHeading.remove();

        }


    } catch (error) {

        console.error(
            "ОШИБКА ЗАГРУЗКИ:",
            error
        );


        chapterText.innerHTML = `
            <p class="empty-chapter">
                Не удалось загрузить главу.
            </p>

            <p class="empty-chapter">
                Проверяемый файл:
            </p>

            <p class="empty-chapter">
                ${filePath}
            </p>
        `;
    }


    if (pushState) {

        const newUrl =
            `?book=${book}&chapter=${chapter}`;


        history.pushState(
            {
                book,
                chapter
            },
            "",
            newUrl
        );
    }
}


/* =========================================================
   ВЫБОР КНИГИ
   ========================================================= */

bookLinks.forEach(link => {

    link.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            const book =
                this.dataset.book;


            if (!books[book]) {

                return;

            }


            loadChapter(
                book,
                1,
                true
            );
        }
    );

});


/* =========================================================
   НАЗАД / ВПЕРЁД
   ========================================================= */

window.addEventListener(
    "popstate",
    function () {

        const {
            book,
            chapter
        } = getParams();


        loadChapter(
            book,
            chapter,
            false
        );
    }
);


/* =========================================================
   ЗАПУСК
   ========================================================= */

const initial =
    getParams();


loadChapter(
    initial.book,
    initial.chapter,
    false
);