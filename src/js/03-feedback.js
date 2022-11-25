import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('[name="email"]');
const textareaEl = document.querySelector('[name="message"]');
console.log(textareaEl);

const STORAGE_DATA = 'feedback - form';
let formData = {};

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_DATA, JSON.stringify(formData));
}

const saveData = localStorage.getItem(STORAGE_DATA);
const parseData = JSON.parse(saveData);
if (saveData) {
  formData = parseData;
  emailEl.value = parseData.email || '';
  textareaEl.value = parseData.message || '';
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_DATA);
  console.log(formData);
}
