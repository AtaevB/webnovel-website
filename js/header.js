const navigbar = document.getElementById('navigbar');

window.addEventListener('scroll', function() {
    if (window.innerWidth < 769) {
        return; // Прекращаем выполнение кода при ширине экрана менее 768px
      }
    
    
  if (window.pageYOffset > 125) {
    navigbar.classList.add('fixed');
  } else {
    navigbar.classList.remove('fixed');
  }
});