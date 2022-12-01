import { appRoutes } from '@/config';
import getResistorColorController from './get-resistor-color-controller';

const resistorRouters = appRoutes.post('/Color', getResistorColorController);

export default resistorRouters;
