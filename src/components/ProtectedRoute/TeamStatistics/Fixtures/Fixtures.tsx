import "./style.css";
import { StatisticsContext } from "../../../../contexts/statisticsContext/statisticsContext";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Fixtures = () => {
  const { statisticsData, getStatistics } = useContext(StatisticsContext);

  const { teamId, leagueId } = useParams();
  const seasonYear = localStorage.getItem("@seasonYear");

  useEffect(() => {
    getStatistics(teamId!, seasonYear!, leagueId!);
  }, []);

  if (statisticsData?.response === undefined) {
    return <p>Dados indisponíveis.</p>;
  }

  const { fixtures } = statisticsData.response;

  return (
    <div>
      <h4>Resultados da temporada {localStorage.getItem("@seasonYear")!}</h4>
      <table className="fixtures-Table">
        <tr>
          <th></th>
          <th>Casa</th>
          <th>Fora</th>
          <th>Total</th>
        </tr>
        <tr>
          <td>Nº de jogos</td>
          <td>{fixtures.played.home}</td>
          <td>{fixtures.played.away}</td>
          <td>{fixtures.played.total}</td>
        </tr>
        <tr>
          <td>Vitórias</td>
          <td>{fixtures.wins.home}</td>
          <td>{fixtures.wins.away}</td>
          <td>{fixtures.wins.total}</td>
        </tr>
        <tr>
          <td>Empates</td>
          <td>{fixtures.draws.home}</td>
          <td>{fixtures.draws.away}</td>
          <td>{fixtures.draws.total}</td>
        </tr>
        <tr>
          <td>Derrotas</td>
          <td>{fixtures.loses.home}</td>
          <td>{fixtures.loses.away}</td>
          <td>{fixtures.loses.total}</td>
        </tr>
      </table>
    </div>
  );
};
