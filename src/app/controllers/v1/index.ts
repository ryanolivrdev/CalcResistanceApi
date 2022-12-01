import { appRoutes } from '@/config';
import resistorRouters from './resistor';

const v1Router = appRoutes.use('/resistor', resistorRouters);

export default v1Router;
