import { CountriesContext } from "../../../contexts/countriesContext/countriesContext";
import { useContext, useEffect } from "react";
import { ICountryContext } from "../../../contexts/countriesContext/interfaces";
import { UserContext } from "../../../contexts/userContext/userContext";

export const ShowCountries = () => {
  const { countriesData, getCountries } =
    useContext<ICountryContext>(CountriesContext);
  const { apiKey } = useContext(UserContext);

  useEffect(() => {
    getCountries();
    console.log(countriesData);
  }, []);

  return (
    <div>
      <button type="button" onClick={getCountries}>
        Mostrar países
      </button>
      <ul>
        {countriesData.map((country) => (
          <li key={country.code}>
            <p>{country.name}</p>
            <img src={country.flag} alt={country.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};
