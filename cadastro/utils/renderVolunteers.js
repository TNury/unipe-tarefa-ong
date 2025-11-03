import { DEFAULT_VOLUNTEERS } from '../constant.js';

export function renderVolunteers() {
  const volunteersGrid = document.getElementById('volunteers-grid');

  if (!volunteersGrid) {
    console.error('Volunteers grid container not found');
    return;
  }

  volunteersGrid.innerHTML = '';

  DEFAULT_VOLUNTEERS.forEach((volunteer) => {
    const volunteerCard = document.createElement('div');
    volunteerCard.className = 'volunteer-card';

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

    volunteersGrid.appendChild(volunteerCard);
  });
}

