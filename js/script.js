document.getElementById("burgerMenu").addEventListener("click", function() {
    document.querySelector(".nav-list").classList.toggle("active");
});

let index = 0;

function moveSlide(direction) {
    const slider = document.querySelector(".course-categories");
    const totalSlides = document.querySelectorAll(".course-el").length;

    index += direction;
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    const offset = -index * 100 + "%"; 
    slider.style.transform = `translateX(${offset})`;
}

document.getElementById("prevSlide").addEventListener("click", () => moveSlide(-1));
document.getElementById("nextSlide").addEventListener("click", () => moveSlide(1));

