import app from '@/app';
import { env, logger } from '@/config';
import { date } from './helpers/date';

import './config/module-alias';

app.listen(env.port, () => {
  logger.info(`Novo Serviço iniciado - ${date}`);
  logger.info(`Disponivel em http://localhost:${env.port}`);
});
