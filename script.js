const clock = document.getElementById('clock');


window.onload = displayClock();

function displayClock(){
  var display = new Date().toLocaleTimeString();
  clock.innerHTML = display;
  setTimeout(displayClock, 1000); 
}


