import { createContext, useState } from "react";
import {
  IPlayersContext,
  IPlayersProvider,
  ResponsePlayersData,
} from "./interfaces";
import { api } from "../../services/request";

export const PlayersContext = createContext({} as IPlayersContext);

export const PlayersProvider: React.FC<IPlayersProvider> = ({ children }) => {
  const [playersData, setPlayersData] = useState<
    ResponsePlayersData | undefined
  >();

  const getPlayers = async (
    teamId: string,
    seasonYear: string
  ): Promise<ResponsePlayersData> => {
    const response = await api.get(
      `/players?team=${teamId}&season=${seasonYear}`,
      {
        headers: {
          "x-apisports-key": localStorage.getItem("@apiKey"),
        },
      }
    );
    setPlayersData(response.data);
    return response.data;
  };
  return (
    <PlayersContext.Provider value={{ getPlayers, playersData }}>
      {children}
    </PlayersContext.Provider>
  );
};
