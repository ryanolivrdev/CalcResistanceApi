import morgan from 'morgan';
import { RequestProps, ResponseProps, NextFunctionProps } from './http';

const morganConfig = {
  format:
    '"IP :remote-addr" - ":method :url" - "STATUS :status" - "REFERRER :referrer" - "RESPONSE TIME :response-time ms"',
  skip: {
    skip: () => process.env.NODE_ENV === 'test'
  }
};

export default function morganMiddleware(req: RequestProps, res: ResponseProps, next: NextFunctionProps): void {
  morgan(morganConfig.format, morganConfig.skip)(req, res, next);
}
