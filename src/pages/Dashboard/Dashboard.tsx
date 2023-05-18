import { CountriesContext } from "../../contexts/countriesContext/countriesContext";
import { Country } from "../../contexts/countriesContext/interfaces";
import Countries from "../Countries/Countries";
import { useContext } from "react";

export const Dashboard = () => {
  const { countriesData } = useContext(CountriesContext);

  return (
    <>
      <div>
        <p>Dashboard</p>
        <Countries />
      </div>
    </>
  );
};
