import { SaldoDesktop, SaldoMovil } from "../Components/Saldo";

export const SaldoPage = () => {
  return (
    <div className="position-relative vh-100">
      <div className="position-absolute top-0 start-50 translate-middle-x pt-5">
        <h3>Mis tarjetas</h3>
      </div>

      <div className="d-block d-md-none">
        <SaldoMovil />
      </div>

      <div className="d-none d-lg-block">
        <SaldoDesktop />
      </div>
    </div>
  );
};
