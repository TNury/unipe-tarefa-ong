import { DEFAULT_VOLUNTEERS } from '../constant.js';
import { renderVolunteerDetails } from './renderVolunteerDetails.js';
import { getRegisteredVolunteers } from '../../utils/getRegisteredVolunteers.js';
import { createVolunteerCardTemplate } from '../templates/createVolunteerCardTemplate.js';

export function renderVolunteers() {
  const volunteersGrid = document.getElementById('volunteers-grid');

  if (!volunteersGrid) {
    console.error('Volunteers grid container not found');
    return;
  }

  volunteersGrid.innerHTML = '';

  const registeredVolunteers = getRegisteredVolunteers();

  const allVolunteers = [...DEFAULT_VOLUNTEERS, ...registeredVolunteers];

  allVolunteers.forEach((volunteer, index) => {
    const volunteerCard = createVolunteerCardTemplate(volunteer, index);
    volunteerCard.addEventListener('click', () => {
      renderVolunteerDetails(volunteer);
    });
    volunteersGrid.appendChild(volunteerCard);
  });
}
