import { RequestProps, ResponseProps } from '@/config';
import { findResistanceByColor } from '@/helpers';
import { IResistor } from '@/interfaces';

export default function getResistanceByColorController(req: RequestProps, res: ResponseProps): ResponseProps {
  const { color1, color2, color3 }: IResistor = req.body as IResistor;

  if (!color1 || !color2 || !color3) return res.status(400).json({ erro: 'Envie todas cores' });

  if(color1.toLowerCase() === "preto") return res.status(400).json({ result: "Valor Inválido" });

  const result = findResistanceByColor({ color1, color2, color3 });

  if (result) {
    return res.json({ result });
  }

  return res.status(500).json({
    erro: 'Ocorreu algum erro no servidor, tente novamente mais tarde'
  });
}
