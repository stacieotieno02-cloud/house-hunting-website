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



    