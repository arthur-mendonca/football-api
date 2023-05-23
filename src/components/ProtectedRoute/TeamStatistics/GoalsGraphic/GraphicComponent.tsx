import Chart from "chart.js/auto";
import { useContext, useEffect, useRef } from "react";
import { StatisticsContext } from "../../../../contexts/statisticsContext/statisticsContext";
import { useParams } from "react-router-dom";

export const GraphicComponent = () => {
  const chartRef = useRef(null);
  const { statisticsData, getStatistics } = useContext(StatisticsContext);

  const { teamId, leagueId } = useParams();
  const seasonYear = localStorage.getItem("@seasonYear");

  useEffect(() => {
    if (chartRef.current) {
      getStatistics(teamId!, seasonYear!, leagueId!);
      createChart();
    }
    return () => {
      chartRef.current = null;
    };
  }, [teamId!, seasonYear!, leagueId!]);

  const createChart = () => {
    const chartContext = chartRef.current.getContext("2d");
    new Chart(chartContext, {
      type: "bar",
      data: {
        labels: [
          "0-15",
          "16-30",
          "31-45",
          "46-60",
          "61-75",
          "76-90",
          "91-105",
          "106-120",
        ],
        datasets: [
          {
            label: "Goals",
            data: [
              statisticsData?.response.goals.for.minute["0-15"].total,
              statisticsData?.response.goals.for.minute["16-30"].total,
              statisticsData?.response.goals.for.minute["31-45"].total,
              statisticsData?.response.goals.for.minute["46-60"].total,
              statisticsData?.response.goals.for.minute["61-75"].total,
              statisticsData?.response.goals.for.minute["76-90"].total,
              statisticsData?.response.goals.for.minute["91-105"].total,
              statisticsData?.response.goals.for.minute["106-120"].total,
            ],

            backgroundColor: "rgb(112, 209, 103)",
          },
        ],
      },
    });
  };

  return <canvas ref={chartRef!} />;
};
