import { CountriesContext } from "../../../contexts/countriesContext/countriesContext";
import { useContext, useEffect } from "react";
import { ICountryContext } from "../../../contexts/countriesContext/interfaces";
import "./style.css";
import { LeaguesContext } from "../../../contexts/leaguesContext/leaguesContext";
import { useNavigate } from "react-router-dom";

export const ShowCountries = () => {
  const { countriesData, getCountries } =
    useContext<ICountryContext>(CountriesContext);

  const { getLeagues, getCountryInfo } = useContext(LeaguesContext);
  const navigate = useNavigate();

  useEffect(() => {
    getCountries();
  }, []);

  const selectCountryHandler = async (countryCode: string) => {
    getLeagues(countryCode);
    getCountryInfo(countryCode);
    localStorage.setItem("@countryCode", countryCode);
    navigate(`/dashboard/countries/${countryCode}`);
  };

  return (
    <div>
      <ul>
        {countriesData.map((country) => (
          <li key={country.name} id={country.code}>
            <p>{country.name}</p>
            <img
              src={country.flag}
              alt={country.name}
              onClick={() => selectCountryHandler(country.code)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
