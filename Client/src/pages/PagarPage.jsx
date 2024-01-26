import React from "react";
import { Pagar } from "../Components/Pagar/Pagar";
import { MainButton } from "../Components/MainButton/MainButton";
import { FooterBar } from "../Components/Saldo/FooterBar";
import styles from "./pages.module.css";

export const PagarPage = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center pt-5">
        <button>X</button>
        <h3> Monto a cargar</h3>
        <div></div>
      </div>
      <h5 className="pt-5 ps-3">Cuanto queres cargar?</h5>
      <Pagar />
      <div className="d-flex justify-content-center pt-5">
        <MainButton name={"Cargar"} />
      </div>
      <div className={styles.PositionFooter}>
        <FooterBar />
      </div>
    </>
  );
};
