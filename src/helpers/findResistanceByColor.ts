import { IResistor } from '@/interfaces';
import { colorsBands } from './constants';
import { formatResistorValue } from './formatResistorValue';

export function findResistanceByColor({ color1, color2, color3 }: IResistor) {
  try {
    let value = '';

    value += colorsBands.get(color1.toLowerCase());
    value += colorsBands.get(color2.toLowerCase());

    const number = colorsBands.get(color3.toLowerCase());

    for (let i = 0; i < (number === undefined ? 0 : number); i += 1) {
      value += 0;
    }

    const formart = formatResistorValue(value);

    return formart;
  } catch (error) {
    return 'Ocorreu algum erro no servidor, tente novamente mais tarde';
  }
}
