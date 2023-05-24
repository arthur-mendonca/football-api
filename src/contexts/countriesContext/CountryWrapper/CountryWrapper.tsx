import { CountriesContext } from "../countriesContext";
import { ReactNode, useContext, useEffect } from "react";

interface CountryWrapperProps {
  children: ReactNode;
  countryCode: string | undefined;
}

export const CountryWrapper = ({
  children,
  countryCode,
}: CountryWrapperProps) => {
  const { setCountry } = useContext(CountriesContext);
  useEffect(() => {
    setCountry(countryCode!);
  }, [setCountry, countryCode]);
  return <>{children}</>;
};
