import { createContext, useState } from "react";
import {
  ISelectedTeamContext,
  ISelectedTeamProvider,
  SelectedTeamResponse,
} from "./interfaces";
import { api } from "../../services/request";

export const SelectedTeamContext = createContext({} as ISelectedTeamContext);

export const SelectedTeamProvider: React.FC<ISelectedTeamProvider> = ({
  children,
}) => {
  const [selectedTeam, setSelectedTeam] = useState<
    SelectedTeamResponse | undefined
  >();

  const getSelectedTeam = async (
    teamId: string
  ): Promise<SelectedTeamResponse | undefined> => {
    try {
      const response = await api(`/teams?id=${teamId}`, {
        headers: {
          "x-apisports-key": localStorage.getItem("@apiKey"),
        },
      });

      setSelectedTeam(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SelectedTeamContext.Provider value={{ getSelectedTeam, selectedTeam }}>
      {children}
    </SelectedTeamContext.Provider>
  );
};
