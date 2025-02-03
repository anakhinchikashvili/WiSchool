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

 
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("subscription-form");
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptCookiesBtn = document.getElementById("accept-cookies");

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function areCookiesAccepted() {
        return Cookies.get("cookiesAccepted") === "true";
    }

    function hideCookieBanner() {
        cookieBanner.style.display = "none";
    }

    acceptCookiesBtn.addEventListener("click", function () {
        Cookies.set("cookiesAccepted", "true", { expires: 365 });
        hideCookieBanner();
    });

    if (areCookiesAccepted()) {
        hideCookieBanner();
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const firstName = document.getElementById("fname").value.trim();
        const lastName = document.getElementById("lname").value.trim();
        const email = document.getElementById("Email").value.trim();

        let errors = [];

        if (!firstName) {
            errors.push("First name is required.");
        }

        if (!lastName) {
            errors.push("Last name is required.");
        }

        if (!email) {
            errors.push("Email is required.");
        } else if (!validateEmail(email)) {
            errors.push("Please enter a valid email address.");
        }

        if (errors.length > 0) {
            alert(errors.join("\n"));
            return;
        }

        if (!areCookiesAccepted()) {
            cookieBanner.style.display = "block";
            return;
        }

        Cookies.set("SavedFirstName", firstName, { expires: 365 });
        Cookies.set("SavedLastName", lastName, { expires: 365 });
        Cookies.set("SavedEmail", email, { expires: 365 });

        alert("Form submitted successfully!");
        form.reset();
    });
});