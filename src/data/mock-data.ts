import { League } from '../app/models/league.model';

export const mockLeagues: League[] = [
  {
    league: {
      id: 39,
      name: 'Premier League',
      type: 'League',
      logo: 'https://media.api-sports.io/football/leagues/2.png',
    },
    country: {
      name: 'England',
      code: 'GB',
      flag: 'https://media.api-sports.io/flags/gb.svg',
    },
    seasons: [
      {
        year: 2010,
        start: '2010-08-14',
        end: '2011-05-17',
        current: false,
        coverage: {
          fixtures: {
            events: true,
            lineups: true,
            statistics_fixtures: false,
            statistics_players: false,
          },
          standings: true,
          players: true,
          top_scorers: true,
          top_assists: true,
          top_cards: true,
          injuries: true,
          predictions: true,
          odds: false,
        },
      },
    ],
  },
];
