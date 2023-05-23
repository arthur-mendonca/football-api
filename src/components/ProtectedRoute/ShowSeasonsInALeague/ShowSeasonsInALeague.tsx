import "./style.css";
import { useContext, useEffect } from "react";
import { SeasonsContext } from "../../../contexts/seasonsContext/seasonsContext";
import { useNavigate, useParams } from "react-router-dom";
import { TeamsContext } from "../../../contexts/teamsContext/teamsContext";

export const ShowSeasonsInALeague = () => {
  const navigate = useNavigate();

  const { getSeasons, seasons } = useContext(SeasonsContext);
  const { getTeams } = useContext(TeamsContext);
  const { countryCode, leagueId } = useParams();

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    if (leagueId && countryCode) {
      getTeams(leagueId, event.currentTarget.id);
      navigate(`/dashboard/countries/${countryCode}/league/${leagueId}/teams`);
      localStorage.setItem("@seasonYear", event.currentTarget.id);
    }
  };

  useEffect(() => {
    if (leagueId && countryCode) {
      getSeasons(countryCode, leagueId);
    }
  }, [countryCode, leagueId]);

  if (seasons?.response === undefined) {
    return <p>Carregando informações.</p>;
  }

  return (
    <section className="seasons-container">
      <ul className="seasons-list">
        {seasons?.response[0].seasons.map((season) => (
          <li
            key={season.year}
            id={season.year.toString()}
            onClick={handleClick}
          >
            <span className="season-year"> {season.year}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
