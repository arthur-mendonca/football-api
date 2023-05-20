import { useContext, useEffect } from "react";
import { LeaguesContext } from "../../contexts/leaguesContext/leaguesContext";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import {
  CountryDataResponse,
  DataResponse,
} from "../../contexts/leaguesContext/interfaces";
import "./style.css";
import { SeasonsContext } from "../../contexts/seasonsContext/seasonsContext";

export const LeaguesList = () => {
  const { getLeagues } = useContext(LeaguesContext);
  const { getSeasons } = useContext(SeasonsContext);
  const { countryCode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (countryCode) {
      getLeagues(countryCode);
    }
  }, [countryCode]);

  const storedLeagues = localStorage.getItem("@leagues");
  const leagues: DataResponse = storedLeagues
    ? JSON.parse(storedLeagues)
    : null;

  const storedCountryInfo = localStorage.getItem("@countryInfo");
  const countryInfo: CountryDataResponse = storedCountryInfo
    ? JSON.parse(storedCountryInfo)
    : null;

  useEffect(() => {
    storedCountryInfo && storedLeagues;
  }, [storedCountryInfo, storedLeagues]);

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    localStorage.setItem("@leagueId", event.currentTarget.id);

    if (countryCode) {
      getSeasons(countryCode, event.currentTarget.id);
      navigate(
        `/dashboard/countries/${countryCode}/league/${event.currentTarget.id}`
      );
    }
  };

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
        <ul className="league-list">
          {leagues.response.map((league) => (
            <li
              className="league-item"
              id={league.league.id.toString()}
              onClick={handleClick}
            >
              <h4>{league.league.name}</h4>
              <p>{league.league.type}</p>
              <img src={league.league.logo} alt={league.league.name} />
            </li>
          ))}
        </ul>
      </section>
      <Outlet />
    </div>
  );
};
