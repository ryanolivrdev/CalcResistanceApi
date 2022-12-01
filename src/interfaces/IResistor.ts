export interface IResistor {
  color1: string;
  color2: string;
  color3: string;
  color4?: string;
}

export interface IResistorColor extends IResistor {
  numberOfTracks: number;
}
