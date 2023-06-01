const clock = document.getElementById('clock');
const dateEl = document.getElementById('date')

window.onload = displayClock(); displayDate();

function displayClock(){
  let display = new Date().toLocaleTimeString();
  clock.innerHTML = display;
  setTimeout(displayClock, 1000); 
}

function displayDate(){
  let date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
  
  dateEl.innerHTML = date;
}
