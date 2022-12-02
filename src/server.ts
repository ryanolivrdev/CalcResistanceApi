import { env, logger } from '@/config';
import app from '@/app';
import { date } from './helpers';

app.listen(env.port, () => {
  logger.info(`Novo Serviço iniciado - ${date}`);
  logger.info(`Disponivel em ${env.port}`);
});
