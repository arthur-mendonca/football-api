export interface ISelectedTeamContext {
  getSelectedTeam: (
    teamId: string
  ) => Promise<SelectedTeamResponse | undefined>;
}

export interface ISelectedTeamProvider {
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

export interface SelectedTeamResponse {
  get: string;
  parameters: {
    id: string;
  };
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: Response[];
}
