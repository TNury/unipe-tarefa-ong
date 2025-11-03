import { VOLUNTEERS_STORAGE_KEY } from '../constant.js';
import { getValueFromLocalStorage } from './getValueFromLocalStorage.js';

export function getRegisteredVolunteers() {
  const registeredVolunteers = getValueFromLocalStorage(VOLUNTEERS_STORAGE_KEY) || [];
  return registeredVolunteers;
}
