import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const startBtn = document.querySelector('button');
const textEl = document.querySelector('input');
const timerEl = document.querySelector('.timer');

startBtn.addEventListener('click', handleStartButtonClick);

function handleStartButtonClick() {
  const options = {
    enableTime: true /*  Вмикає засіб вибору часу */,
    time_24hr: true /* Відображає засіб вибору часу в 24-годинному режимі без вибору AM/PM, якщо ввімкнено. */,
    defaultDate: new Date() /* Встановлює початкові вибрані дати. */,
    minuteIncrement: 1 /* Регулює крок для введення хвилин (включно з прокручуванням) */,
    onClose(selectedDates) {
      let userSelectedDate = selectedDates[0];
      if (userSelectedDate < new Date()) {
        window.alert('Please choose a date in the future');
        startBtn.disabled = true;
      } else {
        startBtn.disabled = false;
      }
    } /* запускається, коли відкривається календар. */,
  };

  flatpickr(textEl, options);
}
