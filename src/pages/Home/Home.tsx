import "./style.css";
import { useContext, useEffect } from "react";
import ApiKeyInput from "../../components/Homepage/apiKeyInput/apiKeyInput";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import { UserContext } from "../../contexts/userContext/userContext";
import { WelcomeBlock } from "../../components/Homepage/WelcomeBlock/welcomeBlock";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const getApiKey = localStorage.getItem("@apiKey");

  useEffect(() => {
    if (getApiKey) {
      setLoggedIn(true);
      navigate(`/`);
    } else {
      setLoggedIn(false);
    }
  }, [getApiKey]);

  return (
    <>
      <main className={"main-section"}>
        {!loggedIn && (
          <div className={"main-section-container"}>
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
