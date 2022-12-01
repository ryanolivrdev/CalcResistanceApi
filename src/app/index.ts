import { app, morganMiddleware } from '@/config';
import v1Router from './controllers/v1';

app.use(morganMiddleware);
app.use('/v1', v1Router);

export default app;
