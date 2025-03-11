let timer;
let timeLeft = timeNew = 900; // 15 minutes in seconds
let running = false;

const updateDisplay = (timerOrEdit) => {
    let hours = Math.floor(timeLeft / 3600);                // 3600 seconds in an hour
    let minutes = Math.floor((timeLeft % 3600) / 60);       // 60 seconds in a minute
    let seconds = timeLeft % 60;                            // remaining seconds

    if (timerOrEdit) {                                      // if timerOrEdit is true, then update the timer
        $("#timer").text(
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
        );
    }else{                                                  // if timerOrEdit is false, then update the label
        let label = $("#timer-label");
        label.text(`(${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')})`);
        
    }
}

const pauseTimer = () => {
    clearInterval(timer);
    running = false;
}

$("#start").on("click", () => {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay(true);
            } else {
                clearInterval(timer);
                running = false;
            }
        }, 200);
    }
});

$("#pause").on("click", () => {
    pauseTimer()
});

$("#reset").on("click", () => {
    pauseTimer();
    timeLeft = timeNew;
    updateDisplay(true);
});

$("#edit-btn").on("click", (event) => {
    event.preventDefault();
    pauseTimer();
    let input = $("#edit-timer");
    let label = $("#timer-label");

    if (input.css("display") === "none") {
        input.css("display", "inline");
        label.css("display", "none");
        input.focus();        
    } else {
        let newTime = input.val().split(":")
        minutes = parseInt(newTime[1]) || 0,
            seconds = parseInt(newTime[2]) || 0;

        timeLeft = timeNew = minutes * 60 + seconds; // Convert minutes to seconds
        console.log(minutes, seconds, timeLeft);

        input.css("display", "none");
        label.css("display", "inline");
        // label.text(`(${input.val()})`);
        updateDisplay(false);
        updateDisplay(true);
    }
});

updateDisplay(true);