export interface ISeasonsProvider {
  children: React.ReactNode;
}

export interface ISeasonsContext {
  getSeasons: (
    countryCode: string,
    leagueId: string
  ) => Promise<SeasonsResponse | undefined>;
}

export interface FixtureCoverage {
  events: boolean;
  lineups: boolean;
  statistics_fixtures: boolean;
  statistics_players: boolean;
}

export interface Coverage {
  fixtures: FixtureCoverage;
  standings: boolean;
  players: boolean;
  top_scorers: boolean;
  top_assists: boolean;
  top_cards: boolean;
  injuries: boolean;
  predictions: boolean;
  odds: boolean;
}

export interface Season {
  year: number;
  start: string;
  end: string;
  current: boolean;
  coverage: Coverage;
}

export interface League {
  id: number;
  name: string;
  type: string;
  logo: string;
}

export interface Country {
  name: string;
  code: string;
  flag: string;
}

export interface Response {
  league: League;
  country: Country;
  seasons: Season[];
}

export interface SeasonsResponse {
  get: string;
  parameters: {
    code?: string;
    id?: string;
  };
  errors?: unknown[];
  results?: number;
  paging?: {
    current?: number;
    total?: number;
  };
  response?: Response[];
}
