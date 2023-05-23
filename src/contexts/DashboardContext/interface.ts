export interface IDashboardContext {
  statusData: StatusDataResponse | undefined;
  getStatus: () => Promise<StatusDataResponse | undefined>;
}

export interface IDashboardProvider {
  children: React.ReactNode;
}

export interface Paging {
  current: number;
  total: number;
}

export interface Account {
  firstname: string;
  lastname: string;
  email: string;
}

export interface Subscription {
  plan: string;
  end: string;
  active: boolean;
}

export interface Requests {
  current: number;
  limit_day: number;
}

export interface Response {
  account: Account;
  subscription: Subscription;
  requests: Requests;
}

export interface StatusDataResponse {
  get: string;
  parameters: unknown[];
  errors: unknown[];
  results: number;
  paging: Paging;
  response: Response;
}
