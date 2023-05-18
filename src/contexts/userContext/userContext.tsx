import { createContext, useState } from "react";
import { api } from "../../services/request";
import { useNavigate } from "react-router-dom";
import { IUserContext, IUserProvider } from "./interfaces";
import { toast } from "react-toastify";

export const UserContext = createContext({} as IUserContext);

export const UserProvider: React.FC<IUserProvider> = ({ children }) => {
  const navigate = useNavigate();
  const [apiKey, setApiKey] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const loginUser = async (apiKey: string): Promise<void> => {
    try {
      const response = await api.get("/status", {
        headers: {
          "x-apisports-key": apiKey,
        },
      });
      console.log(response);
      /* CONDIÇÃO DE ERRO */
      if (response.data.errors.length !== 0) {
        console.log("ERRO");
        toast.error("API-Key inválida.");
      } else {
        localStorage.removeItem("@apiKey");
        localStorage.setItem("@apiKey", apiKey);
        setLoggedIn(true);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserContext.Provider
      value={{ apiKey, setApiKey, loginUser, loggedIn, setLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};
