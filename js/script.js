document.getElementById("burgerMenu").addEventListener("click", function() {
    document.querySelector(".nav-list").classList.toggle("active");
});

let index = 0;

function moveSlide(direction) {
    const slider = document.querySelector(".course-categories");
    const slides = document.querySelectorAll(".course-el");
    const totalSlides = slides.length;
    
    // თუ ეკრანი პატარაა (768px-ზე ნაკლები), ვაჩვენოთ თითო სლაიდი
    const isMobile = window.innerWidth < 768;
    const visibleSlides = isMobile ? 1 : 4; // მობილურზე 1, დიდზე 4
    
    index += direction;
    
    if (index < 0) index = totalSlides - visibleSlides;
    if (index >= totalSlides) index = 0;
    
    const offset = -index * (100 / visibleSlides) + "%";
    slider.style.transform = `translateX(${offset})`;
}

// ღილაკების EventListener-ები
document.getElementById("prevSlide").addEventListener("click", () => moveSlide(-1));
document.getElementById("nextSlide").addEventListener("click", () => moveSlide(1));