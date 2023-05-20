import { createContext } from "react";
import {
  IStatisticsContext,
  IStatisticsProvider,
  TeamStatisticsResponse,
} from "./interfaces";
import { api } from "../../services/request";

export const StatisticsContext = createContext({} as IStatisticsContext);

export const StatisticsProvider: React.FC<IStatisticsProvider> = ({
  children,
}) => {
  const getStatistics = async (
    teamId: string,
    seasonYear: string,
    leagueId: string
  ): Promise<TeamStatisticsResponse | undefined> => {
    try {
      const response = await api.get(
        `/teams/statistics?team=${teamId}&season=${seasonYear}&league=${leagueId}`,
        {
          headers: {
            "x-apisports-key": localStorage.getItem("@apiKey"),
          },
        }
      );

      localStorage.setItem("@statistics", JSON.stringify(response.data));
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StatisticsContext.Provider value={{ getStatistics }}>
      {children}
    </StatisticsContext.Provider>
  );
};
