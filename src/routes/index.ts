import { Router } from "express";
import { resistorBycolor } from "../controllers/resistorController";

export const apiRouter = Router();

apiRouter.post('/Color', resistorBycolor);
