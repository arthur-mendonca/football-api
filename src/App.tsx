import "./App.css";
import { UserProvider } from "./contexts/userContext";
import Router from "./routes";

function App() {
  return (
    <>
      <UserProvider>
        <Router />
      </UserProvider>
    </>
  );
}

export default App;
