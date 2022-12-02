import { RequestProps, ResponseProps } from '@/config';
import { findColorsByResistence } from '@/helpers';
import { IResistence } from '@/interfaces';

export default function getColorByResistanceController(req: RequestProps, res: ResponseProps): ResponseProps {
  const { resistence }: IResistence = req.body as IResistence;

  if (!resistence) return res.status(400).json({ erro: 'Envie o valor da resistencia' });

  if(resistence.charAt(0) === "0") return res.status(400).json({ result: "Valor Inválido" });

  const result = findColorsByResistence(resistence);

  if (result) {
    return res.json({ result });
  }

  return res.status(500).json({
    erro: 'Ocorreu algum erro no servidor, tente novamente mais tarde'
  });
}
