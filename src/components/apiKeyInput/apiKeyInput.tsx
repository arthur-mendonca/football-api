import { useContext, useState } from "react";
import { json } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

const ApiKeyInput = () => {
  const { apiKey, setApiKey, loginUser } = useContext(UserContext);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setApiKey(event.target.value);
  };

  const sendApiKey = () => {
    loginUser(apiKey);
  };
  return (
    <>
      <label htmlFor="api-key-input">Inserir API-Key</label>
      <input
        type="text"
        id="api-key-input"
        value={apiKey}
        onChange={handleInputChange}
      />
      <button type="submit" onClick={sendApiKey}>
        Enviar
      </button>
    </>
  );
};

export default ApiKeyInput;
