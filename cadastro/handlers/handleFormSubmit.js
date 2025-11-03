import { getMaximumBirthDate } from '../utils/getMaximumBirthDate.js';
import { saveRegisteredVolunteer } from '../utils/localStorage.js';
import { checkDuplicateCpf } from '../utils/checkDuplicateCpf.js';
import { checkDuplicateEmail } from '../utils/checkDuplicateEmail.js';
import { checkDuplicatePhone } from '../utils/checkDuplicatePhone.js';
import { renderVolunteers } from '../utils/renderVolunteers.js';

export function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const stateField = formData.get('state');

  if (
    stateField.toLowerCase() !== 'são paulo' &&
    stateField.toLowerCase() !== 'sp' &&
    stateField.toLowerCase() !== 'sao paulo'
  ) {
    showToast('Desculpe, mas nosso serviço está disponível apenas para o estado de São Paulo.', 'error');
    return;
  }

  const volunteerData = {
    fullName: formData.get('fullName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    cpf: formData.get('cpf'),
    birthDate: formData.get('birthDate'),
    street: formData.get('street'),
    cep: formData.get('cep'),
    city: formData.get('city'),
    state: formData.get('state')
  };

  if (checkDuplicateCpf(volunteerData.cpf)) {
    showToast('Este CPF já está cadastrado. Por favor, use outro CPF.', 'error');
    return;
  }

  if (checkDuplicateEmail(volunteerData.email)) {
    showToast('Este email já está cadastrado. Por favor, use outro email.', 'error');
    return;
  }

  if (checkDuplicatePhone(volunteerData.phone)) {
    showToast('Este telefone já está cadastrado. Por favor, use outro telefone.', 'error');
    return;
  }

  const saved = saveRegisteredVolunteer(volunteerData);

  if (saved) {
    showToast('Cadastro realizado com sucesso! Entraremos em contato em breve.', 'success');
    renderVolunteers();
    form.reset();
    const birthDateInput = document.getElementById('birthDate');
    if (birthDateInput) {
      birthDateInput.value = getMaximumBirthDate();
    }
  } else {
    showToast('Erro ao salvar o cadastro. Tente novamente.', 'error');
  }
}
