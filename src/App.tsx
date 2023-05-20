import "./App.css";
import { CountriesProvider } from "./contexts/countriesContext/countriesContext";
import { LeaguesProvider } from "./contexts/leaguesContext/leaguesContext";
import { SeasonsProvider } from "./contexts/seasonsContext/seasonsContext";
import { TeamsProvider } from "./contexts/teamsContext/teamsContext";
import { UserProvider } from "./contexts/userContext/userContext";
import Router from "./routes";
import Toastify from "./toastify/toastify";

function App() {
  return (
    <>
      <UserProvider>
        <CountriesProvider>
          <LeaguesProvider>
            <SeasonsProvider>
              <TeamsProvider>
                <Router />
              </TeamsProvider>
            </SeasonsProvider>
          </LeaguesProvider>
        </CountriesProvider>
      </UserProvider>
      <Toastify />
    </>
  );
}

export default App;
