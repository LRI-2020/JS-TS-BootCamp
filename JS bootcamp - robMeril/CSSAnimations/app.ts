let countdown = document.getElementById('countdown')! as HTMLTitleElement;

countdown.innerText = getRemainingDays().toString();

function getRemainingDays(): number {

    let now = new Date(Date.now());
    let nextChristmas: Date = now.getMonth() === 11 ? checkDay(now) : new Date(now.getFullYear(), 11, 25);
    return Math.floor((nextChristmas.getTime() - now.getTime()) / 1000 / 3600 / 24);
}

function checkDay(now: Date): Date {

    return now.getDate() <= 25 ? new Date(now.getFullYear(), 11, 25) : new Date(now.getFullYear() + 1, 11, 25);

}