import { Fixtures } from "../../components/ProtectedRoute/TeamStatistics/Fixtures/Fixtures";
import { FormationsStatistics } from "../../components/ProtectedRoute/TeamStatistics/FormationStatistics/FormationsStatistics";
import { GoalsGraphic } from "../../components/ProtectedRoute/TeamStatistics/GoalsGraphic/GoalsGraphic";

export const Statistics = () => {
  return (
    <>
      <h3>Estatísticas</h3>
      <FormationsStatistics />
      <Fixtures />
      <GoalsGraphic />
    </>
  );
};
