import { SaldoDetailDesktop } from "../Components/SaldoDetail/SaldoDetailDesktop";
import { SaldoDetailMovil } from "../Components/SaldoDetail/SaldoDetailMovil";

export const SaldoDetailPage = () => {
  return (
    <div>
      <div className="position-relative vh-100">
        <div className="position-absolute top-0 start-50 translate-middle-x pt-5">
          <h3>Mis tarjetas</h3>
        </div>

        <div className="d-block d-md-none">
          <SaldoDetailMovil />
        </div>

        <div className="d-none d-lg-block">
          <SaldoDetailDesktop />
        </div>
      </div>
    </div>
  );
};
