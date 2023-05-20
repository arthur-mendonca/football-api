import { ShowSelectedTeam } from "../../components/ProtectedRoute/ShowSelectedTeam/ShowSelectedTeam";
import { SelectedTeamResponse } from "../../contexts/selectedTeamContext/interfaces";

export const SelectedTeam = () => {
  const teamData: SelectedTeamResponse = JSON.parse(
    localStorage.getItem("@teamData")!
  );

  if (!teamData) {
    return (
      <>
        <p>Dados não disponíveis</p>
      </>
    );
  }

  return (
    <section>
      <h3>{teamData.response[0].team.name}</h3>
      <img
        src={teamData.response[0].team.logo}
        alt={`${teamData.response[0].team.name}+ logo`}
      />
      <ShowSelectedTeam />
    </section>
  );
};
