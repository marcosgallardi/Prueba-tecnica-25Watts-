import { CardContainer } from "./CardContainer";

import styles from "./Saldo.module.css";
import { FooterBar } from "./FooterBar";

import { useEffect, useState } from "react";
import { MainButton } from "../MainButton/MainButton";

export const SaldoMovil = () => {
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
    <div
      className={
        (anchoVentana >= 350) & (anchoVentana < 390)
          ? styles.containerSaldo1
          : styles.containerSaldo
      }>
      <h3 className={styles.textSelecciona}>Seleccioná una tarjeta</h3>

      <CardContainer />

      <div
        className={
          anchoVentana > 1200 ? styles.buttonAux : styles.PositionButtonSald
        }>
        <MainButton
          name={"Continuar"}
          size={
            (anchoVentana >= 350) & (anchoVentana < 390)
              ? { width: "300px", height: "40px" }
              : "0px"
          }
        />
      </div>

      <div className={styles.PositionFooter}>
        <FooterBar />
      </div>
    </div>
  );
};
