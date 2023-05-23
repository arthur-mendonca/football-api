import { useLocation } from "react-router-dom";
import { Header } from "../../components/Header/Header";

export const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <div className="Content-wrapper">
      {location.pathname !== "/" && <Header />}
      {children}
    </div>
  );
};
