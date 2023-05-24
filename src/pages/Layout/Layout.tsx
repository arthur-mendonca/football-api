import "./style.css";
import { useLocation } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  return (
    <div className="Content-wrapper">
      {location.pathname !== "/" && <Header />}
      {children}
    </div>
  );
};
