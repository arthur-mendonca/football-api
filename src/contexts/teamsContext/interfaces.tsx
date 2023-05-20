export interface ITeamsContext {
  getTeams: (
    leagueId: string,
    seasonYear: string
  ) => Promise<TeamsDataResponse | undefined>;
}

export interface ITeamsProvider {
  children: React.ReactNode;
}

export interface Team {
  id: number;
  name: string;
  code: string;
  country: string;
  founded: number;
  national: boolean;
  logo: string;
}

export interface Venue {
  id: number;
  name: string;
  address: string;
  city: string;
  capacity: number;
  surface: string;
  image: string;
}

export interface Response {
  team: Team;
  venue: Venue;
}

export interface TeamsDataResponse {
  get: string;
  parameters: {
    league: string;
    season: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: Response[];
}
