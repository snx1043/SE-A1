const operator = document.getElementById('operator');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const p1 = document.getElementById('p1');
const button = document.getElementById('button')

button.addEventListener('click', function () {
  console.log(num1.value.checkInput);
  if (checkInput(num1.value, num2.value)) {
    p1.innerHTML = cal(operator.value, parseInt(num1.value), parseInt(num2.value));
  }

})

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
    alert('please enter the number');
    return false;
  } else if (isNaN(num1) || isNaN(num2)) {
    alert('must be number');
    return false;
  } else {
    return true;
  }
}
