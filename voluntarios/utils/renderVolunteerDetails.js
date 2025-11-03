import { renderVolunteers } from './renderVolunteers.js';
import { createVolunteerDetailsPanelTemplate } from '../templates/createVolunteerDetailsPanelTemplate.js';

export function renderVolunteerDetails(volunteer) {
  const volunteersGrid = document.getElementById('volunteers-grid');

  if (!volunteersGrid) {
    console.error('Volunteers grid container not found');
    return;
  }

  volunteersGrid.innerHTML = '';

  const detailsPanel = createVolunteerDetailsPanelTemplate(volunteer);

  const backButton = detailsPanel.querySelector('.volunteer-details-back');
  backButton.addEventListener('click', () => {
    renderVolunteers();
  });

  volunteersGrid.appendChild(detailsPanel);
}
