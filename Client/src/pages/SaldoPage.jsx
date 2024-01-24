import { useEffect, useState } from "react";
import { SaldoMovil } from "../Components/Saldo";

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
    <div className="position-relative vh-100">
      <div className="position-absolute top-0 start-50 translate-middle-x">
        {(anchoVentana >= 350) & (anchoVentana < 390) ? (
          <h5 className="pt-3">Mis tarjetas</h5>
        ) : (
          <h3 className="pt-5">Mis tarjetas</h3>
        )}
      </div>

      <SaldoMovil />
    </div>
  );
};
