const hoursEl = document.querySelector('.hour');
const minEl = document.querySelector('.min');
const secEl = document.querySelector('.sec');

let date = new Date();
let hours = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

hoursEl.textContent = hours;
minEl.textContent = min;
secEl.textContent = sec;

if (sec <= 0) {
  secEl.textContent += 0;
}

// setInterval(() => {
hoursEl.textContent = hours;
minEl.textContent = min;
secEl.textContent = sec;

if (sec <= 0) {
  secEl.textContent += 0;
}
// }, 1000)
