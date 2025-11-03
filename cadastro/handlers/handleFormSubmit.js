import { getMaximumBirthDate } from '../utils/getMaximumBirthDate.js';

export function handleFormSubmit(event) {
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

