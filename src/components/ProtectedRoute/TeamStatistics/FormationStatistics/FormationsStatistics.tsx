import "./styles.css";
import { StatisticsContext } from "../../../../contexts/statisticsContext/statisticsContext";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

export const FormationsStatistics = () => {
  const { statisticsData, getStatistics } = useContext(StatisticsContext);

  const { teamId, leagueId } = useParams();
  const seasonYear = localStorage.getItem("@seasonYear");

  useEffect(() => {
    getStatistics(teamId!, seasonYear!, leagueId!);
  }, []);

  if (statisticsData?.response === undefined) {
    return <p>Dados não disponíveis.</p>;
  }

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
      <table className="statistics-Table">
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
