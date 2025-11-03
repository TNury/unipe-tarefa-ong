export function handleCpfInputOnChange(event) {
  const digitsOnly = event.target.value.replace(/\D/g, '');
  const digits = digitsOnly.slice(0, 11);

  let formattedCpf = '';
  if (digits.length <= 3) {
    formattedCpf = digits;
  } else if (digits.length <= 6) {
    formattedCpf = `${digits.slice(0, 3)}.${digits.slice(3)}`;
  } else if (digits.length <= 9) {
    formattedCpf = `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  } else {
    formattedCpf = `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
  }

  event.target.value = formattedCpf;
}

