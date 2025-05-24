function getTimeToBirthday() {
  const now = new Date();

  let bDay = new Date(now.getFullYear(), 4, 4);

  if (now > bDay) {
    bDay.setFullYear(now.getFullYear() + 1);
  }

  const diff = bDay - now;

  const msInSec = 1000;
  const msInMin = 60 * msInSec;
  const msInHour = 60 * msInMin;
  const msInDay = 24 * msInHour;

  const days = Math.floor(diff / msInDay);
  const hours = Math.floor((diff % msInDay) / msInHour);
  const minutes = Math.floor((diff % msInHour) / msInMin);
  const seconds = Math.floor((diff % msInMin) / msInSec);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

function updateBirthdayTimer() {
  const time = getTimeToBirthday();

  document.querySelector(".data__day").textContent = `${time.days}d`;
  document.querySelector(".data__hour").textContent = `${time.hours}h`;
  document.querySelector(".data__minute").textContent = `${time.minutes}m`;
  document.querySelector(".data__sec").textContent = `${time.seconds}s`;
}

setInterval(updateBirthdayTimer, 1000);

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
