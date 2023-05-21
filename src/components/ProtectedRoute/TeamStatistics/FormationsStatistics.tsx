import { TeamStatisticsResponse } from "../../../contexts/statisticsContext/interfaces";

export const FormationsStatistics = () => {
  const statisticsData: TeamStatisticsResponse = JSON.parse(
    localStorage.getItem("@statistics") || ""
  );

  const lineUps = statisticsData.response.lineups.map((lineup) => (
    <tr key={lineup.formation}>
      <td>{lineup.formation}</td>
      <td>{lineup.played}</td>
    </tr>
  ));

  return (
    <div>
      <h4>
        Formações mais usadas na temporada {localStorage.getItem("@seasonYear")}
      </h4>
      <table>
        <thead>
          <tr>
            <th>Formação</th>
            <th>Vezes usada</th>
          </tr>
        </thead>
        <tbody>{lineUps}</tbody>
      </table>
    </div>
  );
};
