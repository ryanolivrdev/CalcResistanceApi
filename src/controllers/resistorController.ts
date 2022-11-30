import { Request, Response } from "express";

export const resistorBycolor = (req: Request, res: Response) => {
  const { color1, color2, color3 } = req.body;

  if (!color1 || !color2 || !color3)
    return res.status(400).json({ erro: "Envie todas as cores do resistor" });

  return res.json({ teste: "teste" });
};
