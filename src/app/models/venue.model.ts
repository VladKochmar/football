export interface Venue {
  id: number;
  name: string;
  city: string;
}

export interface VenueInfo extends Venue {
  address: string;
  capacity: number;
  surface: string;
  image: string;
}
