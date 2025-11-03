import { DEFAULT_VOLUNTEERS } from '../constant.js';
import { getRegisteredVolunteers } from './localStorage.js';
import { renderVolunteerDetails } from './renderVolunteerDetails.js';

function createVolunteerCard(volunteer) {
  const volunteerCard = document.createElement('div');
  volunteerCard.className = 'volunteer-card';
  volunteerCard.style.cursor = 'pointer';

  const volunteerAvatar = document.createElement('div');
  volunteerAvatar.className = 'volunteer-avatar';

  const avatarImage = document.createElement('img');
  avatarImage.src = volunteer.avatar;
  avatarImage.alt = volunteer.name;
  avatarImage.className = 'volunteer-avatar-image';

  volunteerAvatar.appendChild(avatarImage);

  const volunteerName = document.createElement('h3');
  volunteerName.className = 'volunteer-name';
  volunteerName.textContent = volunteer.name;

  volunteerCard.appendChild(volunteerAvatar);
  volunteerCard.appendChild(volunteerName);

  volunteerCard.addEventListener('click', () => {
    renderVolunteerDetails(volunteer);
  });

  return volunteerCard;
}

export function renderVolunteers() {
  const volunteersGrid = document.getElementById('volunteers-grid');

  if (!volunteersGrid) {
    console.error('Volunteers grid container not found');
    return;
  }

  volunteersGrid.innerHTML = '';

  const registeredVolunteers = getRegisteredVolunteers();
  const allVolunteers = [...DEFAULT_VOLUNTEERS, ...registeredVolunteers];

  allVolunteers.forEach((volunteer) => {
    const volunteerCard = createVolunteerCard(volunteer);
    volunteersGrid.appendChild(volunteerCard);
  });
}

