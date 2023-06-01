const typeEl = document.getElementById('type');
const nameEl = document.getElementById('name');
const dateEl = document.getElementById('date');
const amountEl = document.getElementById('amount');

const typeIn = document.getElementById('type-in');
const nameIn = document.getElementById('name-in');
const dateIn = document.getElementById('date-in');
const amountIn = document.getElementById('amount-in');
const submit = document.getElementById('submit');

submit.addEventListener('click', renderForm);

function renderForm(e){
  e.preventDefault();
  typeIn.textContent = typeIn.value;
  nameIn.textContent = nameIn.value;
  dateIn.textContent = dateIn.value;
  amountIn.textContent = amountIn.value;
}