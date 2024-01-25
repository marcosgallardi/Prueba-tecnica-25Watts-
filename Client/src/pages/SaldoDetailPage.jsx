import { useEffect, useState } from "react";
import { FooterBar } from "../Components/Saldo/FooterBar";
import { SaldoDetailMovil } from "../Components/SaldoDetail/SaldoDetailMovil";
import styles from "./pages.module.css";

export const SaldoDetailPage = () => {
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
      {anchoVentana > 1200 && <div className={styles.backgroundImage}></div>}
      <div className="d-flex justify-content-center">
        <h3 className={ anchoVentana < 1200?"d-flex justify-content-center  pt-5":"d-flex justify-content-center pt-1"}>Mis tarjetas</h3>

        <SaldoDetailMovil />
        <div className={styles.PositionFooter}>
          <FooterBar />
        </div>
      </div>
    </>
  );
};
