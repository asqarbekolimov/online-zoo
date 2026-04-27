export interface IPet {
  id: number;
  name: string;
  commonName: string;
  description: string;
}

export interface IFeedback {
  id: number;
  city: string;
  month: string;
  year: string;
  text: string;
  name: string;
}

export interface IAnimal {
  id: number;
  commonName: string;
  scientificName: string;
  type: string;
  size: string;
  diet: string;
  habitat: string;
  range: string;
  latitude: string;
  longitude: string;
  description: string;
  detailedDescription: string;
}
