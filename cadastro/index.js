function getMaximumBirthDate() {
  const today = new Date();
  const eighteenYearsAgo = new Date(today);
  eighteenYearsAgo.setFullYear(today.getFullYear() - 18);

  const defaultBirthDate = eighteenYearsAgo.toISOString().split('T')[0];

  return defaultBirthDate;
}

function handlePhoneInputOnChange(event) {
  const digitsOnly = event.target.value.replace(/\D/g, '');
  const digits = digitsOnly.slice(0, 11);

  let formattedPhone = '';
  if (digits.length <= 2) {
    formattedPhone = digits;
  } else if (digits.length <= 6) {
    formattedPhone = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  } else if (digits.length <= 10) {
    formattedPhone = `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  } else {
    formattedPhone = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  event.target.value = formattedPhone;
}

function handleCepInputOnChange(event) {
  const digitsOnly = event.target.value.replace(/\D/g, '');
  const digits = digitsOnly.slice(0, 8);

  let formattedCep = '';
  if (digits.length <= 5) {
    formattedCep = digits;
  } else {
    formattedCep = `${digits.slice(0, 5)}-${digits.slice(5)}`;
  }

  event.target.value = formattedCep;
}

function handleCpfInputOnChange(event) {
  const digitsOnly = event.target.value.replace(/\D/g, '');
  const digits = digitsOnly.slice(0, 11);

  let formattedCpf = '';
  if (digits.length <= 3) {
    formattedCpf = digits;
  } else if (digits.length <= 6) {
    formattedCpf = `${digits.slice(0, 3)}.${digits.slice(3)}`;
  } else if (digits.length <= 9) {
    formattedCpf = `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  } else {
    formattedCpf = `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
  }

  event.target.value = formattedCpf;
}

document.addEventListener('DOMContentLoaded', () => {
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

function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const stateField = formData.get('state');

  if (stateField !== 'PB') {
    showToast('Desculpe, mas nosso serviço está disponível apenas para o estado da Paraíba.', 'error');
    return;
  }

  showToast('Cadastro realizado com sucesso! Entraremos em contato em breve.', 'success');
  form.reset();
  const birthDateInput = document.getElementById('birthDate');
  if (birthDateInput) {
    birthDateInput.value = getMaximumBirthDate();
  }
}
