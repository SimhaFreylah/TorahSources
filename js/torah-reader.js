const books = {
    bereshit: {
        name: "Берешит",
        chapters: 50
    },
    shemot: {
        name: "Шмот",
        chapters: 40
    },
    vayikra: {
        name: "Ваикра",
        chapters: 27
    },
    bemidbar: {
        name: "Бемидбар",
        chapters: 36
    },
    devarim: {
        name: "Дварим",
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

    chapterTitle.textContent = `${books[book].name} ${chapter}`;

    try {
        const response = await fetch(`chapters/${book}-${chapter}.html`);

        if (!response.ok) {
            throw new Error("Глава не найдена");
        }

        const html = await response.text();
        chapterText.innerHTML = html;
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
    loadChapter(book, chapter, false);
});

const initial = getParams();

if (books[initial.book]) {
    loadChapter(initial.book, initial.chapter, false);
} else {
    loadChapter("bereshit", 1, false);
}