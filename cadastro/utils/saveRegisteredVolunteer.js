import { VOLUNTEERS_STORAGE_KEY } from '../../constant.js';
import { getRegisteredVolunteers } from '../../utils/getRegisteredVolunteers.js';

export function saveRegisteredVolunteer(volunteerData) {
  const registeredVolunteers = getRegisteredVolunteers();
  const newVolunteer = {
    name: volunteerData.fullName,
    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
      volunteerData.fullName
    )}&background=219d80&color=fff&size=128`,
    email: volunteerData.email,
    phone: volunteerData.phone,
    cpf: volunteerData.cpf,
    birthDate: volunteerData.birthDate,
    street: volunteerData.street,
    cep: volunteerData.cep,
    city: volunteerData.city,
    state: volunteerData.state,
    registeredAt: new Date().toISOString()
  };

  registeredVolunteers.push(newVolunteer);

  try {
    localStorage.setItem(VOLUNTEERS_STORAGE_KEY, JSON.stringify(registeredVolunteers));
    return true;
  } catch (error) {
    console.error('Error saving registered volunteer to localStorage:', error);
    return false;
  }
}
