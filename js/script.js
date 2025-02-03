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

  const form = document.getElementById("subscription-form")

//   form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const firstName = document.getElementById("fname").value.trim();
//     const lastName = document.getElementById("lname").value.trim();
//     const email = document.getElementById("Email").value.trim();
    
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!firstName || !lastName || !email) {
//         alert("Please fill in all fields.");
//         return;
//     }

//     if (!emailPattern.test(email)) {
//         alert("Please enter a valid email address.");
//         return;
//     }

//     alert("Form submitted successfully!");
//     this.submit(); 
// });

document.getElementById("accept-cookies").addEventListener("click", function () {
  document.getElementById("cookie-banner").style.display = "none";
  document.cookie = "cookiesAccepted=true; path=/; max-age=31536000"; // 1 year
});



  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const firstName = document.getElementById("fname").value.trim();
    const lastName = document.getElementById("lname").value.trim();
    const email =document.getElementById("Email").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const cookiesAccepted = document.cookie.includes("cookiesAccepted=true");

    if (!firstName || !lastName || !email) {
        alert("Please fill in all fields.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (firstName && lastName && email) {
      if (cookiesAccepted) {
        Cookies.set("SavedFirstName", firstName, { expires: 365 });
        Cookies.set("SavedLastName", lastName, { expires: 365 });
        Cookies.set("SavedEmail", email, { expires: 365 });

        alert("Form submitted successfully!");
        this.submit();
      }else {
        alert("Please accept cookies before submitting the form.");
      }
    }else {
      alert("Please fill in all fields before submitting.");
    }

  })



  