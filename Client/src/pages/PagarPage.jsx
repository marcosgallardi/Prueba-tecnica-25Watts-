import { Pagar } from "../Components/Pagar/Pagar";
import { FooterBar } from "../Components/Saldo/FooterBar";
import { ButtonBack } from "../Components/MainButton/ButtonBack";
import styles from "./pages.module.css";
import { useEffect, useState } from "react";

export const PagarPage = () => {
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
    <>
      <div
        className={
          anchoVentana < 400
            ? "d-flex justify-content-between align-items-center pt-3"
            : "d-flex justify-content-between align-items-center pt-5"
        }>
        <ButtonBack path={"/saldoDetail/"} />
        <h3> Monto a cargar</h3>
        <div></div>
      </div>
      <h5 className={anchoVentana < 400 ? "pt-3 ps-3" : "pt-5 ps-3"}>
        ¿Cuanto queres cargar?
      </h5>
      <Pagar />

      <div className={styles.PositionFooter}>
        <FooterBar />
      </div>
    </>
  );
};
