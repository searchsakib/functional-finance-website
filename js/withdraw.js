document.getElementById('btn-withdraw').addEventListener('click', () => {
  // withdraw amount calculation
  const newWithdrawAmount = getInputFieldValueById('withdraw-field');
  const previousWithdrawTotal = getElementValueById('withdraw-total');
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  setTextElementValueById('withdraw-total', newWithdrawTotal);

  // balance amount calculation
  const previousBalanceTotal = getElementValueById('balance-total');
  const balanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById('balance-total', balanceTotal);
});
