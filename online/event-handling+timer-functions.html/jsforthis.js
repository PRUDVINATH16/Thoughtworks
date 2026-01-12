

document.addEventListener('DOMContentLoaded', () => {

  let selector = "timer";
  let timerInterval;
  let swInterval;

  let swSecs = 0;
  let swMins = 0;
  let swHours = 0;

  let seconds_value = 0;
  let minutes_value = 0;
  let hours_value = 0;

  const timer_selector = document.querySelector('.timer-label');
  const stopWatch_selector = document.querySelector('.stopwatch-label');
  const timerUI = document.querySelector('.timer');
  const stopwatchUI = document.querySelector('.stop-watch');
  const clock = document.querySelector('.clock');

  const swSecUI = document.querySelector('.sec');
  const swMinUI = document.querySelector('.min');
  const swHrUI = document.querySelector('.hr');

  let seconds = document.querySelector('.seconds');
  let minutes = document.querySelector('.minutes');
  let hours = document.querySelector('.hours');

  const palyBtn = document.querySelector('.btn-play');
  const pauseBtns = document.querySelector('.btn-pause');
  const pauseBtn = document.querySelector('.pause-btn');
  const resetBtn = document.querySelector('.reset-btn');

  timer_selector.addEventListener('click', handleSelector);
  stopWatch_selector.addEventListener('click', handleSelector);

  palyBtn.addEventListener('click', handlePlayBtns);
  pauseBtn.addEventListener('click', handlePause);
  resetBtn.addEventListener('click', handleReset);

  function handleSelector() {
    if (timer_selector.classList.contains('active')) {
      timer_selector.classList.remove('active');
      stopWatch_selector.classList.add('active');
      timerUI.classList.add('hidden');
      clock.classList.add('hidden');
      stopwatchUI.classList.remove('hidden');
      selector = "stopwatch";

      swSecs = 0;
      swMins = 0;
      swHours = 0;
      swSecUI.textContent = "00";
      swMinUI.textContent = "00";
      swHrUI.textContent = "00";

    } else {
      stopWatch_selector.classList.remove('active');
      timer_selector.classList.add('active');
      timerUI.classList.remove('hidden');
      stopwatchUI.classList.add('hidden');
      selector = "timer";

      seconds.value = "00";
      minutes.value = "00";
      hours.value = "00";

      seconds_value = 0;
      minutes_value = 0;
      hours_value = 0;

      document.querySelector('.clock-timer').innerHTML = `
        ${hours_value} : ${minutes_value} : ${seconds_value}
      `;

    }

    handleReset();
  }

  seconds.addEventListener('input', () => {
    if (seconds.value >= 60 || seconds.value < 0) {
      seconds.value = 59;
      generateNotification("59 is highest.");
    }
    let length = String(seconds.value).length;
    if (length > 2) {
      seconds.value = seconds.value.slice(-2);
    }
  });

  minutes.addEventListener('input', () => {
    if (minutes.value >= 60 || minutes.value < 0) {
      minutes.value = 59;
      generateNotification("59 is highest.");
    }
    let length = String(minutes.value).length;
    if (length > 2) {
      minutes.value = minutes.value.slice(-2);
    }
  });

  hours.addEventListener('input', () => {
    if (hours.value >= 13 || hours.value < 0) {
      hours.value = 12;
      generateNotification("59 is highest.");
    }
    let length = String(hours.value).length;
    if (length > 2) {
      hours.value = hours.value.slice(-2);
    }
  })

  function handlePlayBtns() {
    palyBtn.classList.add('hidden');
    pauseBtns.classList.remove('hidden');

    handleTimerStart();
  }

  function generateNotification(message = "&nbsp;Something went wrong !!") {

    const messageSpan = document.querySelector('.message');
    const notification = document.querySelector('.notification');

    notification.style.opacity = "1";
    messageSpan.innerHTML = message;

    setTimeout(() => {
      notification.style.opacity = "0";
    }, 2500);
  }

  function handleTimerStart() {

    seconds_value = parseInt(seconds.value) || 0;
    minutes_value = parseInt(minutes.value) || 0;
    hours_value = parseInt(hours.value) || 0;

    if (selector == "timer") {
      timerUI.classList.add('hidden');
      clock.classList.remove('hidden');

      function genUI() {
        document.querySelector('.clock-timer').innerHTML = `
        ${hours_value} : ${minutes_value} : ${seconds_value}
      `;
      }
      genUI();

      clearInterval(timerInterval);
      timerInterval = setInterval(() => {
        if (seconds_value == 0 && minutes_value == 0 && hours_value == 0) {
          generateNotification(" !! TimerCompleted !!");
          handleReset();
          return;
        } else {
          seconds_value--;

          if (seconds_value <= 0 && minutes_value <= 0) {
            if (hours_value - 1 > -1) {
              minutes_value = 59;
              seconds_value = 59;
            }
          }

          if (seconds_value <= 0) {
            if (minutes_value - 1 > -1) {
              minutes_value--;
              seconds_value = 59;
            }
          }

          seconds.value = seconds_value;
          minutes.value = minutes_value;
          hours.value = hours_value;

          genUI();
        }
      }, 1000);
    } else {
      clearInterval(swInterval);
      swInterval = setInterval(() => {
        swSecs++;
        if (swSecs == 60) {
          swMins++;
          swSecs = 0;
        } else if (swMins == 60) {
          swHours++;
          swMins = 0;
        }
        swSecUI.textContent = swSecs;
        swMinUI.textContent = swMins;
        swHrUI.textContent = swHours;
      }, 1000);
    }
  }

  function handleReset() {

    if (selector == "timer") {
      seconds.value = "00";
      minutes.value = "00";
      hours.value = "00";

      clearInterval(timerInterval);
      clock.classList.add('hidden');
      timerUI.classList.remove('hidden');
    } else {
      clearInterval(swInterval);
      swSecs = 0;
      swMins = 0;
      swHours = 0;
      swSecUI.textContent = "00";
      swMinUI.textContent = "00";
      swHrUI.textContent = "00";
    }
    palyBtn.classList.remove('hidden');
    pauseBtns.classList.add('hidden');
  }

  function handlePause() {

    if (selector == "timer") {
      clearInterval(timerInterval);
    } else {
      clearInterval(swInterval);
    }
    palyBtn.classList.remove('hidden');
    pauseBtns.classList.add('hidden');

  }

});