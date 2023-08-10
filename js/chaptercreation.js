document.addEventListener("DOMContentLoaded", async function () {
    const response = await fetch("novel.json"); // Выполнение асинхронного запроса
    const chapters = await response.json(); // Преобразование ответа в JSON
    // Остальной код остается таким же

    const chapterTitle = document.getElementById("chapter-title");
    const chapterText = document.getElementById("chapter-text");
    const chapterImage = document.getElementById("chapter-image");

    const selectedChapterIndex = localStorage.getItem("selectedChapterIndex");
    if (selectedChapterIndex !== null) {
      chapterTitle.innerHTML = chapters[selectedChapterIndex].title;
      chapterImage.innerHTML = `<img src="${chapters[selectedChapterIndex].imagePath}" alt="poster">`;
      chapterText.innerHTML = chapters[selectedChapterIndex].text;
    }
  });

  
  