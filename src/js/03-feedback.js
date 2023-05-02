import { saveToLS, loadFormLS } from './helpers.js';
const throttle = require('lodash.throttle');

const refs = {
  formElem: document.querySelector('.feedback-form'),
};

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();
  localStorage.removeItem('feedback-form-state');
  console.log(formData);
  formData = {};
  refs.formElem.reset();
});

refs.formElem.addEventListener(
  'input',
  throttle(e => {
    const value = e.target.value;
    const key = e.target.name;

    formData[key] = value;
    saveToLS('feedback-form-state', formData);
  }, 500)
);

let formData = loadFormLS('feedback-form-state') || {};
refs.formElem.elements.email.value = formData?.email || '';
refs.formElem.elements.message.value = formData?.message || '';
