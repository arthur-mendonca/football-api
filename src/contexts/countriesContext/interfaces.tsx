export interface Country {
  name: string;
  code: string;
  flag: string;
}

export interface ICountryContext {
  countriesData: Country[];
  setCountriesData: React.Dispatch<React.SetStateAction<Country[]>>;
  getCountries: () => Promise<CountriesResponse | undefined>;
}

export interface ICountriesProvider {
  children: React.ReactNode;
}

export interface Paging {
  current: number;
  total: number;
}

export interface CountriesResponse {
  get: string;
  parameters: any[];
  errors: any[];
  results: number;
  paging: Paging;
  response: Country[];
}
