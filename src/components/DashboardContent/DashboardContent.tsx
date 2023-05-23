import "./style.css";
import { useContext, useEffect } from "react";
import { DashboardContext } from "../../contexts/DashboardContext/DashboardContext";
import { useNavigate } from "react-router-dom";

export const DashboardContent = () => {
  const { statusData, getStatus } = useContext(DashboardContext);
  const navigate = useNavigate();

  useEffect(() => {
    getStatus();
  }, []);

  const dateString = statusData?.response.subscription.end;
  const expireDate = new Date(dateString!).toLocaleDateString("pt-BR");

  const handleClick = () => {
    navigate(`/dashboard/countries`);
  };
  return (
    <>
      <section className="account-section">
        <div className="account-details">
          <h4 className="account-title">Dados da conta</h4>
          <div className="account-info">
            <p className="account-label">Email</p>
            <p className="account-value">
              {statusData?.response.account.email}
            </p>
          </div>
          <div className="account-info">
            <p className="account-label">Nome do usuário</p>
            <p className="account-value">
              {statusData?.response.account.firstname}{" "}
              {statusData?.response.account.lastname}
            </p>
          </div>
          <div className="subscription-info">
            <div className="subscription-details">
              <p className="subscription-label">Estado da assinatura</p>
              <p className="subscription-value">
                {statusData?.response.subscription.active ? "Ativa" : "Inativa"}
              </p>
            </div>
            <div className="subscription-details">
              <p className="subscription-label">Data de expiração</p>
              <p className="subscription-value">{expireDate}</p>
            </div>
            <div className="subscription-details">
              <p className="subscription-label">Tipo de assinatura</p>
              <p className="subscription-value">
                {statusData?.response.subscription.plan}
              </p>
            </div>
            <div className="subscription-details">
              <p className="subscription-label">
                Limite diário de requisições{" "}
              </p>
              <p className="subscription-value">
                {statusData?.response.requests.limit_day}{" "}
              </p>
            </div>
            <div className="subscription-details">
              <p className="subscription-label">Requisições restantes </p>
              <p className="subscription-value">
                {statusData?.response.requests.current}{" "}
              </p>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="countries-button"
          onClick={handleClick}
        >
          Ver países disponíveis
        </button>
      </section>
    </>
  );
};
