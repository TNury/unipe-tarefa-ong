export function getMaximumBirthDate() {
  const today = new Date();
  const eighteenYearsAgo = new Date(today);
  eighteenYearsAgo.setFullYear(today.getFullYear() - 18);

  const defaultBirthDate = eighteenYearsAgo.toISOString().split('T')[0];

  return defaultBirthDate;
}

