export interface IStatisticsContext {
  getStatistics: (
    teamId: string,
    seasonYear: string,
    leagueId: string
  ) => Promise<TeamStatisticsResponse | undefined>;
}

export interface IStatisticsProvider {
  children: React.ReactNode;
}

export interface TeamStatisticsResponse {
  get: string;
  parameters: {
    team: string;
    season: string;
    league: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: {
    league: {
      id: number;
      name: string;
      country: string;
      logo: string;
      flag: string;
      season: number;
    };
    team: {
      id: number;
      name: string;
      logo: string;
    };
    form: string;
    fixtures: {
      played: {
        home: number;
        away: number;
        total: number;
      };
      wins: {
        home: number;
        away: number;
        total: number;
      };
      draws: {
        home: number;
        away: number;
        total: number;
      };
      loses: {
        home: number;
        away: number;
        total: number;
      };
    };
    goals: {
      for: {
        total: {
          home: number;
          away: number;
          total: number;
        };
        average: {
          home: string;
          away: string;
          total: string;
        };
        minute: {
          [key: string]: {
            total: number | null;
            percentage: string | null;
          };
        };
      };
      against: {
        total: {
          home: number;
          away: number;
          total: number;
        };
        average: {
          home: string;
          away: string;
          total: string;
        };
        minute: {
          [key: string]: {
            total: number | null;
            percentage: string | null;
          };
        };
      };
    };
    biggest: {
      streak: {
        wins: number;
        draws: number;
        loses: number;
      };
      wins: {
        home: string;
        away: string | null;
      };
      loses: {
        home: string | null;
        away: string | null;
      };
      goals: {
        for: {
          home: number;
          away: number;
        };
        against: {
          home: number;
          away: number;
        };
      };
    };
    clean_sheet: {
      home: number;
      away: number;
      total: number;
    };
    failed_to_score: {
      home: number;
      away: number;
      total: number;
    };
    penalty: {
      scored: {
        total: number;
        percentage: string;
      };
      missed: {
        total: number;
        percentage: string;
      };
      total: number;
    };
    lineups: Array<{
      formation: string;
      played: number;
    }>;
    cards: {
      yellow: {
        [key: string]: {
          total: number | null;
          percentage: string | null;
        };
      };
      red: {
        [key: string]: {
          total: number | null;
          percentage: string | null;
        };
      };
    };
  };
}
