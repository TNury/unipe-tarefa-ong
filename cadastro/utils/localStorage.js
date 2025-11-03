const STORAGE_KEY = 'registered volunteers';

export function getRegisteredVolunteers() {
  const storedVolunteers = localStorage.getItem(STORAGE_KEY);
  if (!storedVolunteers) {
    return [];
  }

  try {
    return JSON.parse(storedVolunteers);
  } catch (error) {
    console.error('Error parsing registered volunteers from localStorage:', error);
    return [];
  }
}

export function saveRegisteredVolunteer(volunteerData) {
  const registeredVolunteers = getRegisteredVolunteers();
  const newVolunteer = {
    name: volunteerData.fullName,
    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(volunteerData.fullName)}&background=219d80&color=fff&size=128`,
    email: volunteerData.email,
    phone: volunteerData.phone,
    cpf: volunteerData.cpf,
    birthDate: volunteerData.birthDate,
    street: volunteerData.street,
    cep: volunteerData.cep,
    city: volunteerData.city,
    state: volunteerData.state,
    registeredAt: new Date().toISOString(),
  };

  registeredVolunteers.push(newVolunteer);

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(registeredVolunteers));
    return true;
  } catch (error) {
    console.error('Error saving registered volunteer to localStorage:', error);
    return false;
  }
}

