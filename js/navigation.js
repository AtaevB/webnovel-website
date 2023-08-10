let currentChapterIndex = parseInt(localStorage.getItem("selectedChapterIndex")) || 0; // Загружаем текущий индекс главы из localStorage, или используем 0
let chapters;

function updateChapterContent(index) {
  const chapterTitle = document.getElementById("chapter-title");
  const chapterText = document.getElementById("chapter-text");
  const chapterImage = document.getElementById("chapter-image");

  chapterTitle.innerHTML = chapters[index].title;
  chapterImage.innerHTML = `<img src="${chapters[index].imagePath}" alt="poster">`;
  chapterText.innerHTML = chapters[index].text;

  localStorage.setItem("selectedChapterIndex", index); // Сохраняем новый индекс в localStorage
}

document.addEventListener("DOMContentLoaded", async function () {
  const response = await fetch("novel.json");
  chapters = await response.json();

  updateChapterContent(currentChapterIndex); // Обновляем контент на странице с текущей главой

  const buttonLeft = document.getElementById("leftbtn");
  const buttonRight = document.getElementById("rightbtn");

  buttonLeft.addEventListener("click", function () {
    if (currentChapterIndex > 0) {
      currentChapterIndex--;
      updateChapterContent(currentChapterIndex);
    }
  });

  buttonRight.addEventListener("click", function () {
    if (currentChapterIndex < chapters.length - 1) {
      currentChapterIndex++;
      updateChapterContent(currentChapterIndex);
    }
  });
});

function updateChapterContent(index) {
  const chapterTitle = document.getElementById("chapter-title");
  const chapterText = document.getElementById("chapter-text");
  const chapterImage = document.getElementById("chapter-image");

  chapterTitle.innerHTML = chapters[index].title;
  chapterImage.innerHTML = `<img src="${chapters[index].imagePath}" alt="poster">`;
  chapterText.innerHTML = chapters[index].text;

  localStorage.setItem("selectedChapterIndex", index); // Сохраняем новый индекс в localStorage
  
  // После обновления контента, перематываем страницу наверх
  window.scrollTo(0, 0);
}