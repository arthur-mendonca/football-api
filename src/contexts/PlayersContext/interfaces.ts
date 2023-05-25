export interface IPlayersContext {
  getPlayers: (
    teamId: string,
    seasonYear: string
  ) => Promise<ResponsePlayersData | undefined>;
  playersData: ResponsePlayersData | undefined;
}

export interface IPlayersProvider {
  children: React.ReactNode;
}

export interface Player {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  birth: {
    date: string;
    place: string;
    country: string;
  };
  nationality: string;
  height: string;
  weight: string;
  injured: boolean;
  photo: string;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag?: string | null;
  season: number;
}

export interface Games {
  appearences: number;
  lineups: number;
  minutes: number;
  number?: null | number | string;
  position?: string | null;
  rating?: string | null;
  captain?: boolean | null;
}

export interface Substitutes {
  in?: number | null;
  out?: number | null;
  bench?: number | null;
}

export interface Shots {
  total?: number | null;
  on?: number | null;
}

export interface Goals {
  total?: number | null;
  conceded?: number | null;
  assists?: number | null;
  saves?: number | null;
}

export interface Passes {
  total?: number | null;
  key?: number | null;
  accuracy?: number | null;
}

export interface Tackles {
  total?: number | null;
  blocks?: number | null;
  interceptions?: number | null;
}

export interface Duels {
  total?: number | null;
  won?: number | null;
}

export interface Dribbles {
  attempts?: number | null;
  success?: number | null;
  past?: number | null;
}

export interface Fouls {
  drawn?: number | null;
  committed?: number | null;
}

export interface Cards {
  yellow?: number | null;
  yellowred?: number | null;
  red?: number | null;
}

export interface Penalty {
  won?: number | null;
  commited?: number | null;
  scored?: number | null;
  missed?: number | null;
  saved?: number | null;
}

export interface Statistics {
  team: Team;
  league: League;
  games: Games;
  substitutes: Substitutes;
  shots: Shots;
  goals: Goals;
  passes: Passes;
  tackles: Tackles;
  duels: Duels;
  dribbles: Dribbles;
  fouls: Fouls;
  cards: Cards;
  penalty: Penalty;
}

export interface ResponseItem {
  player: Player;
  statistics: Statistics[];
}

export interface ResponsePlayersData {
  get: string;
  parameters: {
    team: string;
    season: string;
  };
  errors: string[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: ResponseItem[];
}
