export function createVolunteerCardTemplate(volunteer, index) {
  const card = document.createElement('button');

  if (index !== undefined) {
    card.tabIndex = index + 1;
  }

  card.className = 'volunteer-card';
  card.style.cursor = 'pointer';

  const avatarContainer = document.createElement('div');
  avatarContainer.className = 'volunteer-avatar';

  const avatarImage = document.createElement('img');
  avatarImage.src = volunteer.avatar;
  avatarImage.alt = volunteer.name;
  avatarImage.className = 'volunteer-avatar-image';

  avatarContainer.appendChild(avatarImage);

  const nameElement = document.createElement('h3');
  nameElement.className = 'volunteer-name';
  nameElement.textContent = volunteer.name;

  card.appendChild(avatarContainer);
  card.appendChild(nameElement);

  return card;
}
