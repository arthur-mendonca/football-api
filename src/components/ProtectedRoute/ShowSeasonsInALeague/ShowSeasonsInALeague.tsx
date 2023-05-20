import { useContext, useEffect } from "react";
import { SeasonsContext } from "../../../contexts/seasonsContext/seasonsContext";
import { useNavigate, useParams } from "react-router-dom";
import { SeasonsResponse } from "../../../contexts/seasonsContext/interfaces";
import "./style.css";
import { TeamsContext } from "../../../contexts/teamsContext/teamsContext";

export const ShowSeasonsInALeague = () => {
  const navigate = useNavigate();
  const { getSeasons } = useContext(SeasonsContext);
  const { getTeams } = useContext(TeamsContext);
  const { countryCode } = useParams();
  const leagueId = localStorage.getItem("@leagueId");
  const seasonsData: SeasonsResponse = JSON.parse(
    localStorage.getItem("@seasonsData") || ""
  );
  const { response } = seasonsData;
  const seasons = response?.[0].seasons;

  useEffect(() => {
    if (leagueId && countryCode) {
      getSeasons(countryCode, leagueId);
    }
  }, [countryCode, leagueId]);

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    console.log(event.currentTarget.id);
    if (leagueId && countryCode) {
      getTeams(leagueId, event.currentTarget.id);
      navigate(`/dashboard/countries/${countryCode}/league/${leagueId}/teams`);
      // /dashboard/countries/:countryCode/league/:leagueId/teams*/
    }
    // https://v3.football.api-sports.io/teams?league=39&season=2021
  };

  return (
    <section>
      <ul className="seasons-list">
        {seasons?.map((season) => (
          <li
            key={season.year}
            id={season.year.toString()}
            onClick={handleClick}
          >
            {season.year}
          </li>
        ))}
      </ul>
    </section>
  );
};
