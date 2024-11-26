'use strict';
const formData = { email: '', message: '' };
const STORAGE_KEY = 'feedback-form-state';

function setupFormFields(form) {
  const stringData = localStorage.getItem(STORAGE_KEY);
  try {
    const parsedData = JSON.parse(stringData);
    Object.assign(formData, parsedData);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  } catch {}
}

function handleFormChanges(evt) {
  const target = evt.target;
  if (target.name !== 'email' && target.name !== 'message') return;
  formData[target.name] = target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function handleFormSubmittion(evt) {
  const formElements = evt.target.elements;

  evt.preventDefault();
  if (formData.email === '' || formData.message === '') {
    window.alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  [
    formData.email,
    formData.message,
    formElements.email.value,
    formElements.message.value,
  ] = ['', '', '', ''];
}

function setupFormEvents() {
  const form = document.querySelector('.feedback-form');

  setupFormFields(form);
  form.addEventListener('input', handleFormChanges);
  form.addEventListener('submit', handleFormSubmittion);
}

setupFormEvents();
