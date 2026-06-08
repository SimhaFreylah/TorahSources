const books = {
    bereshit: {
        name: "Берешит",
        heName: "בראשית",
        chapters: 50
    },
    shemot: {
        name: "Шмот",
        heName: "שמות",
        chapters: 40
    },
    vayikra: {
        name: "Ваикра",
        heName: "ויקרא",
        chapters: 27
    },
    bemidbar: {
        name: "Бемидбар",
        heName: "במדבר",
        chapters: 36
    },
    devarim: {
        name: "Дварим",
        heName: "דברים",
        chapters: 34
    }
};

const bookList = document.getElementById("bookList");
const bookLinks = document.querySelectorAll("[data-book]");
const chapterList = document.getElementById("chapterList");
const chapterTitle = document.getElementById("chapterTitle");
const chapterText = document.getElementById("chapterText");

let currentBook = "bereshit";
let currentChapter = 1;

/* Перевод обычного номера главы в ивритскую букву/число:
   1 → א
   2 → ב
   10 → י
   15 → טו
   16 → טז
   50 → נ
*/
function toHebrewNumber(number) {
    const ones = ["", "א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט"];
    const tens = ["", "י", "כ", "ל", "מ", "נ"];

    if (number === 15) return "טו";
    if (number === 16) return "טז";

    const ten = Math.floor(number / 10);
    const one = number % 10;

    return tens[ten] + ones[one];
}

/* Создаёт единый заголовок:
   Берешит 1 | בראשית א
*/
function renderChapterTitle(book, chapter) {
    chapterTitle.innerHTML = "";

    const titleRu = document.createElement("span");
    titleRu.className = "title-ru";
    titleRu.textContent = `${books[book].name} ${chapter}`;

    const separator = document.createElement("span");
    separator.className = "title-separator";
    separator.textContent = " | ";

    const titleHe = document.createElement("span");
    titleHe.className = "title-he";
    titleHe.lang = "he";
    titleHe.dir = "rtl";
    titleHe.textContent = `${books[book].heName} ${toHebrewNumber(chapter)}`;

    chapterTitle.appendChild(titleRu);
    chapterTitle.appendChild(separator);
    chapterTitle.appendChild(titleHe);

    document.title = `${books[book].name} ${chapter} | ${books[book].heName} ${toHebrewNumber(chapter)} | TorahSources`;
}

function getParams() {
    const params = new URLSearchParams(window.location.search);
    const book = params.get("book") || "bereshit";
    const chapter = parseInt(params.get("chapter")) || 1;

    return { book, chapter };
}

function setActiveBook(book) {
    bookLinks.forEach(link => {
        if (link.dataset.book === book) {
            link.classList.add("active-book");
        } else {
            link.classList.remove("active-book");
        }
    });
}

function renderChapters(book) {
    chapterList.innerHTML = "";

    const totalChapters = books[book].chapters;

    for (let i = 1; i <= totalChapters; i++) {
        const link = document.createElement("a");

        link.href = `?book=${book}&chapter=${i}`;
        link.textContent = i;
        link.dataset.chapter = i;

        if (i === currentChapter) {
            link.classList.add("active-chapter");
        }

        link.addEventListener("click", function (e) {
            e.preventDefault();
            loadChapter(book, i, true);
        });

        chapterList.appendChild(link);
    }
}

async function loadChapter(book, chapter, pushState = false) {
    currentBook = book;
    currentChapter = chapter;

    setActiveBook(book);
    renderChapters(book);
    renderChapterTitle(book, chapter);

    try {
        const response = await fetch(`chapters/${book}-${chapter}.html`);

        if (!response.ok) {
            throw new Error("Глава не найдена");
        }

        const html = await response.text();
        chapterText.innerHTML = html;

        /*
           Если внутри файла главы всё ещё есть старый отдельный заголовок:

           <div class="chapter-heading">
               ...
           </div>

           он будет автоматически удалён,
           чтобы не появлялся второй ивритский заголовок.
        */
        const oldChapterHeading = chapterText.querySelector(".chapter-heading");

        if (oldChapterHeading) {
            oldChapterHeading.remove();
        }

    } catch (error) {
        chapterText.innerHTML = `
            <p class="empty-chapter">Эта глава пока не добавлена.</p>
        `;
    }

    if (pushState) {
        const newUrl = `?book=${book}&chapter=${chapter}`;
        history.pushState({ book, chapter }, "", newUrl);
    }
}

bookLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const book = this.dataset.book;

        loadChapter(book, 1, true);
    });
});

window.addEventListener("popstate", function () {
    const { book, chapter } = getParams();

    if (books[book]) {
        loadChapter(book, chapter, false);
    } else {
        loadChapter("bereshit", 1, false);
    }
});

const initial = getParams();

if (books[initial.book]) {
    loadChapter(initial.book, initial.chapter, false);
} else {
    loadChapter("bereshit", 1, false);
}




