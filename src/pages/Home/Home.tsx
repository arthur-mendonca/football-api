import { useContext, useEffect } from "react";
import ApiKeyInput from "../../components/Homepage/apiKeyInput/apiKeyInput";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import { UserContext } from "../../contexts/userContext/userContext";
import { WelcomeBlock } from "../../components/Homepage/WelcomeBlock/welcomeBlock";
import "./style.css";

const Home = () => {
  const { loggedIn, setLoggedIn } = useContext(UserContext);

  const getApiKey = localStorage.getItem("@apiKey");

  useEffect(() => {
    if (getApiKey) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [getApiKey]);

  return (
    <>
      <main className={"main-section"}>
        {!loggedIn && (
          <div>
            <WelcomeBlock />
            <ApiKeyInput />
          </div>
        )}
        {loggedIn && <ProtectedRoute />}
      </main>
    </>
  );
};

export default Home;
