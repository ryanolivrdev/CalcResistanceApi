export function formatResistorValue(value: string) {
  const number = Number(value);
  let formatedValue = value;

  if (Number.isNaN(number)) {
    formatedValue = '--';
  } else if (number >= 1000000000) {
    formatedValue = `${number / 1000000000}G`;
  } else if (number >= 1000000) {
    formatedValue = `${number / 1000000}M`;
  } else if (number >= 1000) {
    formatedValue = `${number / 1000}k`;
  } else {
    formatedValue += ' ';
  }

  return formatedValue;
}
