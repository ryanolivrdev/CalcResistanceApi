export function formatColorValue(value: Array<string>) {
  const capitalizeFirstLetter = value.map((text: string) => text.charAt(0).toUpperCase() + text.slice(1));

  const changingToString = capitalizeFirstLetter.toString();

  const formatedValue = changingToString.replace(/[, ]+/g, ' - ').trim();

  return formatedValue;
}
