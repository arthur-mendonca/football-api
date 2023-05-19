import { useContext, useEffect } from "react";
import { LeaguesContext } from "../../contexts/leaguesContext/leaguesContext";
import { useParams } from "react-router-dom";
import {
  CountryDataResponse,
  DataResponse,
} from "../../contexts/leaguesContext/interfaces";

export const LeaguesList = () => {
  const { getLeagues } = useContext(LeaguesContext);
  const { countryCode } = useParams();

  useEffect(() => {
    if (countryCode) {
      getLeagues(countryCode);
    }
  }, [countryCode]);

  const storedLeagues = localStorage.getItem("@leagues");
  const leagues: DataResponse = storedLeagues
    ? JSON.parse(storedLeagues)
    : null;
  console.log(leagues);

  const storedCountryInfo = localStorage.getItem("@countryInfo");
  const countryInfo: CountryDataResponse = storedCountryInfo
    ? JSON.parse(storedCountryInfo)
    : null;

  useEffect(() => {
    storedCountryInfo && storedLeagues;
  }, [storedCountryInfo, storedLeagues]);

  if (!leagues) {
    return <p>Nenhuma liga disponível</p>;
  }
  return (
    <div>
      <header>
        <h2>{countryInfo.response[0].name}</h2>
        <img
          src={`${countryInfo.response[0].flag}`}
          alt={`${countryInfo.response[0].name}` + " flag"}
        />
      </header>
      <section>
        <ul>
          {leagues.response.map((league) => (
            <li id={league.league.id.toString()}>
              <h4>{league.league.name}</h4>
              <p>{league.league.type}</p>
              <img src={league.league.logo} alt="" />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
