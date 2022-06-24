
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bcgBody = document.querySelector("body");


startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
        const color = getRandomHexColor();
        bcgBody.style.backgroundColor = color;
        startBtn.disabled = true;
    }, 1000);
    if(stopBtn.disabled){
        stopBtn.disabled = false;
      }
  });

  stopBtn.addEventListener("click", () => {
      clearInterval(timerId);
      stopBtn.disabled = true;
      if(startBtn.disabled){
        startBtn.disabled = false;
      }
  })