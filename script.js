function counterDays() {
    const todayDate = new Date();
    // const bDay = new Date('May, 04, 2023 00:00');
    const bDay = new Date('June, 28, 2022 14:55');

    const diff = bDay - todayDate;

    const msInSec = 1000;
    const msInMin = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const days = Math.floor(diff / msInDay);
    const hours = Math.floor((diff % msInDay) / msInHour);
    const mins = Math.floor((diff % msInHour) / msInMin);
    const sec = Math.floor((diff % msInMin) / msInSec);
    
    document.querySelector('.data__day').textContent = `${days}d`;
    document.querySelector('.data__hour').textContent = `${hours}h`;
    document.querySelector('.data__minute').textContent = `${mins}m`;
    document.querySelector('.data__sec').textContent = `${sec}s`; 

    if(diff <= 0) {
        clearInterval(countDown);
        document.querySelector('.data__day').textContent = ``;
        document.querySelector('.data__hour').textContent = ``;
        document.querySelector('.data__minute').textContent = ``;
        document.querySelector('.data__sec').textContent = ``;

        document.querySelector('.data__box').textContent = `🎉 It's Your B-Day 🎉`;
        document.querySelector('#titleToChange').textContent = `Hurray!!!`

        document.querySelector('#titleToDelete').textContent = `Congrats!!`
    }

} 

const countDown = setInterval(counterDays, 1000);
