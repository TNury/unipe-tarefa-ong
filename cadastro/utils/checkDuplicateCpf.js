import { getRegisteredVolunteers } from '../../utils/getRegisteredVolunteers.js';
import { normalizeCpf } from './normalizeCpf.js';

export function checkDuplicateCpf(cpf) {
  const registeredVolunteers = getRegisteredVolunteers();
  const normalizedInputCpf = normalizeCpf(cpf);

  return registeredVolunteers.some((volunteer) => {
    const normalizedVolunteerCpf = normalizeCpf(volunteer.cpf);
    return normalizedVolunteerCpf === normalizedInputCpf;
  });
}

