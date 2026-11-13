const tipValue = document.getElementById('tip-value');
const receiptTotal = document.getElementById('receipt-total');
const bill = 100;

function updateReceipt() {
  const rate = Number(document.querySelector('input[name="tip"]:checked').value);
  const tip = bill * rate / 100;
  tipValue.value = tip;
  receiptTotal.value = bill + tip;
}

document.querySelector('.tip-options').addEventListener('change', updateReceipt);
window.addEventListener('pageshow', updateReceipt);
