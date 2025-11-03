import { getMaximumBirthDate } from './utils/getMaximumBirthDate.js';
import { handlePhoneInputOnChange } from './handlers/handlePhoneInputOnChange.js';
import { handleCepInputOnChange } from './handlers/handleCepInputOnChange.js';
import { handleCpfInputOnChange } from './handlers/handleCpfInputOnChange.js';
import { handleFormSubmit } from './handlers/handleFormSubmit.js';
import { renderVolunteers } from './utils/renderVolunteers.js';

document.addEventListener('DOMContentLoaded', () => {
  renderVolunteers();
  const phoneInput = document.getElementById('phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', handlePhoneInputOnChange);
  } else {
    console.error('Phone input not found');
  }

  const birthDateInput = document.getElementById('birthDate');

  if (birthDateInput) {
    birthDateInput.max = getMaximumBirthDate();
    birthDateInput.value = getMaximumBirthDate();
  } else {
    console.error('Birth date input not found');
  }

  const cpfInput = document.getElementById('cpf');
  if (cpfInput) {
    cpfInput.addEventListener('input', handleCpfInputOnChange);
  } else {
    console.error('CPF input not found');
  }

  const cepInput = document.getElementById('cep');
  if (cepInput) {
    cepInput.addEventListener('input', handleCepInputOnChange);
  } else {
    console.error('CEP input not found');
  }

  const form = document.querySelector('.register--form');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }
});
