const breakObj = {
    plusBtn: document.getElementById('break-length-plus'),
    minusBtn: document.getElementById('break-length-minus'),
    contentCount: document.getElementById('break-content'),
    contentTimer: document.getElementById('display-break'),
    value: 1,
    second: 60,
    timer: undefined,
    isRunning: false
}

const sessionObj = {
    plusBtn: document.getElementById('session-length-plus'),
    minusBtn: document.getElementById('session-length-minus'),
    contentCount: document.getElementById('session-content'),
    contentTimer: document.getElementById('display-session'),
    value: 1,
    second: 60,
    timer: undefined,
    isRunning: false,
}

slider = {
    display: document.querySelector('.display'),
    area: document.querySelector('.slider'),
    firstValue: 0,
    value: 0
}

let timer;
let isTimerRunning = false

breakObj.plusBtn.onclick = () => {
    if (!sessionObj.isRunning && !breakObj.isRunning) {
        breakObj.value++
        breakObj.contentCount.textContent = breakObj.value
    }

}
breakObj.minusBtn.onclick = () => {
    if (!sessionObj.isRunning && !breakObj.isRunning) {
        breakObj.value--
        if (breakObj.value < 0) breakObj.value = 0
        breakObj.contentCount.textContent = breakObj.value
    }
}

sessionObj.plusBtn.onclick = () => {
    if (!sessionObj.isRunning && !breakObj.isRunning) {
        sessionObj.value++
        sessionObj.contentCount.textContent = sessionObj.value
    }
}

sessionObj.minusBtn.onclick = () => {
    if (!sessionObj.isRunning && !breakObj.isRunning) {
        sessionObj.value--
        if (sessionObj.value <= 0) sessionObj.value = 0
        sessionObj.contentCount.textContent = sessionObj.value
    }
}

const pauseTimer = (t) => {
    clearInterval(t);
    isTimerRunning = false
    console.log('pause timer');
    
}

const resetValue = () => {
    
    isTimerRunning = false
    sessionObj.isRunning = false
    sessionObj.value = sessionObj.contentCount.textContent

    breakObj.isRunning = false
    breakObj.value = breakObj.contentCount.textContent

    console.log('resetValue');
    pauseTimer(timer)

}

const startTimer = (timerSession) => {

    this.timerSession = timerSession
    // this.timer=timer

    if (timerSession === 'SESSION') {
        sessionObj.isRunning = true;
        if (sessionObj.value == 1) sessionObj.second = 0
    }
    if (timerSession === 'BREAK') {
        breakObj.isRunning = true;
        if (breakObj.value == 1) breakObj.second = 0

    }
    console.log(timerSession);

    this.timer=timer= setInterval(() => {

        isTimerRunning = true
        let sliderWidth = 0

        if (this.timerSession === 'SESSION') {
            sessionObj.second--;
            if (sessionObj.second <= 0) {
                sessionObj.second = 60
                sessionObj.value--
            }

            sessionObj.contentTimer.textContent = `${sessionObj.value} : ${sessionObj.second}`
            slider.value = (sessionObj.value * 60) + sessionObj.second
            sliderWidth = 100 - parseInt((100 * (slider.value)) / slider.firstValue)

            if (sessionObj.value < 0) {
                sessionObj.contentTimer.textContent = 'SESSION'
                sessionObj.second = 0
                sessionObj.value = 0

                breakObj.isRunning = true
                sliderWidth = 0
                startTimer('BREAK')
            }
        }
        else if(this.timerSession === 'BREAK'){
            breakObj.second--;
            if (breakObj.second <= 0) {
                breakObj.second = 60
                breakObj.value--
            }

            breakObj.contentTimer.textContent = `${breakObj.value} : ${breakObj.second}`
            slider.value = (breakObj.value * 60) + breakObj.second
            sliderWidth = 100 - parseInt((100 * (slider.value)) / slider.firstValue)

            if (breakObj.value < 0) {
                breakObj.contentTimer.textContent = 'BREAK'
                breakObj.second = 0
                breakObj.value = 0
                pauseTimer(this.timer)
                // resetValue()

            }

        }
        // console.log('isTimerRunning', isTimerRunning);        
        // console.log('sliderWidth:', sliderWidth, slider.firstValue);
        slider.area.style.width = `${sliderWidth}%`

    }, 200);


}

console.log(slider);

slider.display.onclick = () => {

    if (sessionObj.value == 1 && !sessionObj.isRunning) slider.firstValue = (sessionObj.value * 60)
    else slider.firstValue = (sessionObj.value * 60) + sessionObj.second

    if (breakObj.value == 1 && !breakObj.isRunning) slider.firstValue = (breakObj.value * 60)
    else slider.firstValue = (breakObj.value * 60) + breakObj.second

    if ((!sessionObj.isRunning && !breakObj.isRunning && !isTimerRunning) || 
        (sessionObj.isRunning && !breakObj.isRunning && !isTimerRunning)) {
        startTimer('SESSION')

    }

    if ((sessionObj.isRunning && breakObj.isRunning  && !isTimerRunning)|| 
        (sessionObj.isRunning && breakObj.isRunning && !isTimerRunning))
        startTimer('BREAK')

    if (isTimerRunning) pauseTimer(timer)

    console.log('disp click', isTimerRunning);

}



