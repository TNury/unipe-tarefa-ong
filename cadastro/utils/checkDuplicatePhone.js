import { getRegisteredVolunteers } from './localStorage.js';
import { normalizePhone } from './normalizePhone.js';

export function checkDuplicatePhone(phone) {
  const registeredVolunteers = getRegisteredVolunteers();
  const normalizedInputPhone = normalizePhone(phone);

  if (!normalizedInputPhone) {
    return false;
  }

  return registeredVolunteers.some((volunteer) => {
    const normalizedVolunteerPhone = normalizePhone(volunteer.phone);
    return normalizedVolunteerPhone && normalizedVolunteerPhone === normalizedInputPhone;
  });
}

