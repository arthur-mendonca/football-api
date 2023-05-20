import { SelectedTeamResponse } from "../../../../contexts/selectedTeamContext/interfaces";
import "./style.css";

export const InfoTable = () => {
  const teamData: SelectedTeamResponse = JSON.parse(
    localStorage.getItem("@teamData")!
  );
  const { response } = teamData;
  const { team, venue } = response[0];

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
          <td>{team.country}</td>
        </tr>
        <tr>
          <td>Fundação</td>
          <td>{team.founded}</td>
        </tr>

        <tr>
          <td>Nome</td>
          <td>{team.name}</td>
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
          <td>{venue.address}</td>
        </tr>

        <tr>
          <td>Capacidade</td>
          <td>{venue.capacity}</td>
        </tr>
      </tbody>
    </table>
  );
};
