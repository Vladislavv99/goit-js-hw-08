const throttle = require('lodash.throttle');

function saveToLS(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

function loadFormLS(key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
}

const refs = {
  formElem: document.querySelector('.feedback-form'),
};

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();
  localStorage.removeItem('formData');
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
