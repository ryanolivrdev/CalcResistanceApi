import { appRoutes } from '@/config';
import getColorByResistanceController from './get-color-by-resistance-controller';
import getResistanceByColorController from './get-resistance-by-color-controller';

const resistorRouters = appRoutes
  .post('/getResistence', getResistanceByColorController)
  .post('/getColor', getColorByResistanceController);

export default resistorRouters;
