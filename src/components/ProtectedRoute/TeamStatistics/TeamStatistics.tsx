import { TeamStatisticsResponse } from "../../../contexts/statisticsContext/interfaces";

export const TeamStatistics = () => {
  const statisticsData: TeamStatisticsResponse = JSON.parse(
    localStorage.getItem("@statistics") || ""
  );

  const lineUps = statisticsData.response.lineups.map((lineup) => (
    <p>{lineup.formation}</p>
  ));

  return (
    <div>
      <ul>{lineUps}</ul>
    </div>
  );
};
