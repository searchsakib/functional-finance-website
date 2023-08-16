document.getElementById('btn-withdraw').addEventListener('click', () => {
  const newWithdrawAmount = getInputFieldValueById('withdraw-field');
  const previousWithdrawTotal = getElementValueById('withdraw-total');
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  setTextElementValueById('withdraw-total', newWithdrawTotal);

  const previousBalanceTotal = getElementValueById('balance-total');
  const balanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById('balance-total', balanceTotal);
});
