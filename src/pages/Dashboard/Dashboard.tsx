import "./style.css";
import { Outlet, useLocation } from "react-router-dom";
import { DashboardContent } from "../../components/DashboardContent/DashboardContent";

export const Dashboard = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/dashboard" && <DashboardContent />}
      <Outlet />
    </>
  );
};
