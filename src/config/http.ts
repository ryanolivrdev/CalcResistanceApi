import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import { corsOptions } from './cors';

type RequestProps = Request;
type ResponseProps = Response;
type NextFunctionProps = NextFunction;

const app = express();

app.use(helmet());
app.use(compression({ level: 9 }));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use((err: Error, _req: RequestProps, res: ResponseProps, _next: NextFunctionProps) => {
//   if (err instanceof Error) {
//     return res.status(400).json({
//       message: err.message
//     });
//   }
//   return res.status(500).json({
//     status: 'error',
//     message: `Internal server error`
//   });
// });

const appRoutes = express.Router();

export { app, appRoutes, RequestProps, ResponseProps, NextFunctionProps };
