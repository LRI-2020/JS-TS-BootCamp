"use strict";
let countdown = document.getElementById('countdown');
countdown.innerText = getRemainingDays().toString();
function getRemainingDays() {
    let now = new Date(Date.now());
    let nextChristmas = now.getMonth() === 11 ? checkDay(now) : new Date(now.getFullYear(), 11, 25);
    return Math.floor((nextChristmas.getTime() - now.getTime()) / 1000 / 3600 / 24);
}
function checkDay(now) {
    return now.getDate() <= 25 ? new Date(now.getFullYear(), 11, 25) : new Date(now.getFullYear() + 1, 11, 25);
}
