export function handlePhoneInputOnChange(event) {
  const digitsOnly = event.target.value.replace(/\D/g, '');
  const digits = digitsOnly.slice(0, 11);

  let formattedPhone = '';
  if (digits.length <= 2) {
    formattedPhone = digits;
  } else if (digits.length <= 6) {
    formattedPhone = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  } else if (digits.length <= 10) {
    formattedPhone = `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  } else {
    formattedPhone = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  event.target.value = formattedPhone;
}

