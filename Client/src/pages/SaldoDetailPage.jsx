import { SaldoDetailMovil } from "../Components/SaldoDetail/SaldoDetailMovil";

export const SaldoDetailPage = () => {
  return (
    <div>
      <div className="position-relative vh-100">
        <div className="position-absolute top-0 start-50 translate-middle-x pt-5">
          <h3>Mis tarjetas</h3>
        </div>

        <SaldoDetailMovil />
      </div>
    </div>
  );
};
