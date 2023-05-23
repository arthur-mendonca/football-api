import "./style.css";
import { useContext, useEffect } from "react";
import { SelectedTeamContext } from "../../../contexts/selectedTeamContext/selectedTeamContext";
import { useNavigate, useParams } from "react-router-dom";
import { TeamsContext } from "../../../contexts/teamsContext/teamsContext";

export const ShowTeams = () => {
  const navigate = useNavigate();
  const { countryCode, leagueId } = useParams();

  const { teamsData, getTeams } = useContext(TeamsContext);

  const { getSelectedTeam } = useContext(SelectedTeamContext);

  const seasonYear = localStorage.getItem("@seasonYear");

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    getSelectedTeam(event.currentTarget.id);
    navigate(
      `/dashboard/countries/${countryCode}/league/${leagueId}/teams/${event.currentTarget.id}`
    );
  };

  useEffect(() => {
    getTeams(leagueId!, seasonYear!);
  }, [leagueId!, seasonYear!]);

  if (teamsData === undefined) {
    return <p>Dados dos times não estão disponíveis.</p>;
  }

  return (
    <section>
      <ul>
        {teamsData.response.map((team) => (
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
