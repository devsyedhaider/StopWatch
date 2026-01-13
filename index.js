// Select elements
const timeText = document.querySelectorAll(".timeDisplay p");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = null;

// Update UI
function updateTime() {
  timeText[0].textContent = `${String(hours).padStart(2, "0")} :`;
  timeText[1].textContent = `${String(minutes).padStart(2, "0")} :`;
  timeText[2].textContent = String(seconds).padStart(2, "0");
}

// Start stopwatch
function startTimer() {
  if (timer) return;

  timer = setInterval(() => {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    updateTime();
  }, 1000);
}

// Pause stopwatch
function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

// Reset stopwatch
function resetTimer() {
  pauseTimer();
  hours = minutes = seconds = 0;
  updateTime();
}

// Event listeners
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
