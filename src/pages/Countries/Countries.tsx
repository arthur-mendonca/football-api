import { Outlet, useLocation } from "react-router-dom";
import { ShowCountries } from "../../components/ProtectedRoute/ShowCountries/ShowCountries";

const Countries = () => {
  const location = useLocation();

  return (
    <>
      <div>
        <p>Show Countries</p>
        {location.pathname === "/dashboard/countries" && <ShowCountries />}
        <Outlet />
      </div>
    </>
  );
};

export default Countries;
