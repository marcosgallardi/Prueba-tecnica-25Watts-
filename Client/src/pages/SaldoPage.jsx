import { useEffect, useState } from "react";
import { SaldoMovil } from "../Components/Saldo";
import { ButtonBack } from "../Components/MainButton/ButtonBack";

export const SaldoPage = () => {
  const [anchoVentana, setAnchoVentana] = useState(window.innerWidth);

  useEffect(() => {
    const actualizarAnchoVentana = () => {
      setAnchoVentana(window.innerWidth);
    };

    window.addEventListener("resize", actualizarAnchoVentana);

    return () => {
      window.removeEventListener("resize", actualizarAnchoVentana);
    };
  }, []);

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="pt-5 ps-3">
        <ButtonBack path={"/login"} />
      </div>

      {(anchoVentana >= 350) & (anchoVentana < 390) ? (
        <h5 className="pt-3">Mis tarjetas</h5>
      ) : (
        <h3 className="pt-5">Mis tarjetas</h3>
      )}
      <div className="div"></div>

      <SaldoMovil />
    </div>
  );
};
