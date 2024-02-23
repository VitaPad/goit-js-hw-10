import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startBtn = document.querySelector('button');
const textEl = document.getElementById('datetime-picker');
const timerEl = document.querySelector('.timer');
const timerDaysEl = document.querySelector('[data-days]');
const timerHoursEl = document.querySelector('[data-hours]');
const timerMinutesEl = document.querySelector('[data-minutes]');
const timerSecondsEl = document.querySelector('[data-seconds]');

let userSelectedDate;
let intervalId;
startBtn.addEventListener('click', handleStartButtonClick);

function handleStartButtonClick() {
  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      userSelectedDate = selectedDates[0];
      if (userSelectedDate > new Date()) {
        startBtn.disabled = true;
      } else {
        startBtn.disabled = false;
        iziToast.error({
          title: 'Error',
          message: 'Please choose a date in the future',
        });
      }
    },
  };

  flatpickr(textEl, options);
  const selectedDates = flatpickr.parseDate(textEl.value);
  if (selectedDates) {
    userSelectedDate = selectedDates;
    handleTimer();
    intervalId = setInterval(handleTimer, 1000);
  }
}

function handleTimer() {
  const currentTime = new Date();
  const difference = userSelectedDate.getTime() - currentTime.getTime();
  const { days, hours, minutes, seconds } = convertMs(difference);

  timerDaysEl.textContent = formatTimeValue(days);
  timerHoursEl.textContent = formatTimeValue(hours);
  timerMinutesEl.textContent = formatTimeValue(minutes);
  timerSecondsEl.textContent = formatTimeValue(seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function formatTimeValue(value) {
  return `${value}`;
}

if (userSelectedDate) {
  intervalId = setInterval(handleTimer, 1000);
}
