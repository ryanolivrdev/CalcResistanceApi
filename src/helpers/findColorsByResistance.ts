import { numberBands } from './constants';
import { formatColorValue } from './formatColorValue';

export function findColorsByResistence(resistence: string) {
  try {
    const value = [];

    value.push(numberBands.get(resistence[0]));
    value.push(numberBands.get(resistence[1]));
    value.push(numberBands.get(resistence[2]));

    const formart = formatColorValue(value as Array<string>);

    return formart;
  } catch (error) {
    return 'Ocorreu algum erro no servidor, tente novamente mais tarde';
  }
}
