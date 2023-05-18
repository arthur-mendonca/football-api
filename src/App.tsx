import "./App.css";
import { CountriesProvider } from "./contexts/countriesContext/countriesContext";
import { UserProvider } from "./contexts/userContext/userContext";
import Router from "./routes";
import Toastify from "./toastify/toastify";

function App() {
  return (
    <>
      <UserProvider>
        <CountriesProvider>
          <Router />
        </CountriesProvider>
      </UserProvider>
      <Toastify />
    </>
  );
}

export default App;
