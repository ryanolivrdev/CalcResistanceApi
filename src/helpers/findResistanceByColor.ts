import { IResistor } from '@/interfaces';
import { colorsBands } from './constants';
import { formatResistorValue } from './formatResistorValue';

export function findResistanceByColor({ color1, color2, color3 }: IResistor) {
  try {
    const color1WithoutSpaces = color1.replace(/\s/g, '');
    const color2WithoutSpaces = color2.replace(/\s/g, '');
    const color3WithoutSpaces = color3.replace(/\s/g, '');

    let value = '';

    value += colorsBands.get(color1WithoutSpaces.toLowerCase());
    value += colorsBands.get(color2WithoutSpaces.toLowerCase());

    const number = colorsBands.get(color3WithoutSpaces.toLowerCase());

    for (let i = 0; i < (number === undefined ? 0 : number); i += 1) {
      value += 0;
    }

    const formart = formatResistorValue(value);

    return formart;
  } catch (error) {
    return 'Ocorreu algum erro no servidor, tente novamente mais tarde';
  }
}
