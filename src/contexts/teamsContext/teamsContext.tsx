import { createContext } from "react";
import { ITeamsContext, ITeamsProvider, TeamsDataResponse } from "./interfaces";
import { api } from "../../services/request";

export const TeamsContext = createContext({} as ITeamsContext);

export const TeamsProvider: React.FC<ITeamsProvider> = ({ children }) => {
  const getTeams = async (
    leagueId: string,
    seasonYear: string
  ): Promise<TeamsDataResponse | undefined> => {
    // https://v3.football.api-sports.io/teams?league=39&season=2021
    try {
      const response = await api.get(
        `/teams?league=${leagueId}&season=${seasonYear}`,
        {
          headers: {
            "x-apisports-key": localStorage.getItem("@apiKey"),
          },
        }
      );
      localStorage.setItem("@teamsData", JSON.stringify(response.data));
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TeamsContext.Provider value={{ getTeams }}>
      {children}
    </TeamsContext.Provider>
  );
};
