import { getRegisteredVolunteers } from './localStorage.js';

export function checkDuplicateEmail(email) {
  const registeredVolunteers = getRegisteredVolunteers();
  const normalizedInputEmail = email.toLowerCase().trim();

  return registeredVolunteers.some((volunteer) => {
    const normalizedVolunteerEmail = volunteer.email.toLowerCase().trim();
    return normalizedVolunteerEmail === normalizedInputEmail;
  });
}

