import { createContext, useState } from "react";
import { ITeamsContext, ITeamsProvider, TeamsDataResponse } from "./interfaces";
import { api } from "../../services/request";

export const TeamsContext = createContext({} as ITeamsContext);

export const TeamsProvider: React.FC<ITeamsProvider> = ({ children }) => {
  const [teamsData, setTeamsData] = useState<TeamsDataResponse | undefined>();

  const getTeams = async (
    leagueId: string,
    seasonYear: string
  ): Promise<TeamsDataResponse | undefined> => {
    try {
      const response = await api.get(
        `/teams?league=${leagueId}&season=${seasonYear}`,
        {
          headers: {
            "x-apisports-key": localStorage.getItem("@apiKey"),
          },
        }
      );
      setTeamsData(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TeamsContext.Provider value={{ getTeams, teamsData }}>
      {children}
    </TeamsContext.Provider>
  );
};
