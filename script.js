//login form
const loginform=document.getElementById("login-form");
if(loginform){
    loginform.addEventListener("submit",function(event){
        event.preventDefault();

        const email=document.getElementById("email").value.trim();
        const password=document.getElementById("password").value.trim();
        const message=document.getElementById("loginMessage");
        const storedUser=JSON.parse(localStorage.getItem("registered user"));
        if(!storedUser){
            if(message){
                message.textContent="No user found, please register first.";
                message.style.color="red";
            }
            return;
        }
        if(email===storedUser.email && password===storedUser.password){
            if(message){
                message.textContent=`Login successful! Welcome ${storedUser.fullName}!`;
                message.style.color="green";
            }
            setTimeout(function(){
                window.location.href="home.html";
            },2000);
        }else{
            if(message){
                message.textContent="Invalid email or password.";
                message.style.color="red";
            }
            return;
        }
    });
}



//registration form
document.addEventListener("DOMContentLoaded",() => {
    const registrationForm=document.getElementById("registerform");
    if(registrationForm){
        registrationForm.addEventListener("submit",function (event) {
            event.preventDefault();

            const fullName=document.getElementById("fullName").value.trim();
            const email=document.getElementById("email").value.trim();
            const password=document.getElementById("password").value.trim();
            const confirmPassword=document.getElementById("confirmPassword").value.trim();
            const message=document.getElementById("registerMessage");

            if(!fullName || !email || !password || !confirmPassword){
                if(message){
                    message.textContent="Please fill in all fields.";
                    message.style.color="red";
                }
                return;
            }

            const user={
                fullName:fullName,
                email:email,
                password:password
            };
            localStorage.setItem("registered user",JSON.stringify(user));

            if(message){
                message.textContent="Registration successful! You can now log in.";
                message.style.color="green";
            }

            registrationForm.reset();
            setTimeout(() => {
                window.location.href="login.html";
            },2000);
        });

    }

});






// ====== Greeting Based on Time ======
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



    