import { createContext } from "react";
import {
  ISeasonsContext,
  ISeasonsProvider,
  SeasonsResponse,
} from "./interfaces";
import { api } from "../../services/request";

export const SeasonsContext = createContext({} as ISeasonsContext);

export const SeasonsProvider: React.FC<ISeasonsProvider> = ({ children }) => {
  const getSeasons = async (
    countryCode: string,
    leagueId: string
  ): Promise<SeasonsResponse | undefined> => {
    try {
      const response = await api.get(
        `/leagues?code=${countryCode}&id=${leagueId}`,
        {
          headers: {
            "x-apisports-key": localStorage.getItem("@apiKey"),
          },
        }
      );
      console.log(response);
      localStorage.setItem("@seasonsData", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SeasonsContext.Provider value={{ getSeasons }}>
      {children}
    </SeasonsContext.Provider>
  );
};
