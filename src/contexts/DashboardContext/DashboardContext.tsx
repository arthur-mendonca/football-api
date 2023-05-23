import { createContext, useState } from "react";
import {
  IDashboardContext,
  IDashboardProvider,
  StatusDataResponse,
} from "./interface";
import { api } from "../../services/request";

export const DashboardContext = createContext({} as IDashboardContext);

export const DashboardProvider: React.FC<IDashboardProvider> = ({
  children,
}) => {
  const [statusData, setStatusData] = useState<
    StatusDataResponse | undefined
  >();

  const getStatus = async (): Promise<StatusDataResponse | undefined> => {
    const response = await api.get("/status", {
      headers: {
        "x-apisports-key": localStorage.getItem("@apiKey"),
      },
    });
    setStatusData(response.data);
    return response.data;
  };

  return (
    <DashboardContext.Provider value={{ statusData, getStatus }}>
      {children}
    </DashboardContext.Provider>
  );
};
