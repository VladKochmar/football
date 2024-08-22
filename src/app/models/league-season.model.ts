import { Coverage } from './coverage.model';

export interface LeagueSeason {
  year: number;
  start: string;
  end: string;
  current: boolean;
  coverage: Coverage;
}
