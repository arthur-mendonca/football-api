import "./style.css";
import Countries from "../Countries/Countries";
import { useLocation } from "react-router-dom";
import { DashboardContent } from "../../components/DashboardContent/DashboardContent";

export const Dashboard = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/dashboard" && <DashboardContent />} <Countries />
    </>
  );
};
