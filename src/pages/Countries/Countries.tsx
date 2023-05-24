import { useLocation } from "react-router-dom";
import { ShowCountries } from "../../components/ProtectedRoute/ShowCountries/ShowCountries";

const Countries = () => {
  const location = useLocation();

  return (
    <>
      <div>
        {location.pathname === "/dashboard/countries" && (
          <>
            <h4>Países disponíveis</h4> <ShowCountries />{" "}
          </>
        )}
      </div>
    </>
  );
};

export default Countries;
