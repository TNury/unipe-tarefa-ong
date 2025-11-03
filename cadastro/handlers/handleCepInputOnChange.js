export function handleCepInputOnChange(event) {
  const digitsOnly = event.target.value.replace(/\D/g, '');
  const digits = digitsOnly.slice(0, 8);

  let formattedCep = '';
  if (digits.length <= 5) {
    formattedCep = digits;
  } else {
    formattedCep = `${digits.slice(0, 5)}-${digits.slice(5)}`;
  }

  event.target.value = formattedCep;
}

