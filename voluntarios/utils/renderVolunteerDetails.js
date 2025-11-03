import { renderVolunteers } from './renderVolunteers.js';

export function renderVolunteerDetails(volunteer) {
  const volunteersGrid = document.getElementById('volunteers-grid');

  if (!volunteersGrid) {
    console.error('Volunteers grid container not found');
    return;
  }

  volunteersGrid.innerHTML = '';

  const detailsPanel = document.createElement('div');
  detailsPanel.className = 'volunteer-details-panel';

  const backButton = document.createElement('button');
  backButton.className = 'btn btn-outline-dark volunteer-details-back';
  backButton.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    Voltar
  `;
  backButton.addEventListener('click', () => {
    renderVolunteers();
  });

  const detailsContent = document.createElement('div');
  detailsContent.className = 'volunteer-details-content';

  const avatarSection = document.createElement('div');
  avatarSection.className = 'volunteer-details-avatar';

  const avatarImage = document.createElement('img');
  avatarImage.src = volunteer.avatar;
  avatarImage.alt = volunteer.name;
  avatarImage.className = 'volunteer-details-avatar-image';

  avatarSection.appendChild(avatarImage);

  const nameHeading = document.createElement('h2');
  nameHeading.className = 'heading-secondary text-primary volunteer-details-name';
  nameHeading.textContent = volunteer.name;

  const detailsList = document.createElement('div');
  detailsList.className = 'volunteer-details-list';

  const fields = [
    { label: 'Email', value: volunteer.email, type: 'email' },
    { label: 'Telefone', value: volunteer.phone || 'Não informado', type: 'text' },
    { label: 'Membro desde', value: formatDate(volunteer.registeredAt), type: 'text' },
  ];

  fields.forEach((field) => {
    const detailItem = document.createElement('div');
    detailItem.className = 'volunteer-details-item';

    const label = document.createElement('span');
    label.className = 'volunteer-details-label';
    label.textContent = field.label + ':';

    const value = document.createElement('span');
    value.className = 'volunteer-details-value';
    if (field.type === 'email') {
      const emailLink = document.createElement('a');
      emailLink.href = `mailto:${field.value}`;
      emailLink.textContent = field.value;
      value.appendChild(emailLink);
    } else {
      value.textContent = field.value;
    }

    detailItem.appendChild(label);
    detailItem.appendChild(value);
    detailsList.appendChild(detailItem);
  });

  detailsContent.appendChild(avatarSection);
  detailsContent.appendChild(nameHeading);
  detailsContent.appendChild(detailsList);

  detailsPanel.appendChild(backButton);
  detailsPanel.appendChild(detailsContent);

  volunteersGrid.appendChild(detailsPanel);
}

function formatDate(dateString) {
  if (!dateString) return 'Não informado';

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;

  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

