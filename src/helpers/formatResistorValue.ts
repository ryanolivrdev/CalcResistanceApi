export function formatResistorValue(value: string) {
  const number = Number(value);
  let formatedValue = value;

  if (Number.isNaN(number)) {
    formatedValue = '--';
  } else if (number >= 1000000000) {
    formatedValue = `${number / 1000000000}G Ohms`;
  } else if (number >= 1000000) {
    formatedValue = `${number / 1000000}M Ohms`;
  } else if (number >= 1000) {
    formatedValue = `${number / 1000}K Ohms`;
  } else {
    formatedValue += ' Ohms';
  }

  return formatedValue;
}
