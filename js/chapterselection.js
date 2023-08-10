const chapterLinks = document.querySelectorAll(".chapters a");
  chapterLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      
      const chapterIndex = parseInt(link.getAttribute("data-chapter"), 10);
      localStorage.setItem("selectedChapterIndex", chapterIndex);
      window.location.href = "index.html";
    });
  });