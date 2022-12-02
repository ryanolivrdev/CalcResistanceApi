import { numberBands } from './constants';
import { formatColorValue } from './formatColorValue';

export function findColorsByResistence(resistence: string) {
  try {
    if(resistence.charAt(0) !== "0"){
      
      const resistenceWithoutSpaces = resistence.replace(/\s/g, '');
      const value = [];
      let teste = resistenceWithoutSpaces.slice(2);
      
      value.push(numberBands.get(resistenceWithoutSpaces[0]));
      value.push(numberBands.get(resistenceWithoutSpaces[1]));
      value.push(numberBands.get(teste.length.toString()));
      
      const formart = formatColorValue(value as Array<string>);
      
      return formart;
    }else{
      return "Valor Invalido"
    }
      
    } catch (error) {
    return 'Ocorreu algum erro no servidor, tente novamente mais tarde';
  }
}
