

document.addEventListener('DOMContentLoaded', () => {

  let selector = "timer";
  let timerHR = 0;
  let timerMIN = 0;
  let timerSEC = 0;
  let stopwatch = 0;

  const timer_selector = document.querySelector('.timer-label');
  const stopWatch_selector = document.querySelector('.stopwatch-label');
  const timerUI = document.querySelector('.timer');
  const stopwatchUI = document.querySelector('.stop-watch');
  const palyBtn = document.querySelector('.btn-play');
  const pauseBtns = document.querySelector('.btn-pause');
  const pauseBtn = document.querySelector('.pause-btn');
  const resetBtn = document.querySelector('.reset-btn');

  timer_selector.addEventListener('click', handleSelector);
  stopWatch_selector.addEventListener('click', handleSelector);

  palyBtn.addEventListener('click', handlePlayBtns);
  pauseBtn.addEventListener('click', handlePauseBtn);
  resetBtn.addEventListener('click', handleResetBtn);

  function handleSelector() {
    if (timer_selector.classList.contains('active')) {
      timer_selector.classList.remove('active');
      stopWatch_selector.classList.add('active');
      timerUI.classList.add('hidden');
      stopwatchUI.classList.remove('hidden');
      selector = "stopwatch";
    } else {
      stopWatch_selector.classList.remove('active');
      timer_selector.classList.add('active');
      timerUI.classList.remove('hidden');
      stopwatchUI.classList.add('hidden');
      selector = "timer";
    }
  }

  function handlePlayBtns() {
    palyBtn.classList.add('hidden');
    pauseBtns.classList.remove('hidden');
    console.log(selector);
  }

  function handlePauseBtn() {
    palyBtn.classList.remove('hidden');
    pauseBtns.classList.add('hidden');
  }

  function handleResetBtn() {
    palyBtn.classList.remove('hidden');
    pauseBtns.classList.add('hidden');
  }

});