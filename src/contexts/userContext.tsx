import { createContext, useState } from "react";
import { api } from "../services/request";
import { useNavigate } from "react-router-dom";
import { IUserContext, IUserProvider } from "../interfaces/interfaces";

export const UserContext = createContext({} as IUserContext);

export const UserProvider: React.FC<IUserProvider> = ({ children }) => {
  const navigate = useNavigate();
  const [apiKey, setApiKey] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const loginUser = async (apiKey: string) => {
    try {
      const response = await api.post("/status", apiKey, {
        headers: {
          "x-apisports-key": apiKey,
        },
      });
      navigate("/");
      console.log(response);
      /* CONDIÇÃO DE ERRO */
      if (response.data.errors.length !== 0) {
        console.log("ERRO");
      } else {
        localStorage.removeItem("@apiKey");
        localStorage.setItem("@apiKey", apiKey);
        setLoggedIn(true);
        navigate("/selectcountry");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserContext.Provider value={{ apiKey, setApiKey, loginUser, loggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
