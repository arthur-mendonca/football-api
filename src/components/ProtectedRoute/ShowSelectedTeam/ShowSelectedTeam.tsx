import { useNavigate, useParams } from "react-router-dom";
import { SelectedTeamResponse } from "../../../contexts/selectedTeamContext/interfaces";
import { InfoTable } from "./InfoTable/InfoTable";
import "./style.css";
import { StatisticsContext } from "../../../contexts/statisticsContext/statisticsContext";
import { useContext } from "react";

export const ShowSelectedTeam = () => {
  const teamData: SelectedTeamResponse = JSON.parse(
    localStorage.getItem("@teamData")!
  );

  const { getStatistics } = useContext(StatisticsContext);

  const navigate = useNavigate();
  const { countryCode, leagueId, teamId } = useParams();
  const seasonYear = localStorage.getItem("@seasonYear")!;

  const { response } = teamData;
  const { venue, team } = response[0];

  const handleClick = () => {
    if (teamId && leagueId) {
      getStatistics(teamId, seasonYear, leagueId);
      navigate(
        `/dashboard/countries/${countryCode}/league/${leagueId}/teams/${teamId}/statistics`
      );
    }
  };

  return (
    <div>
      <h4>Informações</h4>
      <InfoTable />
      <img src={venue.image} alt="Estádio" className="venue-image" />
      <button type="button" onClick={handleClick}>
        Ver estatísticas
      </button>
    </div>
  );
};
