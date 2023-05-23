import { SelectedTeamContext } from "../../../../contexts/selectedTeamContext/selectedTeamContext";
import { useContext } from "react";
import "./style.css";

export const InfoTable = () => {
  const { selectedTeam } = useContext(SelectedTeamContext);

  return (
    <table className="info-table">
      <thead>
        <tr>
          <th colSpan={2}>Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>País</td>
          <td>{selectedTeam?.response[0].team.country}</td>
        </tr>
        <tr>
          <td>Fundação</td>
          <td>{selectedTeam?.response[0].team.founded}</td>
        </tr>

        <tr>
          <td>Nome</td>
          <td>{selectedTeam?.response[0].team.name}</td>
        </tr>
      </tbody>

      <thead>
        <tr>
          <th colSpan={2}>Estádio</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Endereço</td>
          <td>{selectedTeam?.response[0].venue.address}</td>
        </tr>

        <tr>
          <td>Capacidade</td>
          <td>{selectedTeam?.response[0].venue.capacity}</td>
        </tr>
      </tbody>
    </table>
  );
};
