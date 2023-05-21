import { useContext, useEffect, useState } from "react";
import { TeamsDataResponse } from "../../../contexts/teamsContext/interfaces";
import { SelectedTeamContext } from "../../../contexts/selectedTeamContext/selectedTeamContext";
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";

export const ShowTeams = () => {
  const [selectedTeamId, setSelectedTeamId] = useState("");

  const teams: TeamsDataResponse = JSON.parse(
    localStorage.getItem("@teamsData") || ""
  );
  const navigate = useNavigate();
  const { countryCode, leagueId } = useParams();

  const { getSelectedTeam } = useContext(SelectedTeamContext);

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    getSelectedTeam(event.currentTarget.id);
    setSelectedTeamId(event.currentTarget.id);

    navigate(
      `/dashboard/countries/${countryCode}/league/${leagueId}/teams/${event.currentTarget.id}`
    );
  };

  useEffect(() => {
    getSelectedTeam(selectedTeamId);
  }, [selectedTeamId, getSelectedTeam]);

  return (
    <section>
      <ul>
        {teams.response.map((team) => (
          <li
            key={team.team.id}
            id={team.team.id.toString()}
            onClick={handleClick}
          >
            <img src={team.team.logo} alt={`${team.team.name}+ logo`} />
            <p> {team.team.name} </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
