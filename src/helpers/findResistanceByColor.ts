import { IResistor } from '@/interfaces';
import { coresFaixas } from './constants';
import { formatResistorValue } from './formatResistorValue';

export function findResistanceByColor({ color1, color2, color3 }: IResistor) {
  let valor = '';
  valor += coresFaixas.get(color1.toLowerCase());
  valor += coresFaixas.get(color2.toLowerCase());
  const numero = coresFaixas.get(color3.toLowerCase());
  for (let i = 0; i < (numero === undefined ? 0 : numero); i += 1) {
    valor += 0;
  }

  const formart = formatResistorValue(valor);

  return formart;
}
