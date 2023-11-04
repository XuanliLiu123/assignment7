$(document).ready(function () {
    const loggedInUser = localStorage.getItem("username");
    if (loggedInUser) {
        $("#loggedInUser").text(loggedInUser);
    } else {
        window.location.href = "login.html"; // Redirect if not logged in
    }

    $("#addButton, #subtractButton, #multiplyButton, #divideButton").click(function() {
        const number1 = parseFloat($("#number1").val());
        const number2 = parseFloat($("#number2").val());

        if (isNaN(number1) || isNaN(number2)) {
            $("#result").val("Invalid input");
        } else {
            const operation = $(this).attr("id").replace("Button", "");
            const result = calculate(number1, number2, operation);
            $("#result").val(result);
        }
    });
});
