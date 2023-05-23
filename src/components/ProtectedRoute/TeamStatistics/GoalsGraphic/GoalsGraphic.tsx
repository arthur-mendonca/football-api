import { GraphicComponent } from "./GraphicComponent";

import "./style.css";

export const GoalsGraphic = () => {
  return (
    <div className="graphic-container">
      <h4>Gols por minutos de partida na temporada</h4>
      <GraphicComponent />
    </div>
  );
};
