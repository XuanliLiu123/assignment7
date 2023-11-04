$(document).ready(function () {
    $("#loginButton").click(function() {
        const email = $("#email").val();
        const username = $("#username").val();
        const password = $("#password").val();
        const confirmPassword = $("#confirmPassword").val();

        
        if (!isValidEmail(email) || !isValidUsername(username) || !isValidPassword(password) || !isValidConfirmPassword(password, confirmPassword)) {
            return;
        }

        
        window.location.href = "calculator.html";
    });
});
