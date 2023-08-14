import "./style.css";
import { useContext, useEffect } from "react";
import { LeaguesContext } from "../../contexts/leaguesContext/leaguesContext";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { SeasonsContext } from "../../contexts/seasonsContext/seasonsContext";

export const LeaguesList = () => {
  const { getLeagues, leaguesData } = useContext(LeaguesContext);
  const { getSeasons } = useContext(SeasonsContext);
  const { countryCode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (countryCode) {
      getLeagues(countryCode);
    }
  }, [countryCode]);

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    localStorage.setItem("@leagueId", event.currentTarget.id);

    if (countryCode) {
      getSeasons(countryCode, event.currentTarget.id);
      navigate(
        `/dashboard/countries/${countryCode}/league/${event.currentTarget.id}`
      );
    }
  };

  if (!leaguesData) {
    return <p>Carregando informações.</p>;
  }

  return (
    <div>
      <header>
        <h2>{leaguesData.response[0].country.name}</h2>
        <img
          className="country-flag-in-league-list"
          src={`${leaguesData?.response[0]?.country?.flag}`}
          alt={`${leaguesData?.response[0]?.country?.name}` + " flag"}
        />
      </header>
      <section className="leagues-list-container">
        <ul className="league-list">
          {leaguesData.response.map((league) => (
            <li
              className="league-item"
              id={league.league?.id.toString()}
              onClick={handleClick}
              key={league.league?.id}
            >
              <h4>{league.league?.name}</h4>
              <p>{league.league?.type}</p>
              <img src={league.league?.logo} alt={league.league?.name} />
            </li>
          ))}
        </ul>
      </section>
      <Outlet />
    </div>
  );
};
