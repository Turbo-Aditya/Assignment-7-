$(document).ready(() => {
    const displayResult = (message) => {
        $("#result span").text(message);
    };

    const validateInputs = () => {
        const num1 = $("#num_1").val();
        const num2 = $("#num_2").val();
        return !isNaN(num1) && !isNaN(num2);
    };

    const performOperation = (operation) => {
        const num1 = parseFloat($("#num_1").val());
        const num2 = parseFloat($("#num_2").val());

        let resultMessage;

        if (!validateInputs()) {
            resultMessage = "Please enter valid numbers!";
            addErrorStyles();
        } else {
            removeErrorStyles();
            switch (operation) {
                case "add":
                    resultMessage = `The answer is ${num1 + num2}`;
                    break;
                case "subtract":
                    resultMessage = `The result is ${num1 - num2}`;
                    break;
                case "multiply":
                    resultMessage = `Calculation Complete! Result: ${num1 * num2}`;
                    break;
                case "divide":
                    resultMessage = num2 !== 0 ? `Quotient: ${num1 / num2}` : "Oops! Cannot divide by zero";
                    break;
                default:
                    resultMessage = "Unknown operation";
            }
        }

        displayResult(resultMessage);
    };

    const addErrorStyles = () => {
        $("input").addClass("error-input");
    };

    const removeErrorStyles = () => {
        $("input").removeClass("error-input");
    };

    const enableButtonsIfFilled = () => {
        const num1 = $("#num_1").val();
        const num2 = $("#num_2").val();
        $("button").prop("disabled", !(num1 && num2));
    };

    
    $("#addButton").click(() => performOperation("add"));
    $("#substractButton").click(() => performOperation("subtract"));
    $("#multiplyButton").click(() => performOperation("multiply"));
    $("#Dbtn").click(() => performOperation("divide"));

  
    $("input").on("input", enableButtonsIfFilled);
});
