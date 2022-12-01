import { RequestProps, ResponseProps } from '@/config';
import { findResistanceByColor } from '@/helpers';
import { IResistorColor } from '@/interfaces';

export default function getResistorColorController(req: RequestProps, res: ResponseProps): ResponseProps {
  const { numberOfTracks, color1, color2, color3, color4 }: IResistorColor = req.body as IResistorColor;

  if (!numberOfTracks) return res.status(400).json({ erro: 'Envie o número de faixas' });

  let result;

  switch (numberOfTracks) {
    case 3:
      if (!color1 || !color2 || !color3) {
        return res.status(400).json({ erro: 'Envie todas cores' });
      }
      result = findResistanceByColor({ color1, color2, color3 });

      return res.json({ result });
    case 4:
      if (!color1 || !color2 || !color3 || !color4) {
        return res.status(400).json({ erro: 'Envie todas cores' });
      }
      return res.json({ result });
    default:
      return res.status(500).json({
        erro: 'Ocorreu algum erro no servidor, tente novamente mais tarde'
      });
  }
}
