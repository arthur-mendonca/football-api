import { ShowCountries } from "../../components/ProtectedRoute/ShowCountries/ShowCountries";
import { CountriesContext } from "../../contexts/countriesContext/countriesContext";
import { useContext } from "react";

const Countries = () => {
  const { countriesData } = useContext(CountriesContext);
  return (
    <>
      <div>
        <p>Show Countries</p>
        <ShowCountries />
      </div>
    </>
  );
};

export default Countries;
