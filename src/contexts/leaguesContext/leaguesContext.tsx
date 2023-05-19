import { createContext, useState } from "react";
import { DataResponse, ILeaguesContext, ILeaguesProvider } from "./interfaces";
import { api } from "../../services/request";

export const LeaguesContext = createContext({} as ILeaguesContext);

export const LeaguesProvider = ({ children }: ILeaguesProvider) => {
  const getLeagues = async (
    countryCode: string
  ): Promise<DataResponse | undefined> => {
    try {
      const response = await api.get<DataResponse>(
        `/leagues?code=${countryCode}`,
        {
          headers: {
            "x-apisports-key": localStorage.getItem("@apiKey"),
          },
        }
      );
      localStorage.removeItem("@leagues");
      localStorage.setItem("@leagues", JSON.stringify(response.data));

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getCountryInfo = async (countryCode: string) => {
    try {
      const response = await api.get<DataResponse>(
        `/countries?code=${countryCode}`,
        {
          headers: {
            "x-apisports-key": localStorage.getItem("@apiKey"),
          },
        }
      );
      localStorage.removeItem("@countryInfo");
      localStorage.setItem("@countryInfo", JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <LeaguesContext.Provider value={{ getLeagues, getCountryInfo }}>
      {children}
    </LeaguesContext.Provider>
  );
};
