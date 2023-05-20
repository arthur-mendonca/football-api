import { Outlet } from "react-router-dom";
import { ShowSeasonsInALeague } from "../../components/ProtectedRoute/ShowSeasonsInALeague/ShowSeasonsInALeague";

export const LeagueSeasons = () => {
  return (
    <>
      <h3>Temporadas</h3>
      <ShowSeasonsInALeague />
      <Outlet />
    </>
  );
};

// {location.pathname === "/dashboard/countries" && <ShowCountries />}
// <Outlet />
