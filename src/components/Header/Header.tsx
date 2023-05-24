import "./style.css";
import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../../contexts/DashboardContext/DashboardContext";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { getStatus, statusData } = useContext(DashboardContext);
  const [first, setfirst] = useState("");
  const [last, setlast] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getStatus();

    if (statusData?.response.account.firstname)
      setfirst(statusData.response.account.firstname);
    if (statusData?.response.account.lastname)
      setlast(statusData.response.account.lastname);
  });

  const handleClick = () => {
    localStorage.removeItem("@apiKey");
    navigate("/");
  };

  return (
    <header className="header-container">
      <p>{`${first} ${" "} ${last} `}</p>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </header>
  );
};
