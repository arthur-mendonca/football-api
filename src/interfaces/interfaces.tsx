export interface IUserContext {
  loginUser: (apiKey: string) => Promise<void>;
  apiKey: string;
  setApiKey: React.Dispatch<React.SetStateAction<string>>;
  loggedIn: boolean;
}

export interface IUserProvider {
  children: React.ReactNode;
}
