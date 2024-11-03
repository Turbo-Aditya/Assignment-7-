let timerval;
let timeSpent = 0; 

const timerLabel = document.getElementById("timer");
const datePicker = document.getElementById("datePicker");


const initializeDatePicker = () => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    datePicker.value = formattedDate; 
    console.log("Date Picker initialized with:", formattedDate);
};


const updateTimerLabel = () => {
    const hours = String(Math.floor(timeSpent / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((timeSpent % 3600) / 60)).padStart(2, '0');
    const seconds = String(timeSpent % 60).padStart(2, '0');
    timerLabel.textContent = `${hours}:${minutes}:${seconds}`;
    console.log(`Timer label updated: ${hours}:${minutes}:${seconds}`);
};


const startTimer = () => {
    console.log("Timer started"); 
    return new Promise((resolve) => {
        timerval  = setInterval(() => {
            timeSpent++;
            updateTimerLabel();
            console.log(`Elapsed time: ${timeSpent}`); 
        }, 1000);
        resolve();
    });
};

const stopTimer = () => {
    return new Promise((resolve) => {
        clearInterval(timerval);
        timerval = null; 
        resolve();
    });
};


const resetTimer = async () => {
    await stopTimer(); 
    timeSpent = 0; 
    updateTimerLabel(); 
};

// Event Listeners
document.getElementById("startBtn").addEventListener("click", async () => {
    console.log("Start button clicked"); 
    if (!timerval) { 
        await startTimer();
    }
});

document.getElementById("stopBtn").addEventListener("click", async () => {
    console.log("Stop button clicked"); // Debugging
    await stopTimer();
});

document.getElementById("resetBtn").addEventListener("click", async () => {
    console.log("Reset button clicked"); // Debugging
    await resetTimer();
});


window.onload = initializeDatePicker;
