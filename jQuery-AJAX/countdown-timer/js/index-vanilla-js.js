let timer;
let timeLeft = timeNew = 900; // 15 minutes in seconds
let running = false;

const updateDisplay = () => {
    let hours = Math.floor(timeLeft / 3600);            // 3600 seconds in an hour
    let minutes = Math.floor((timeLeft % 3600) / 60);   // 60 seconds in a minute
    let seconds = timeLeft % 60;                        // remaining seconds

    document.getElementById("timer").textContent =
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

document.getElementById("start").addEventListener("click", () => {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                running = false;
            }
        }, 1000);
    }
});

document.getElementById("pause").addEventListener("click", () => {
    clearInterval(timer);
    running = false;
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(timer);
    timeLeft = timeNew;
    running = false;
    updateDisplay();
});

document.getElementById("edit-btn").addEventListener("click", (event) => {
    event.preventDefault();

    let input = document.getElementById("edit-timer");
    let label = document.getElementById("timer-label");

    if (input.style.display === "none") {
        input.style.display = "inline";
        label.style.display = "none";
        input.focus();
    } else {
        let newTime = input.value.split(":")
        minutes = parseInt(newTime[1]) || 0,
            seconds = parseInt(newTime[2]) || 0;


        timeLeft = timeNew = minutes * 60 + seconds;
        console.log(minutes, seconds, timeLeft);

        input.style.display = "none";
        label.style.display = "inline";
        label.textContent = `(${input.value})`;

        updateDisplay();
    }
});

updateDisplay();