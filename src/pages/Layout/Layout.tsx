import { Header } from "../../components/Header/Header";

export const Layout = ({ children }) => {
  return (
    <div className="Content-wrapper">
      <Header />
      {children}
    </div>
  );
};
