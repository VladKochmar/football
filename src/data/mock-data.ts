import { Fixtures } from '../app/models/fixtures.model';
import { LeagueStandings } from '../app/models/league-standings.model';
import { League } from '../app/models/league.model';
import { TopContributor } from '../app/models/top-contributor.model';

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

export const mockTopScorers: TopContributor[] = [
  {
    player: {
      id: 278,
      name: 'K. Mbappé',
      firstname: 'Kylian',
      lastname: 'Mbappé Lottin',
      age: 22,
      birth: {
        date: '1998-12-20',
        place: 'Paris',
        country: 'France',
      },
      nationality: 'France',
      height: '178 cm',
      weight: '73 kg',
      injured: false,
      photo: 'https://media.api-sports.io/football/players/278.png',
    },
    statistics: [
      {
        team: {
          id: 85,
          name: 'Paris Saint Germain',
          logo: 'https://media.api-sports.io/football/teams/85.png',
        },
        league: {
          id: 61,
          name: 'Ligue 1',
          country: 'France',
          logo: 'https://media.api-sports.io/football/leagues/61.png',
          flag: 'https://media.api-sports.io/flags/fr.svg',
          season: 2018,
        },
        games: {
          appearences: 29,
          lineups: 24,
          minutes: 2340,
          number: null,
          position: 'Attacker',
          rating: '7.871428',
          captain: false,
        },
        substitutes: {
          in: 5,
          out: 1,
          bench: 5,
        },
        shots: {
          total: 122,
          on: 68,
        },
        goals: {
          total: 33,
          conceded: null,
          assists: 7,
          saves: 0,
        },
        passes: {
          total: 591,
          key: 48,
          accuracy: 78,
        },
        tackles: {
          total: 4,
          blocks: 0,
          interceptions: 4,
        },
        duels: {
          total: 232,
          won: 112,
        },
        dribbles: {
          attempts: 115,
          success: 64,
          past: null,
        },
        fouls: {
          drawn: 39,
          committed: 19,
        },
        cards: {
          yellow: 5,
          yellowred: 0,
          red: 1,
        },
        penalty: {
          won: 3,
          commited: null,
          scored: 1,
          missed: 0,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 278,
      name: 'K. Mbappé',
      firstname: 'Kylian',
      lastname: 'Mbappé Lottin',
      age: 22,
      birth: {
        date: '1998-12-20',
        place: 'Paris',
        country: 'France',
      },
      nationality: 'France',
      height: '178 cm',
      weight: '73 kg',
      injured: false,
      photo: 'https://media.api-sports.io/football/players/278.png',
    },
    statistics: [
      {
        team: {
          id: 85,
          name: 'Paris Saint Germain',
          logo: 'https://media.api-sports.io/football/teams/85.png',
        },
        league: {
          id: 61,
          name: 'Ligue 1',
          country: 'France',
          logo: 'https://media.api-sports.io/football/leagues/61.png',
          flag: 'https://media.api-sports.io/flags/fr.svg',
          season: 2018,
        },
        games: {
          appearences: 29,
          lineups: 24,
          minutes: 2340,
          number: null,
          position: 'Attacker',
          rating: '7.871428',
          captain: false,
        },
        substitutes: {
          in: 5,
          out: 1,
          bench: 5,
        },
        shots: {
          total: 122,
          on: 68,
        },
        goals: {
          total: 33,
          conceded: null,
          assists: 7,
          saves: 0,
        },
        passes: {
          total: 591,
          key: 48,
          accuracy: 78,
        },
        tackles: {
          total: 4,
          blocks: 0,
          interceptions: 4,
        },
        duels: {
          total: 232,
          won: 112,
        },
        dribbles: {
          attempts: 115,
          success: 64,
          past: null,
        },
        fouls: {
          drawn: 39,
          committed: 19,
        },
        cards: {
          yellow: 5,
          yellowred: 0,
          red: 1,
        },
        penalty: {
          won: 3,
          commited: null,
          scored: 1,
          missed: 0,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 278,
      name: 'K. Mbappé',
      firstname: 'Kylian',
      lastname: 'Mbappé Lottin',
      age: 22,
      birth: {
        date: '1998-12-20',
        place: 'Paris',
        country: 'France',
      },
      nationality: 'France',
      height: '178 cm',
      weight: '73 kg',
      injured: false,
      photo: 'https://media.api-sports.io/football/players/278.png',
    },
    statistics: [
      {
        team: {
          id: 85,
          name: 'Paris Saint Germain',
          logo: 'https://media.api-sports.io/football/teams/85.png',
        },
        league: {
          id: 61,
          name: 'Ligue 1',
          country: 'France',
          logo: 'https://media.api-sports.io/football/leagues/61.png',
          flag: 'https://media.api-sports.io/flags/fr.svg',
          season: 2018,
        },
        games: {
          appearences: 29,
          lineups: 24,
          minutes: 2340,
          number: null,
          position: 'Attacker',
          rating: '7.871428',
          captain: false,
        },
        substitutes: {
          in: 5,
          out: 1,
          bench: 5,
        },
        shots: {
          total: 122,
          on: 68,
        },
        goals: {
          total: 33,
          conceded: null,
          assists: 7,
          saves: 0,
        },
        passes: {
          total: 591,
          key: 48,
          accuracy: 78,
        },
        tackles: {
          total: 4,
          blocks: 0,
          interceptions: 4,
        },
        duels: {
          total: 232,
          won: 112,
        },
        dribbles: {
          attempts: 115,
          success: 64,
          past: null,
        },
        fouls: {
          drawn: 39,
          committed: 19,
        },
        cards: {
          yellow: 5,
          yellowred: 0,
          red: 1,
        },
        penalty: {
          won: 3,
          commited: null,
          scored: 1,
          missed: 0,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 278,
      name: 'K. Mbappé',
      firstname: 'Kylian',
      lastname: 'Mbappé Lottin',
      age: 22,
      birth: {
        date: '1998-12-20',
        place: 'Paris',
        country: 'France',
      },
      nationality: 'France',
      height: '178 cm',
      weight: '73 kg',
      injured: false,
      photo: 'https://media.api-sports.io/football/players/278.png',
    },
    statistics: [
      {
        team: {
          id: 85,
          name: 'Paris Saint Germain',
          logo: 'https://media.api-sports.io/football/teams/85.png',
        },
        league: {
          id: 61,
          name: 'Ligue 1',
          country: 'France',
          logo: 'https://media.api-sports.io/football/leagues/61.png',
          flag: 'https://media.api-sports.io/flags/fr.svg',
          season: 2018,
        },
        games: {
          appearences: 29,
          lineups: 24,
          minutes: 2340,
          number: null,
          position: 'Attacker',
          rating: '7.871428',
          captain: false,
        },
        substitutes: {
          in: 5,
          out: 1,
          bench: 5,
        },
        shots: {
          total: 122,
          on: 68,
        },
        goals: {
          total: 33,
          conceded: null,
          assists: 7,
          saves: 0,
        },
        passes: {
          total: 591,
          key: 48,
          accuracy: 78,
        },
        tackles: {
          total: 4,
          blocks: 0,
          interceptions: 4,
        },
        duels: {
          total: 232,
          won: 112,
        },
        dribbles: {
          attempts: 115,
          success: 64,
          past: null,
        },
        fouls: {
          drawn: 39,
          committed: 19,
        },
        cards: {
          yellow: 5,
          yellowred: 0,
          red: 1,
        },
        penalty: {
          won: 3,
          commited: null,
          scored: 1,
          missed: 0,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 278,
      name: 'K. Mbappé',
      firstname: 'Kylian',
      lastname: 'Mbappé Lottin',
      age: 22,
      birth: {
        date: '1998-12-20',
        place: 'Paris',
        country: 'France',
      },
      nationality: 'France',
      height: '178 cm',
      weight: '73 kg',
      injured: false,
      photo: 'https://media.api-sports.io/football/players/278.png',
    },
    statistics: [
      {
        team: {
          id: 85,
          name: 'Paris Saint Germain',
          logo: 'https://media.api-sports.io/football/teams/85.png',
        },
        league: {
          id: 61,
          name: 'Ligue 1',
          country: 'France',
          logo: 'https://media.api-sports.io/football/leagues/61.png',
          flag: 'https://media.api-sports.io/flags/fr.svg',
          season: 2018,
        },
        games: {
          appearences: 29,
          lineups: 24,
          minutes: 2340,
          number: null,
          position: 'Attacker',
          rating: '7.871428',
          captain: false,
        },
        substitutes: {
          in: 5,
          out: 1,
          bench: 5,
        },
        shots: {
          total: 122,
          on: 68,
        },
        goals: {
          total: 33,
          conceded: null,
          assists: 7,
          saves: 0,
        },
        passes: {
          total: 591,
          key: 48,
          accuracy: 78,
        },
        tackles: {
          total: 4,
          blocks: 0,
          interceptions: 4,
        },
        duels: {
          total: 232,
          won: 112,
        },
        dribbles: {
          attempts: 115,
          success: 64,
          past: null,
        },
        fouls: {
          drawn: 39,
          committed: 19,
        },
        cards: {
          yellow: 5,
          yellowred: 0,
          red: 1,
        },
        penalty: {
          won: 3,
          commited: null,
          scored: 1,
          missed: 0,
          saved: null,
        },
      },
    ],
  },
];

export const mockStandings: { league: LeagueStandings }[] = [
  {
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media.api-sports.io/football/leagues/2.png',
      flag: 'https://media.api-sports.io/flags/gb.svg',
      season: 2019,
      standings: [
        [
          {
            rank: 1,
            team: {
              id: 40,
              name: 'Liverpool',
              logo: 'https://media.api-sports.io/football/teams/40.png',
            },
            points: 70,
            goalsDiff: 41,
            group: 'Premier League',
            form: 'WWWWW',
            status: 'same',
            description: 'Promotion - Champions League (Group Stage)',
            all: {
              played: 24,
              win: 23,
              draw: 1,
              lose: 0,
              goals: {
                for: 25,
                against: 6,
              },
            },
            home: {
              played: 12,
              win: 12,
              draw: 0,
              lose: 0,
              goals: {
                for: 25,
                against: 6,
              },
            },
            away: {
              played: 12,
              win: 11,
              draw: 1,
              lose: 0,
              goals: {
                for: 25,
                against: 6,
              },
            },
            update: '2020-01-29T00:00:00+00:00',
          },
        ],
      ],
    },
  },
];

export const mockFixture: Fixtures = {
  fixture: {
    id: 239625,
    referee: null,
    timezone: 'UTC',
    date: '2020-02-06T14:00:00+00:00',
    timestamp: 1580997600,
    periods: {
      first: 1580997600,
      second: null,
    },
    venue: {
      id: 1887,
      name: 'Stade Municipal',
      city: 'Oued Zem',
    },
    status: {
      long: 'Halftime',
      short: 'HT',
      elapsed: 45,
    },
  },
  league: {
    id: 200,
    name: 'Botola Pro',
    country: 'Morocco',
    logo: 'https://media.api-sports.io/football/leagues/115.png',
    flag: 'https://media.api-sports.io/flags/ma.svg',
    season: 2019,
    round: 'Regular Season - 14',
  },
  teams: {
    home: {
      id: 967,
      name: 'Rapide Oued ZEM',
      logo: 'https://media.api-sports.io/football/teams/967.png',
      winner: false,
    },
    away: {
      id: 968,
      name: 'Wydad AC',
      logo: 'https://media.api-sports.io/football/teams/968.png',
      winner: true,
    },
  },
  goals: {
    home: 0,
    away: 1,
  },
  score: {
    halftime: {
      home: 0,
      away: 1,
    },
    fulltime: {
      home: null,
      away: null,
    },
    extratime: {
      home: null,
      away: null,
    },
    penalty: {
      home: null,
      away: null,
    },
  },
};
