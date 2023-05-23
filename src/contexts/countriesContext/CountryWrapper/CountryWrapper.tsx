import { CountriesContext } from "../countriesContext";
import { useContext, useEffect } from "react";

export const CountryWrapper = ({ children, countryCode }) => {
  const { setCountry } = useContext(CountriesContext);
  useEffect(() => {
    setCountry(countryCode);
  }, [setCountry, countryCode]);
  return <>{children}</>;
};
