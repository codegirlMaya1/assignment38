let timer;
let interval;
let notificationInterval;

function startTimer() {
    const timeInput = document.getElementById('timeInput').value;
    let time = parseInt(timeInput);
    if (isNaN(time) || time <= 0) {
        alert('Please enter a valid number of seconds.');
        return;
    }

    clearInterval(interval);
    clearInterval(notificationInterval);
    document.getElementById('notification').style.display = 'none';

    interval = setInterval(() => {
        if (time <= 0) {
            clearInterval(interval);
            clearInterval(notificationInterval);
            return;
        }
        time--;
        displayTime(time);
    }, 1000);

    notificationInterval = setInterval(() => {
        showNotification();
    }, 20000);
}

function displayTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.getElementById('timerDisplay').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function showNotification() {
    document.getElementById('notification').style.display = 'block';
}

function dismissNotification() {
    document.getElementById('notification').style.display = 'none';
}

function setClock() {
    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('minute');
    const secondHand = document.getElementById('second');

    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDegrees = ((seconds / 60) * 360) + 90;
    const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setClock, 1000);
setClock();