const counter = document.getElementById('clicker__counter');
const cookieButton = document.getElementById('cookie');
const clickerTime = document.getElementById('clicker__time');
const clickerSpeed = document.getElementById('clicker__speed');

cookieButton.onclick = () => {
  if (counter.textContent == 0 || (+counter.textContent) % 2 === 0) {
    cookieButton.width *= 1.1;
    cookieButton.height *= 1.1;
  } else {
    cookieButton.width *= 0.9;
    cookieButton.height *= 0.9;
  }
  
  let carDate = Date.now();
  let privDate = +clickerTime.textContent;
  if (clickerTime.textContent > 1) {
    clickerSpeed.textContent = (1000 / (carDate - privDate)).toFixed(2);
  }
  
  clickerTime.textContent = Date.now();
  counter.textContent = (+counter.textContent) + 1;
}