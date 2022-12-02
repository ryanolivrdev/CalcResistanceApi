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

const appRoutes = express.Router();

export { app, appRoutes, RequestProps, ResponseProps, NextFunctionProps };
