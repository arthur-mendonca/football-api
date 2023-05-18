import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const apiKey = localStorage.getItem("@apiKey");

  useEffect(() => {
    const apiKey = localStorage.getItem("@apiKey");
    if (!apiKey) {
      navigate("/");
    }
  }, [apiKey]);

  return <></>;
};

export default ProtectedRoute;
