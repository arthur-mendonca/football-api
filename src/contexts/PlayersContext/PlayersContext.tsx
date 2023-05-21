import { createContext } from "react";
import {
  IPlayersContext,
  IPlayersProvider,
  ResponsePlayersData,
} from "./interfaces";
import { api } from "../../services/request";

export const PlayersContext = createContext({} as IPlayersContext);

export const PlayersProvider: React.FC<IPlayersProvider> = ({ children }) => {
  const getPlayers = async (
    teamId: string,
    seasonYear: string
  ): Promise<ResponsePlayersData> => {
    // https://v3.football.api-sports.io/players?team=40&season=2021
    const response = await api.get(
      `/players?team=${teamId}&season=${seasonYear}`,
      {
        headers: {
          "x-apisports-key": localStorage.getItem("@apiKey"),
        },
      }
    );
    if (localStorage.getItem("@playersData") !== null) {
      localStorage.remove("@playersData");
    }
    localStorage.setItem("@playersData", JSON.stringify(response.data));
    return response.data;
  };
  return (
    <PlayersContext.Provider value={{ getPlayers }}>
      {children}
    </PlayersContext.Provider>
  );
};
