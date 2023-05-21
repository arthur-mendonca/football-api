import "./App.css";
import { PlayersProvider } from "./contexts/PlayersContext/PlayersContext";
import { CountriesProvider } from "./contexts/countriesContext/countriesContext";
import { LeaguesProvider } from "./contexts/leaguesContext/leaguesContext";
import { SeasonsProvider } from "./contexts/seasonsContext/seasonsContext";
import { SelectedTeamProvider } from "./contexts/selectedTeamContext/selectedTeamContext";
import { StatisticsProvider } from "./contexts/statisticsContext/statisticsContext";
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
                <SelectedTeamProvider>
                  <StatisticsProvider>
                    <PlayersProvider>
                      <Router />
                    </PlayersProvider>
                  </StatisticsProvider>
                </SelectedTeamProvider>
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
