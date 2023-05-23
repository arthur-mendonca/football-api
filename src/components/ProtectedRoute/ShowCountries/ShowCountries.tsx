import { CountriesContext } from "../../../contexts/countriesContext/countriesContext";
import { useContext, useEffect } from "react";
import { ICountryContext } from "../../../contexts/countriesContext/interfaces";
import "./style.css";
import { LeaguesContext } from "../../../contexts/leaguesContext/leaguesContext";
import { useNavigate } from "react-router-dom";

export const ShowCountries = () => {
  const { countriesData, getCountries } =
    useContext<ICountryContext>(CountriesContext);

  const { getLeagues } = useContext(LeaguesContext);
  const navigate = useNavigate();

  useEffect(() => {
    getCountries();
  }, []);

  const selectCountryHandler = async (countryCode: string) => {
    getLeagues(countryCode);

    navigate(`/dashboard/countries/${countryCode}`);
  };

  if (countriesData === undefined || countriesData.length === 0) {
    return <p>Carregando informações.</p>;
  }

  return (
    <div className="countries-container">
      <ul>
        {countriesData.map((country) => (
          <li key={country.name} id={country.code}>
            <img
              src={country.flag}
              alt={country.name}
              onClick={() => selectCountryHandler(country.code)}
              className="country-flag"
            />
            <p className="country-name">{country.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
