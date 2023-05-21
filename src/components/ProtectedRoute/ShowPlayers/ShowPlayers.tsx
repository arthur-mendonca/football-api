import {
  Player,
  ResponsePlayersData,
} from "../../../contexts/PlayersContext/interfaces";
import { SelectedTeamResponse } from "../../../contexts/selectedTeamContext/interfaces";

export const ShowPlayers = () => {
  const playersData: ResponsePlayersData = JSON.parse(
    localStorage.getItem("@playersData") || "{}"
  );

  const teamData: SelectedTeamResponse = JSON.parse(
    localStorage.getItem("@teamData") || "{}"
  );
  localStorage.getItem("@teamName") || "";

  const seasonYear = localStorage.getItem("@seasonYear") || "";

  const players: Player[] = playersData.response.map((item) => {
    const player = item.player;
    return {
      id: player.id,
      name: player.name,
      firstname: player.firstname,
      lastname: player.lastname,
      age: player.age,
      birth: player.birth,
      nationality: player.nationality,
      height: player.height,
      weight: player.weight,
      injured: player.injured,
      photo: player.photo,
    };
  });

  return (
    <div>
      <h3>
        Plantel de {teamData.response[0]?.team.name} na temporada {seasonYear}
      </h3>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Nacionalidade</th>
            <th>Foto</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => {
            return (
              <tr key={player.id}>
                <td>{player.name}</td>
                <td>{player.age}</td>
                <td>{player.nationality}</td>
                <td>
                  <img src={player.photo} alt={player.name} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
