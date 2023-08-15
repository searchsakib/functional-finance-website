function getInputFieldValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = '';
  return inputFieldValue;
}

function getElementValueById(elmentId) {
  const textElement = document.getElementById(elmentId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

document.getElementById('btn-deposit').addEventListener('click', () => {
  const newDepositAmount = getInputFieldValueById('deposit-field');
  const previousDepositTotal = getElementValueById('deposit-total');
  const newDepositTotal = previousDepositTotal + newDepositAmount;
});
