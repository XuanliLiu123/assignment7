// DOM Elements
const timerLabel = document.getElementById('timer');
const datePicker = document.getElementById('datePicker');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let startTime;
let intervalId;
let running = false;

// Event Listeners
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
datePicker.addEventListener('change', updateDate);

// Update the date picker to display the current date
function updateDate() {
    const selectedDate = new Date(datePicker.value);
    const currentDate = new Date();
    if (selectedDate < currentDate) {
        datePicker.valueAsDate = selectedDate;
    } else {
        datePicker.valueAsDate = currentDate;
    }
}

// Start the timer
async function startTimer() {
    if (!running) {
        startTime = new Date();
        intervalId = setInterval(updateTimer, 1000);
        running = true;
    }
}

// Update the timer display
function updateTimer() {
    const currentTime = new Date();
    const elapsedTime = new Date(currentTime - startTime);
    const hours = String(elapsedTime.getUTCHours()).padStart(2, '0');
    const minutes = String(elapsedTime.getUTCMinutes()).padStart(2, '0');
    const seconds = String(elapsedTime.getUTCSeconds()).padStart(2, '0');
    timerLabel.textContent = `${hours}:${minutes}:${seconds}`;
}

// Stop the timer
function stopTimer() {
    if (running) {
        clearInterval(intervalId);
        running = false;
    }
}

// Reset the timer
function resetTimer() {
    stopTimer();
    timerLabel.textContent = '00:00:00';
}

// Initial setup
updateDate();
