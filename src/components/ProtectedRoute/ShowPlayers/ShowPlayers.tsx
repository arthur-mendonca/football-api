import { PlayersContext } from "../../../contexts/PlayersContext/PlayersContext";
import { Player } from "../../../contexts/PlayersContext/interfaces";
import { useContext, useEffect } from "react";
import { SelectedTeamContext } from "../../../contexts/selectedTeamContext/selectedTeamContext";
import { useParams } from "react-router-dom";

export const ShowPlayers = () => {
  const { playersData, getPlayers } = useContext(PlayersContext);
  const { selectedTeam, getSelectedTeam } = useContext(SelectedTeamContext);
  const { teamId } = useParams();

  const seasonYear = localStorage.getItem("@seasonYear") || "";

  useEffect(() => {
    getPlayers(teamId!, seasonYear);
    getSelectedTeam(teamId!);
  }, []);

  console.log(selectedTeam?.response[0].team.name);

  if (playersData?.response === undefined) {
    return <p>Dados indisponíveis.</p>;
  }

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
        Plantel de {selectedTeam?.response[0].team.name} na temporada
        {seasonYear}
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
