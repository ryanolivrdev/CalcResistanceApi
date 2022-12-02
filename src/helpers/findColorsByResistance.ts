import { numberBands } from './constants';
import { formatColorValue } from './formatColorValue';

export function findColorsByResistence(resistence: string) {
  try {
    const resistenceWithoutSpaces = resistence.replace(/\s/g, '');
    const value = [];

    value.push(numberBands.get(resistenceWithoutSpaces[0]));
    value.push(numberBands.get(resistenceWithoutSpaces[1]));
    value.push(numberBands.get(resistenceWithoutSpaces[2]));

    const formart = formatColorValue(value as Array<string>);

    return formart;
  } catch (error) {
    return 'Ocorreu algum erro no servidor, tente novamente mais tarde';
  }
}
