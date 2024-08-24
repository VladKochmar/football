export interface Human {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  birth: Birth;
  nationality: string;
  height: string;
  weight: string;
  photo: string;
  injured?: boolean;
}

interface Birth {
  date: string;
  place: string;
  country: string;
}
