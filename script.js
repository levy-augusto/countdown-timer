const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minsEl = document.querySelector('#mins');
const secondsEl = document.querySelector('#seconds');
const newYears = `1 Jan ${new Date().getUTCFullYear() + 1}`;

function contador() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formataData(hours);
    minsEl.innerHTML = formataData(minutes);
    secondsEl.innerHTML = formataData(seconds);
}

function formataData(time) {
    return time < 10 ? (`0${time}`) : time;
}
contador()
setInterval(contador, 1000);