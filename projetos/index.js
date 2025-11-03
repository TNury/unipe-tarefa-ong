import { renderProjects } from './utils/renderProjects.js';
import { PROJECTS } from './constant.js';

function formatCurrencyInput(event) {
  const input = event.target;
  let value = input.value.replace(/\D/g, '');
  
  if (value === '') {
    input.value = '';
    return;
  }
  
  value = parseInt(value, 10) / 100;
  
  const formattedValue = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  });
  
  input.value = formattedValue;
}

document.addEventListener('DOMContentLoaded', () => {
  // Renderizar projetos dinamicamente
  renderProjects();

  const modal = document.getElementById('donation-modal');
  const modalClose = modal.querySelector('.modal-close');
  const modalCancel = modal.querySelector('.modal-cancel');
  const modalBackdrop = modal;
  const donationForm = document.getElementById('donation-form');
  const modalProjectDescription = document.getElementById('modal-project-description');
  const donationAmountInput = document.getElementById('donation-amount');

  function openModal(projectName) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    const project = PROJECTS.find(p => p.title === projectName);
    const description = project 
      ? project.description 
      : 'Ajude-nos a alcançar nossos objetivos fazendo uma doação.';
    
    modalProjectDescription.textContent = description;
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    donationForm.reset();
    if (donationAmountInput) {
      donationAmountInput.value = '';
    }
  }

  if (donationAmountInput) {
    donationAmountInput.addEventListener('input', formatCurrencyInput);
    donationAmountInput.addEventListener('blur', formatCurrencyInput);
    donationAmountInput.addEventListener('focus', (e) => {
      if (!e.target.value) {
        e.target.value = '';
      }
    });
  }

  // Usar event delegation para botões criados dinamicamente
  const projectsGrid = document.getElementById('projects-grid');
  if (projectsGrid) {
    projectsGrid.addEventListener('click', (e) => {
      if (e.target.classList.contains('donation-btn') || e.target.closest('.donation-btn')) {
        e.preventDefault();
        const button = e.target.classList.contains('donation-btn') 
          ? e.target 
          : e.target.closest('.donation-btn');
        const projectName = button.getAttribute('data-project');
        openModal(projectName);
      }
    });
  }

  modalClose.addEventListener('click', closeModal);
  modalCancel.addEventListener('click', closeModal);

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  const confirmationModal = document.getElementById('confirmation-modal');
  const confirmationMessage = document.getElementById('confirmation-message');
  const confirmDonationBtn = document.getElementById('confirm-donation-btn');
  const cancelConfirmationBtn = document.getElementById('cancel-confirmation-btn');

  function openConfirmationModal(amount, donorName) {
    const message = `Olá, ${donorName}! Sua doação de ${amount} será muito bem-vinda. Tem certeza que deseja confirmar?`;
    confirmationMessage.textContent = message;
    confirmationModal.classList.add('active');
  }

  function closeConfirmationModal() {
    confirmationModal.classList.remove('active');
  }

  donationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(donationForm);
    let amount = formData.get('donation-amount');
    const donorName = formData.get('donor-name');
    const donorEmail = formData.get('donor-email');

    if (amount) {
      amount = amount.replace(/[^\d,]/g, '').replace(',', '.');
      const numericAmount = parseFloat(amount);
      
      if (isNaN(numericAmount) || numericAmount <= 0) {
        alert('Por favor, insira um valor válido para a doação.');
        return;
      }
    }

    if (amount && donorName && donorEmail) {
      const formattedAmount = formData.get('donation-amount');
      openConfirmationModal(formattedAmount, donorName);
    }
  });

  confirmDonationBtn.addEventListener('click', () => {
    const formData = new FormData(donationForm);
    const amount = formData.get('donation-amount');
    const donorName = formData.get('donor-name');
    const donorEmail = formData.get('donor-email');
    
    showToast('Doação confirmada com sucesso! Obrigado pela sua generosidade. Entraremos em contato em breve.', 'success');
    closeConfirmationModal();
    closeModal();
  });

  cancelConfirmationBtn.addEventListener('click', closeConfirmationModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active') && !confirmationModal.classList.contains('active')) {
      closeModal();
    }
  });
});

