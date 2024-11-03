$(document).ready(() => {
    const validateForm = () => {
        let isValid = true;

        
        const email = $("#email").val();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/;
        if (email === "" || !email.match(emailRegex)) {
            $("#emailError").text(email === "" ? "Email is required" : "You need to enter a valid Northeastern email address").show();
            isValid = false;
        } else {
            $("#emailError").hide(); 
        }

       
        const username = $("#username").val();
        if (username === "" || username.length < 3 || username.length > 20) {
            $("#usernameError").text(username === "" ? "Username is required" : "Username must be between 3 and 20 characters").show();
            isValid = false;
        } else {
            $("#usernameError").hide(); 
        }

       
        const password = $("#password").val();
        if (password === "" || password.length < 6 || password.length > 15) {
            $("#passwordError").text(password === "" ? "Password is required" : "Password must be 6-15 characters").show();
            isValid = false;
        } else {
            $("#passwordError").hide(); 
        }

        const confirmPassword = $("#confirmPassword").val();
        if (confirmPassword === "" || password !== confirmPassword) {
            $("#confirmPasswordError").text(confirmPassword === "" ? "Please confirm your password" : "Passwords do not match").show();
            isValid = false;
        } else {
            $("#confirmPasswordError").hide(); 
        }

       
        $("#loginButton").prop("disabled", !isValid);
    };

    
    $("input").on("input", validateForm);

   
    $("#loginForm").on("submit", (e) => {
        e.preventDefault();
        if ($("#loginButton").prop("disabled") === false) {
            window.location.href = "calculator.html";
        }
    });
});
