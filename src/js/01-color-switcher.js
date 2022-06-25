function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bcgBody = document.querySelector('body');
let timerId = null;
stopBtn.disabled = true;

startBtn.addEventListener('click', () => {
  bcgBody.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    bcgBody.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  stopBtn.disabled = true;
  startBtn.disabled = false;
});
