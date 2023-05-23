import { createContext, useState } from "react";
import { DataResponse, ILeaguesContext, ILeaguesProvider } from "./interfaces";
import { api } from "../../services/request";

export const LeaguesContext = createContext({} as ILeaguesContext);

export const LeaguesProvider = ({ children }: ILeaguesProvider) => {
  const [leaguesData, setLeaguesData] = useState<DataResponse | undefined>();

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
      setLeaguesData(response.data);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <LeaguesContext.Provider value={{ getLeagues, leaguesData }}>
      {children}
    </LeaguesContext.Provider>
  );
};
