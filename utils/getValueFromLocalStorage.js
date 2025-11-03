export function getValueFromLocalStorage(storageKey) {
  const storedValue = localStorage.getItem(storageKey);
  
  if (!storedValue) {
    return null;
  }

  try {
    return JSON.parse(storedValue);
  } catch (error) {
    console.error('Error parsing value from localStorage:', error);
    return null;
  }
}