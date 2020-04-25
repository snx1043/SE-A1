function cal(operator, num1, num2) {
    switch (operator) {
        case "+":
            return `Answer : ${num1} + ${num2} = ${num1 + num2}`;
        case "-":
            return `Answer : ${num1} - ${num2} = ${num1 - num2}`;
        case "*":
            return `Answer : ${num1} * ${num2} = ${num1 * num2}`;
        case "/":
            return `Answer : ${num1} / ${num2} = ${num1 / num2}`;
    }
}

function checkInput(num1, num2) {
    if (num1 == "" || num2 == "") {
        return false;
    } else if (isNaN(num1) || isNaN(num2)) {
        return false;
    } else {
        return true;
    }
}

module.exports = { cal, checkInput, hello };