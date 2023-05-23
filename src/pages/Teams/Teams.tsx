import { ShowTeams } from "../../components/ProtectedRoute/ShowTeams/ShowTeams";
import "./style.css";

export const Teams = () => {
  return (
    <section className="teams">
      <h3>Times</h3>
      <ShowTeams />
    </section>
  );
};
