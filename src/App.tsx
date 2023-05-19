import "./App.css";
import { CountriesProvider } from "./contexts/countriesContext/countriesContext";
import { LeaguesProvider } from "./contexts/leaguesContext/leaguesContext";
import { UserProvider } from "./contexts/userContext/userContext";
import Router from "./routes";
import Toastify from "./toastify/toastify";

function App() {
  return (
    <>
      <UserProvider>
        <CountriesProvider>
          <LeaguesProvider>
            <Router />
          </LeaguesProvider>
        </CountriesProvider>
      </UserProvider>
      <Toastify />
    </>
  );
}

export default App;
