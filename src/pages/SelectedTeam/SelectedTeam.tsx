import "./style.css";
import { ShowSelectedTeam } from "../../components/ProtectedRoute/ShowSelectedTeam/ShowSelectedTeam";
import { SelectedTeamContext } from "../../contexts/selectedTeamContext/selectedTeamContext";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

export const SelectedTeam = () => {
  const { selectedTeam, getSelectedTeam } = useContext(SelectedTeamContext);
  const { teamId } = useParams();

  useEffect(() => {
    getSelectedTeam(teamId!);
  }, []);

  if (selectedTeam === undefined || !selectedTeam.response[0].team.name) {
    return <p>Carregando informações.</p>;
  }

  return (
    <section className="selected-team-section">
      <div>
        <h3>{selectedTeam.response[0].team.name}</h3>
        <img
          src={selectedTeam.response[0].team.logo}
          alt={`${selectedTeam.response[0].team.name}+ logo`}
        />
      </div>
      <ShowSelectedTeam />
    </section>
  );
};
