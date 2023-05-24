import "./style.css";
import { useContext, useEffect } from "react";
import { DashboardContext } from "../../contexts/DashboardContext/DashboardContext";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { getStatus, statusData } = useContext(DashboardContext);
  const navigate = useNavigate();

  useEffect(() => {
    getStatus();
  });

  const handleClick = () => {
    localStorage.removeItem("@apiKey");
    navigate("/");
  };

  if (
    !statusData?.response.account.firstname ||
    !statusData.response.account.firstname
  ) {
    return (
      <header className="header-container">
        <p>Usuário</p>
        <button type="button" onClick={handleClick}>
          Logout
        </button>
      </header>
    );
  }

  return (
    <header className="header-container">
      <p>
        {statusData?.response.account.firstname}{" "}
        {statusData?.response.account.lastname}
      </p>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </header>
  );
};
