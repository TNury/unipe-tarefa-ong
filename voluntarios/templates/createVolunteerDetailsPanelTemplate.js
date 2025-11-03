import { formatDate } from '../utils/formatDate.js';

export function createVolunteerDetailsPanelTemplate(volunteer) {
  const detailsPanel = document.createElement('div');
  detailsPanel.className = 'volunteer-details-panel';

  // Botão voltar
  const backButton = document.createElement('button');
  backButton.className = 'btn btn-outline-dark volunteer-details-back';
  backButton.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    Voltar
  `;

  const detailsContent = document.createElement('div');
  detailsContent.className = 'volunteer-details-content';

  // Avatar
  const avatarSection = document.createElement('div');
  avatarSection.className = 'volunteer-details-avatar';
  const avatarImage = document.createElement('img');
  avatarImage.src = volunteer.avatar;
  avatarImage.alt = volunteer.name;
  avatarImage.className = 'volunteer-details-avatar-image';
  avatarSection.appendChild(avatarImage);

  // Nome
  const nameHeading = document.createElement('h2');
  nameHeading.className = 'heading-secondary text-primary volunteer-details-name';
  nameHeading.textContent = volunteer.name;

  // Lista de detalhes
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

  return detailsPanel;
}

