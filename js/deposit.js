document.getElementById('btn-deposit').addEventListener('click', () => {
  const newDepositAmount = getInputFieldValueById('deposit-field');
  const previousDepositTotal = getElementValueById('deposit-total');
  const newDepositTotal = previousDepositTotal + newDepositAmount;

  const previousBalanceTotal = getElementValueById('balance-total');
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;

  setTextElementValueById('deposit-total', newDepositTotal);
  setTextElementValueById('balance-total', newBalanceTotal);
});
