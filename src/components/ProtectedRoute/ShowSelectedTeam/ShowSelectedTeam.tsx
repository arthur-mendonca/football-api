import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import { InfoTable } from "./InfoTable/InfoTable";
import { StatisticsContext } from "../../../contexts/statisticsContext/statisticsContext";
import { useContext, useEffect } from "react";
import { PlayersContext } from "../../../contexts/PlayersContext/PlayersContext";
import { SelectedTeamContext } from "../../../contexts/selectedTeamContext/selectedTeamContext";

export const ShowSelectedTeam = () => {
  const { getStatistics } = useContext(StatisticsContext);
  const { selectedTeam } = useContext(SelectedTeamContext);
  const { getPlayers } = useContext(PlayersContext);

  const navigate = useNavigate();
  const { countryCode, leagueId, teamId } = useParams();
  const seasonYear = localStorage.getItem("@seasonYear")!;

  const handleClickStatistics = () => {
    if (teamId && leagueId) {
      getStatistics(teamId, seasonYear, leagueId);
      navigate(
        `/dashboard/countries/${countryCode}/league/${leagueId}/teams/${teamId}/statistics`
      );
    }
  };

  const handleClickPlayers = () => {
    getPlayers(teamId!, seasonYear);
    navigate(
      `/dashboard/countries/${countryCode}/league/${leagueId}/teams/${teamId}/players`
    );
  };

  useEffect(() => {
    getPlayers(teamId!, seasonYear);
    getStatistics(teamId!, seasonYear, leagueId!);
  }, [getPlayers, teamId, seasonYear, leagueId!]);

  return (
    <div>
      <h4>Informações</h4>
      <InfoTable />
      <img
        src={selectedTeam?.response[0].venue.image}
        alt="Estádio"
        className="venue-image"
      />

      <div className="buttons-container">
        <button type="button" onClick={handleClickStatistics}>
          Ver estatísticas
        </button>
        <button type="button" onClick={handleClickPlayers}>
          Ver plantel
        </button>
      </div>
    </div>
  );
};
