import { Route, Routes, useParams } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Home from "./pages/Home/Home";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import Countries from "./pages/Countries/Countries";
import { CountryWrapper } from "./contexts/countriesContext/CountryWrapper/CountryWrapper";
import { LeaguesList } from "./pages/Leagues/LeagueList";
import { LeagueSeasons } from "./pages/LeagueSeasons/LeagueSeasons";
import { Teams } from "./pages/Teams/Teams";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="countries" element={<Countries />}>
            <Route
              path=":countryCode/*"
              element={
                <CountryWrapper countryCode={useParams().countryCode}>
                  <Routes>
                    <Route path="*" element={<LeaguesList />} />
                    <Route
                      path="league/:leagueId/*"
                      element={
                        <Routes>
                          <Route path="/" element={<LeagueSeasons />} />
                          <Route path="teams" element={<Teams />} />
                        </Routes>
                      }
                    />
                  </Routes>
                </CountryWrapper>
              }
            />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
