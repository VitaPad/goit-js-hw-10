import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', createButton);
function createPromise(state, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

function createButton(event) {
  event.preventDefault();
  const delay = formEl.querySelector('input[name="delay"]').value;
  const state = formEl.querySelector('input[name="state"]:checked').value;
  createPromise(state, delay)
    .then(delay => {
      iziToast.success({
        title: ``,
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: '',
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
        color: '#fffffff',
        backgroundColor: '#ff0000',
      });
    });
}
