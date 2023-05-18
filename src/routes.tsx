import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Home from "./pages/Home/Home";
import SelectCountry from "./pages/selectCountry/selectCountry";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/selectcountry" element={<SelectCountry />} />
      </Route>
    </Routes>
  );
};

export default Router;
