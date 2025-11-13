//===== Greeting Based on Time ======
function displayGreeting() {
    const greeting = document.getElementById("greeting");
    if (!greeting) return; // Avoid errors if element not found

    const hours = new Date().getHours();
    let message = "";

    if (hours < 12) message = "Good Morning ☀️";
    else if (hours < 18) message = "Good Afternoon 🌤️";
    else message = "Good Evening 🌙";

    greeting.textContent = message + " and welcome to Martoh Rentals!";
}
displayGreeting();


// ====== Image Slider / Gallery ======
let currentIndex = 0;
function moveSlide(direction) {
    const thumbnails = document.querySelector(".image-thumbnails");
    const slides = document.querySelectorAll(".image-thumbnails img");

    if (!thumbnails || slides.length === 0) return;

    currentIndex += direction;
    if (currentIndex < 0) currentIndex = slides.length - 1;
    if (currentIndex >= slides.length) currentIndex = 0;

    const slideWidth = slides[0].clientWidth + 10; // include gap
    thumbnails.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}


// ====== Search Box Interaction ======
const searchInput = document.querySelector(".search-box input");
if (searchInput) {
    searchInput.addEventListener("focus", () => {
        searchInput.style.backgroundColor = "rgba(255,255,255,0.5)";
    });
    searchInput.addEventListener("blur", () => {
        searchInput.style.backgroundColor = "transparent";
    });
}


// ====== Simple Form Validation ======
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const inputs = form.querySelectorAll("input[required]");
        let allFilled = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.border = "2px solid red";
                allFilled = false;
            } else {
                input.style.border = "1px solid #00f7ff";
            }
        });

        if (allFilled) {
            alert("Form submitted successfully ✅");
            form.reset();
        } else {
            alert("Please fill in all fields ❗");
        }
    });
}

// Apply validation to both login and register forms (if present)
validateForm("login-form");
validateForm("register-form");


// ====== Smooth Scroll (Optional Enhancement) ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});



    