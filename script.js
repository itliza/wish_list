function counterDays() {
    const todayDate = new Date();
    const bDay = new Date('May, 04, 2023 00:00');
    // const bDay = new Date('July, 7, 2022 12:12');

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

        document.querySelector('.timer__title').textContent = `🎉 It's Your B-Day 🎉`;
        
        let styleElem = document.head.appendChild(document.createElement("style"));

        styleElem.innerHTML = ".timer__big-round::after {content: 'Hurray!!';}";
    }

} 

const countDown = setInterval(counterDays, 1000);

