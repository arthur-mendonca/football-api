import { useContext } from "react";
import ApiKeyInput from "../../components/apiKeyInput/apiKeyInput";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import { UserContext } from "../../contexts/userContext";
import { WelcomeBlock } from "../../components/WelcomeBlock/welcomeBlock";

const Home = () => {
  const { loggedIn } = useContext(UserContext);
  return (
    <>
      <main>
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

// import React from 'react';
// import { Link } from 'react-router-dom';
