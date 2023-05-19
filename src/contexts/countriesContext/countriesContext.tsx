import { createContext, useState } from "react";
import {
  CountriesResponse,
  ICountriesProvider,
  ICountryContext,
} from "./interfaces";
import { api } from "../../services/request";

export const CountriesContext = createContext({} as ICountryContext);

export const CountriesProvider = ({ children }: ICountriesProvider) => {
  const [countriesData, setCountriesData] = useState<
    ICountryContext["countriesData"]
  >([]);

  const [country, setCountry] = useState("");

  const getCountries = async (): Promise<CountriesResponse | undefined> => {
    try {
      const response = await api.get<CountriesResponse>("/countries", {
        headers: {
          "x-apisports-key": localStorage.getItem("@apiKey"),
        },
      });

      setCountriesData(response.data.response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CountriesContext.Provider
      value={{
        countriesData,
        setCountriesData,
        getCountries,
        country,
        setCountry,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};
