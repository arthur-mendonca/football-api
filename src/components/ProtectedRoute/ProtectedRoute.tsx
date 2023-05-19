import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const apiKey = localStorage.getItem("@apiKey");

  useEffect(() => {
    if (!apiKey) {
      navigate("/");
    }
  }, [apiKey]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
