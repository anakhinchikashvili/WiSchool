document.getElementById("burgerMenu").addEventListener("click", function() {
    document.querySelector(".nav-list").classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
    updateButtons(); 
  });
  
  let index = 0;
  
  function getVisibleSlides() {
    if (window.innerWidth < 480) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
  }
  
  function updateButtons() {
    const prevButton = document.getElementById("prevSlide");
    const nextButton = document.getElementById("nextSlide");
    const totalSlides = document.querySelectorAll(".course-el").length;
    const visibleSlides = getVisibleSlides();
  
    prevButton.disabled = index === 0;
    prevButton.classList.toggle("hidden", index === 0);
  
    nextButton.disabled = index >= totalSlides - visibleSlides;
    nextButton.classList.toggle("hidden", index >= totalSlides - visibleSlides);
  }
  
  function moveSlide(direction) {
    const slider = document.querySelector(".course-categories");
    const totalSlides = document.querySelectorAll(".course-el").length;
    const visibleSlides = getVisibleSlides();
  
    index += direction;
    index = Math.max(0, Math.min(index, totalSlides - visibleSlides));
  
    const offset = -index * (100 / visibleSlides) + "%";
    slider.style.transform = `translateX(${offset})`;
  
    updateButtons();
  }
  
  document.getElementById("prevSlide").addEventListener("click", () => {
    moveSlide(-1);
  });
  
  document.getElementById("nextSlide").addEventListener("click", () => {
    moveSlide(1);
  });
  
  window.addEventListener("resize", () => {
    index = 0;
    moveSlide(0);
  });