function toggleMenu() {
    document.querySelector(".ul-item").classList.toggle("active");
}

let index = 0;

function moveSlide(direction) {
    const slider = document.querySelector(".fields-container");
    const slides = document.querySelectorAll(".fav-el");
    const totalSlides = slides.length;
    
    index += direction;
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    const offset = -index * 100 + "%"; 
    slider.style.transform = `translateX(${offset})`;
}

