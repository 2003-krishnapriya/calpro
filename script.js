function appendNumber(number) {
  document.getElementById('result').value += number;
}

function appendOperator(operator) {
  document.getElementById('result').value += operator;
}

function clearDisplay() {
  document.getElementById('result').value = '';
}

function calculateResult() {
  var result = document.getElementById('result').value;
  var calculatedResult = eval(result);
  document.getElementById('result').value = calculatedResult;
}